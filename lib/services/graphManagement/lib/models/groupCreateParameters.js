/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GroupCreateParameters class.
 * @constructor
 * Request parameters for create a new group
 * @member {string} displayName Group display name
 * 
 * @member {boolean} mailEnabled Mail
 * 
 * @member {string} mailNickname Mail nick name
 * 
 * @member {boolean} securityEnabled Is security enabled
 * 
 */
function GroupCreateParameters() {
}

/**
 * Defines the metadata of GroupCreateParameters
 *
 * @returns {object} metadata of GroupCreateParameters
 *
 */
GroupCreateParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GroupCreateParameters',
    type: {
      name: 'Composite',
      className: 'GroupCreateParameters',
      modelProperties: {
        displayName: {
          required: true,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        mailEnabled: {
          required: true,
          serializedName: 'mailEnabled',
          type: {
            name: 'Boolean'
          }
        },
        mailNickname: {
          required: true,
          serializedName: 'mailNickname',
          type: {
            name: 'String'
          }
        },
        securityEnabled: {
          required: true,
          serializedName: 'securityEnabled',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = GroupCreateParameters;