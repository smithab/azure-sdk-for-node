/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the HostNameBinding class.
 * @constructor
 * A host name binding object
 * @member {string} [hostNameBindingName] Hostname
 * 
 * @member {string} [siteName] Web app name
 * 
 * @member {string} [domainId] Fully qualified ARM domain resource URI
 * 
 * @member {string} [azureResourceName] Azure resource name
 * 
 * @member {string} [azureResourceType] Azure resource type. Possible values
 * include: 'Website', 'TrafficManager'
 * 
 * @member {string} [customHostNameDnsRecordType] Custom DNS record type.
 * Possible values include: 'CName', 'A'
 * 
 * @member {string} [hostNameType] Host name type. Possible values include:
 * 'Verified', 'Managed'
 * 
 */
function HostNameBinding() {
  HostNameBinding['super_'].call(this);
}

util.inherits(HostNameBinding, models['Resource']);

/**
 * Defines the metadata of HostNameBinding
 *
 * @returns {object} metadata of HostNameBinding
 *
 */
HostNameBinding.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'HostNameBinding',
    type: {
      name: 'Composite',
      className: 'HostNameBinding',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        kind: {
          required: false,
          serializedName: 'kind',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        hostNameBindingName: {
          required: false,
          serializedName: 'properties.name',
          type: {
            name: 'String'
          }
        },
        siteName: {
          required: false,
          serializedName: 'properties.siteName',
          type: {
            name: 'String'
          }
        },
        domainId: {
          required: false,
          serializedName: 'properties.domainId',
          type: {
            name: 'String'
          }
        },
        azureResourceName: {
          required: false,
          serializedName: 'properties.azureResourceName',
          type: {
            name: 'String'
          }
        },
        azureResourceType: {
          required: false,
          serializedName: 'properties.azureResourceType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Website', 'TrafficManager' ]
          }
        },
        customHostNameDnsRecordType: {
          required: false,
          serializedName: 'properties.customHostNameDnsRecordType',
          type: {
            name: 'Enum',
            allowedValues: [ 'CName', 'A' ]
          }
        },
        hostNameType: {
          required: false,
          serializedName: 'properties.hostNameType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Verified', 'Managed' ]
          }
        }
      }
    }
  };
};

module.exports = HostNameBinding;
