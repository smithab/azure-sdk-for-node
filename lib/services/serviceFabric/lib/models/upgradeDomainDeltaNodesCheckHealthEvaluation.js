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
 * Initializes a new instance of the UpgradeDomainDeltaNodesCheckHealthEvaluation class.
 * @constructor
 * @member {string} [upgradeDomainName]
 * 
 * @member {array} [unhealthyEvaluations]
 * 
 * @member {number} [baselineErrorCount]
 * 
 * @member {number} [baselineTotalCount]
 * 
 * @member {number} [totalCount]
 * 
 * @member {number} [maxPercentUpgradeDomainDeltaUnhealthyNodes]
 * 
 */
function UpgradeDomainDeltaNodesCheckHealthEvaluation() {
  UpgradeDomainDeltaNodesCheckHealthEvaluation['super_'].call(this);
}

util.inherits(UpgradeDomainDeltaNodesCheckHealthEvaluation, models['HealthEvaluation']);

/**
 * Defines the metadata of UpgradeDomainDeltaNodesCheckHealthEvaluation
 *
 * @returns {object} metadata of UpgradeDomainDeltaNodesCheckHealthEvaluation
 *
 */
UpgradeDomainDeltaNodesCheckHealthEvaluation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'HealthEvaluationKindUpgradeDomainDeltaNodesCheck',
    type: {
      name: 'Composite',
      className: 'UpgradeDomainDeltaNodesCheckHealthEvaluation',
      modelProperties: {
        description: {
          required: false,
          serializedName: 'Description',
          type: {
            name: 'String'
          }
        },
        aggregatedHealthState: {
          required: false,
          serializedName: 'AggregatedHealthState',
          type: {
            name: 'Number'
          }
        },
        Kind: {
          required: true,
          serializedName: 'Kind',
          type: {
            name: 'String'
          }
        },
        upgradeDomainName: {
          required: false,
          serializedName: 'UpgradeDomainName',
          type: {
            name: 'String'
          }
        },
        unhealthyEvaluations: {
          required: false,
          serializedName: 'UnhealthyEvaluations',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'UnhealthyEvaluationElementType',
                type: {
                  name: 'Composite',
                  className: 'UnhealthyEvaluation'
                }
            }
          }
        },
        baselineErrorCount: {
          required: false,
          serializedName: 'BaselineErrorCount',
          type: {
            name: 'Number'
          }
        },
        baselineTotalCount: {
          required: false,
          serializedName: 'BaselineTotalCount',
          type: {
            name: 'Number'
          }
        },
        totalCount: {
          required: false,
          serializedName: 'TotalCount',
          type: {
            name: 'Number'
          }
        },
        maxPercentUpgradeDomainDeltaUnhealthyNodes: {
          required: false,
          serializedName: 'MaxPercentUpgradeDomainDeltaUnhealthyNodes',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = UpgradeDomainDeltaNodesCheckHealthEvaluation;
