// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '28adf6bf-ce46-4eb0-ba29-b6d1a69ab859';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/resourceGroups/nodeTestGroup9264/providers/Microsoft.Storage/storageAccounts/testacc6141?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/providers/Microsoft.Storage/operations/c75f243a-6891-48c7-b3f2-e9beac7753ed?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '70ef6a89-704d-4ad2-813d-1f5ed40541e9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '70ef6a89-704d-4ad2-813d-1f5ed40541e9',
  'x-ms-routing-request-id': 'WESTUS:20160412T192034Z:70ef6a89-704d-4ad2-813d-1f5ed40541e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 19:20:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/resourceGroups/nodeTestGroup9264/providers/Microsoft.Storage/storageAccounts/testacc6141?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/providers/Microsoft.Storage/operations/c75f243a-6891-48c7-b3f2-e9beac7753ed?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '70ef6a89-704d-4ad2-813d-1f5ed40541e9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '70ef6a89-704d-4ad2-813d-1f5ed40541e9',
  'x-ms-routing-request-id': 'WESTUS:20160412T192034Z:70ef6a89-704d-4ad2-813d-1f5ed40541e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 19:20:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/providers/Microsoft.Storage/operations/c75f243a-6891-48c7-b3f2-e9beac7753ed?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/resourceGroups/nodetestgroup9264/providers/Microsoft.Storage/storageAccounts/testacc6141\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"testacc6141\",\"properties\":{\"creationTime\":\"2016-04-12T19:20:33.2288820Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2016-04-12T19:20:33.2298823Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://testacc6141.blob.core.windows.net/\",\"file\":\"https://testacc6141.file.core.windows.net/\",\"queue\":\"https://testacc6141.queue.core.windows.net/\",\"table\":\"https://testacc6141.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '829',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9e99d9ac-7e75-4acd-9717-dd378ab38686',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '9e99d9ac-7e75-4acd-9717-dd378ab38686',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160412T192104Z:9e99d9ac-7e75-4acd-9717-dd378ab38686',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 19:21:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/providers/Microsoft.Storage/operations/c75f243a-6891-48c7-b3f2-e9beac7753ed?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/resourceGroups/nodetestgroup9264/providers/Microsoft.Storage/storageAccounts/testacc6141\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"testacc6141\",\"properties\":{\"creationTime\":\"2016-04-12T19:20:33.2288820Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2016-04-12T19:20:33.2298823Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://testacc6141.blob.core.windows.net/\",\"file\":\"https://testacc6141.file.core.windows.net/\",\"queue\":\"https://testacc6141.queue.core.windows.net/\",\"table\":\"https://testacc6141.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '829',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9e99d9ac-7e75-4acd-9717-dd378ab38686',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '9e99d9ac-7e75-4acd-9717-dd378ab38686',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160412T192104Z:9e99d9ac-7e75-4acd-9717-dd378ab38686',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 19:21:03 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['testacc6141'];};