/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ClusterLoadInformation class.
 * @constructor
 * @member {string} [lastBalancingStartTimeUtc]
 * 
 * @member {string} [lastBalancingEndTimeUtc]
 * 
 * @member {array} [loadMetricInformation]
 * 
 */
function ClusterLoadInformation() {
}

/**
 * Defines the metadata of ClusterLoadInformation
 *
 * @returns {object} metadata of ClusterLoadInformation
 *
 */
ClusterLoadInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ClusterLoadInformation',
    type: {
      name: 'Composite',
      className: 'ClusterLoadInformation',
      modelProperties: {
        lastBalancingStartTimeUtc: {
          required: false,
          serializedName: 'LastBalancingStartTimeUtc',
          type: {
            name: 'String'
          }
        },
        lastBalancingEndTimeUtc: {
          required: false,
          serializedName: 'LastBalancingEndTimeUtc',
          type: {
            name: 'String'
          }
        },
        loadMetricInformation: {
          required: false,
          serializedName: 'LoadMetricInformation',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'LoadMetricInformationElementType',
                type: {
                  name: 'Composite',
                  className: 'LoadMetricInformation'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ClusterLoadInformation;
