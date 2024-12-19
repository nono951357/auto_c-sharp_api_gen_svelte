/**
 * MLSZ_API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Stadion from '../model/Stadion';

/**
* Stadion service.
* @module api/StadionApi
* @version v1.2
*/
export default class StadionApi {

    /**
    * Constructs a new StadionApi. 
    * @alias module:api/StadionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the stadionGet operation.
     * @callback module:api/StadionApi~stadionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Stadion>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/StadionApi~stadionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Stadion>}
     */
    stadionGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [Stadion];
      return this.apiClient.callApi(
        '/Stadion', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stadionIdDelete operation.
     * @callback module:api/StadionApi~stadionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/StadionApi~stadionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    stadionIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling stadionIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/Stadion/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stadionIdGet operation.
     * @callback module:api/StadionApi~stadionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Stadion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/StadionApi~stadionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Stadion}
     */
    stadionIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling stadionIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = Stadion;
      return this.apiClient.callApi(
        '/Stadion/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stadionIdPut operation.
     * @callback module:api/StadionApi~stadionIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Stadion} [stadion] 
     * @param {module:api/StadionApi~stadionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    stadionIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['stadion'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling stadionIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/Stadion/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stadionPost operation.
     * @callback module:api/StadionApi~stadionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Stadion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Stadion} [stadion] 
     * @param {module:api/StadionApi~stadionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Stadion}
     */
    stadionPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['stadion'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = Stadion;
      return this.apiClient.callApi(
        '/Stadion', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
