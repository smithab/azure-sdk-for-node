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

/**
 * @class
 * Initializes a new instance of the AutoScaleRun class.
 * @constructor
 * @summary The results and errors from an execution of a pool autoscale
 * formula.
 *
 * @member {date} timestamp The time at which the autoscale formula was last
 * evaluated.
 * 
 * @member {string} [results] The final values of all variables used in the
 * evaluation of the autoscale formula. Each variable value is returned in
 * the form $variable=value, and variables are separated by semicolons.
 * 
 * @member {object} [error] Details of the error encountered evaluating the
 * autoscale formula on the pool, if the evaluation was unsuccessful.
 * 
 * @member {string} [error.code]
 * 
 * @member {string} [error.message]
 * 
 * @member {array} [error.values]
 * 
 */
function AutoScaleRun() {
}

/**
 * Defines the metadata of AutoScaleRun
 *
 * @returns {object} metadata of AutoScaleRun
 *
 */
AutoScaleRun.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AutoScaleRun',
    type: {
      name: 'Composite',
      className: 'AutoScaleRun',
      modelProperties: {
        timestamp: {
          required: true,
          serializedName: 'timestamp',
          type: {
            name: 'DateTime'
          }
        },
        results: {
          required: false,
          serializedName: 'results',
          type: {
            name: 'String'
          }
        },
        error: {
          required: false,
          serializedName: 'error',
          type: {
            name: 'Composite',
            className: 'AutoScaleRunError'
          }
        }
      }
    }
  };
};

module.exports = AutoScaleRun;
