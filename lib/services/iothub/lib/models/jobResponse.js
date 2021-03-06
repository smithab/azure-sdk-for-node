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

/**
 * @class
 * Initializes a new instance of the JobResponse class.
 * @constructor
 * The properties describing a Job Response.
 * @member {string} [jobId] The job identifier.
 * 
 * @member {date} [startTimeUtc] Start time of the Job.
 * 
 * @member {date} [endTimeUtc] Represents the time the job stopped processing.
 * 
 * @member {string} [type] The type of job to execute. Possible values
 * include: 'unknown', 'export', 'import', 'backup', 'readDeviceProperties',
 * 'writeDeviceProperties', 'updateDeviceConfiguration', 'rebootDevice',
 * 'factoryResetDevice', 'firmwareUpdate'
 * 
 * @member {string} [status] Status of the Job. Possible values include:
 * 'unknown', 'enqueued', 'running', 'completed', 'failed', 'cancelled'
 * 
 * @member {string} [failureReason] If status == failure, this represents a
 * string containing the reason.
 * 
 * @member {string} [statusMessage] The status message for the job.
 * 
 * @member {string} [deviceId] The deviceId related to this response.
 * 
 * @member {string} [parentJobId] The jobId of the parent job, if any.
 * 
 */
function JobResponse() {
}

/**
 * Defines the metadata of JobResponse
 *
 * @returns {object} metadata of JobResponse
 *
 */
JobResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'JobResponse',
    type: {
      name: 'Composite',
      className: 'JobResponse',
      modelProperties: {
        jobId: {
          required: false,
          serializedName: 'jobId',
          type: {
            name: 'String'
          }
        },
        startTimeUtc: {
          required: false,
          serializedName: 'startTimeUtc',
          type: {
            name: 'DateTime'
          }
        },
        endTimeUtc: {
          required: false,
          serializedName: 'endTimeUtc',
          type: {
            name: 'DateTime'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'Enum',
            allowedValues: [ 'unknown', 'enqueued', 'running', 'completed', 'failed', 'cancelled' ]
          }
        },
        failureReason: {
          required: false,
          serializedName: 'failureReason',
          type: {
            name: 'String'
          }
        },
        statusMessage: {
          required: false,
          serializedName: 'statusMessage',
          type: {
            name: 'String'
          }
        },
        deviceId: {
          required: false,
          serializedName: 'deviceId',
          type: {
            name: 'String'
          }
        },
        parentJobId: {
          required: false,
          serializedName: 'parentJobId',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = JobResponse;
