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

import ApiClient from '../ApiClient';

/**
 * The Nemzetiseg model module.
 * @module model/Nemzetiseg
 * @version v1.2
 */
class Nemzetiseg {
    /**
     * Constructs a new <code>Nemzetiseg</code>.
     * @alias module:model/Nemzetiseg
     */
    constructor() { 
        
        Nemzetiseg.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Nemzetiseg</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Nemzetiseg} obj Optional instance to populate.
     * @return {module:model/Nemzetiseg} The populated <code>Nemzetiseg</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Nemzetiseg();

            if (data.hasOwnProperty('nemzetisegId')) {
                obj['nemzetisegId'] = ApiClient.convertToType(data['nemzetisegId'], 'Number');
            }
            if (data.hasOwnProperty('isoKod')) {
                obj['isoKod'] = ApiClient.convertToType(data['isoKod'], 'String');
            }
            if (data.hasOwnProperty('nemzetisegNev')) {
                obj['nemzetisegNev'] = ApiClient.convertToType(data['nemzetisegNev'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Nemzetiseg</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Nemzetiseg</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['isoKod'] && !(typeof data['isoKod'] === 'string' || data['isoKod'] instanceof String)) {
            throw new Error("Expected the field `isoKod` to be a primitive type in the JSON string but got " + data['isoKod']);
        }
        // ensure the json data is a string
        if (data['nemzetisegNev'] && !(typeof data['nemzetisegNev'] === 'string' || data['nemzetisegNev'] instanceof String)) {
            throw new Error("Expected the field `nemzetisegNev` to be a primitive type in the JSON string but got " + data['nemzetisegNev']);
        }

        return true;
    }


}



/**
 * @member {Number} nemzetisegId
 */
Nemzetiseg.prototype['nemzetisegId'] = undefined;

/**
 * @member {String} isoKod
 */
Nemzetiseg.prototype['isoKod'] = undefined;

/**
 * @member {String} nemzetisegNev
 */
Nemzetiseg.prototype['nemzetisegNev'] = undefined;






export default Nemzetiseg;

