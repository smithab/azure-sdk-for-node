# This script must be run after generation of the C# SDK from AutoRest/Swagger 
# from its location in tools, specifying DataLakeStore, DataLakeAnalytics or both switches.
param (
	[switch] $DataLakeStore,
	[switch] $DataLakeAnalytics
)

# Helper Functions
function ExecuteActions
{
	param (
		[hashtable]$fileActionDictionary
	)
	
	foreach($file in $fileActionDictionary.Keys)
	{
		foreach($action in $fileActionDictionary[$file])
		{
			# execute each action on the file
			ExecuteAction -fileName $file -actionName $action
		}
	}
}

function ExecuteAction
{
	param (
		[string]$fileName,
		[string]$actionName
	)
	
	switch($actionName)
	{
		"StoreVariableReplacement"
		{
			$result = AccountAndUriVariableReplacement -filePath (Join-Path $dataLakeStorePath $fileName) -uriVariableName "datalakeserviceuri"
			LogStatus -result $result -fileName $fileName -actionName $actionName
			break
		}
		"UrlReplacement"
		{
			$result = UrlStringReplacement -filePath (Join-Path $dataLakeStorePath $fileName) -uriVariableList @("fileOpenRequestLink", "fileAppendRequestLink", "fileCreateRequestLink")
			LogStatus -result $result -fileName $fileName -actionName $actionName
			break
		}
		"HttpClientHandlerReplacement"
		{
			$result = HttpClientHandlerReplacement -filePath (Join-Path $dataLakeStorePath $fileName)
			LogStatus -result $result -fileName $fileName -actionName $actionName
			break
		}
		"JobVariableReplacement"
		{
			$result = AccountAndUriVariableReplacement -filePath (Join-Path $dataLakeAnalyticsPath $fileName) -uriVariableName "jobserviceuri"
			LogStatus -result $result -fileName $fileName -actionName $actionName
			break
		}
		"CatalogVariableReplacement"
		{
			$result = AccountAndUriVariableReplacement -filePath (Join-Path $dataLakeAnalyticsPath $fileName) -uriVariableName "catalogserviceuri"
			LogStatus -result $result -fileName $fileName -actionName $actionName
			break
		}
		default
		{
			throw "Unknown action specified. Action name: $actionName"
		}
	}
}

function GetFileContent
{
	param (
		[string] $filePath
	)
	
	if($pathAndContentsPairs.ContainsKey($filePath))
	{
		return $pathAndContentsPairs[$filePath]
	}
	else
	{
		return Get-Content -Path $filePath -Encoding UTF8 -Raw
	}
}

function SaveAllFileContent
{
	foreach($file in $pathAndContentsPairs.Keys)
	{
		Out-File -FilePath $file -Encoding UTF8 -Force -Confirm:$false -InputObject $pathAndContentsPairs[$file]
	}
}

function AddOrUpdateFileList
{
	param (
		[string] $filePath,
		$content
	)
	
	if($pathAndContentsPairs.ContainsKey($filePath))
	{
		$pathAndContentsPairs[$filePath] = $content
	}
	else
	{
		$pathAndContentsPairs.Add($filePath, $content)
	}
}

function LogStatus
{
	param (
		[bool]$result,
		[string]$fileName,
		[string]$actionName
	)
	
	if($result)
	{
		Write-Host "Successfully Executed $actionName on file: $fileName"
	}
	else
	{
		Write-Warning "Action: $actionName resulted in no change to file: $fileName"
	}
}

function AccountAndUriVariableReplacement
{
	param (
		[string]$filePath,
		[string]$uriVariableName
	)
	
	$fileContent = GetFileContent $filePath
	[string]$newFile = $fileContent.Replace("replace('{accountname}'","replace('accountname'")
	[string]$newFile = $newFile.Replace("replace('{$uriVariableName}'","replace('$uriVariableName'")
	if($newFile -ine $fileContent)
	{
		AddOrUpdateFileList -filePath $filePath -content $newFile
		return $true
	}
	
	return $false
	
}

function UrlStringReplacement
{
	param (
		[string]$filePath,
		[array] $uriVariableList
	)
	
	$fileContent = GetFileContent $filePath
	[string]$newFile = $fileContent
	foreach($uriVariable in $uriVariableList)
	{
		$stringToReplace = @"
  var requestUrl = this.client.baseUri +
                   '//{$uriVariable}';
  requestUrl = requestUrl.replace('{$uriVariable}', $uriVariable);
"@
		$stringToUse = "  var requestUrl = $uriVariable;"
		[string]$newFile = $newFile.Replace($stringToReplace, $stringToUse)
	}
	
	if($newFile -ine $fileContent)
	{
		AddOrUpdateFileList -filePath $filePath -content $newFile
		return $true
	}
	
	return $false
}

function HttpClientHandlerReplacement
{
	param (
		[string]$filePath
	)
	
	$fileContent = GetFileContent $filePath
	[string]$newFile = $fileContent
	
	$stringToReplace = "if (!options) options = {};"
	$stringToUse = @"
if (!options) options = {};

  options.disableAutoRedirect = true;
  options.disableErrorHandling = true;
"@
	[string]$newFile = $newFile.Replace($stringToReplace, $stringToUse)
	
	if($newFile -ine $fileContent)
	{
		AddOrUpdateFileList -filePath $filePath -content $newFile
		return $true
	}
	
	return $false
}

# define constants
$executingDir = Split-Path -parent $MyInvocation.MyCommand.Definition
$dataLakeStorePath = Join-Path $executingDir "..\lib\services\dataLake.Store\lib"
$dataLakeAnalyticsPath = Join-Path $executingDir "..\lib\services\dataLake.Analytics\lib"

# define file/action pairs
$dataLakeStoreActions = @{"filesystem\operations\fileSystem.js" = @("StoreVariableReplacement")}
$dataLakeAnalyticsActions = @{"job\operations\job.js" = @("JobVariableReplacement");
							  "catalog\operations\catalog.js" = @("CatalogVariableReplacement")
							 }

# Define the list of filepaths and their contents that need to be set
$pathAndContentsPairs = @{}

if($DataLakeStore)
{
	# Iterate through actions for DataLake Store
	ExecuteActions -fileActionDictionary $dataLakeStoreActions
}

if($DataLakeAnalytics)
{
	# Iterate through actions for DataLake Analytics
	ExecuteActions -fileActionDictionary $dataLakeAnalyticsActions
}

SaveAllFileContent