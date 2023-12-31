/**
 * Stable - Auth Service
 * An authentication service API for Stable
 *
 * The version of the OpenAPI document: 0.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ConfirmForgotPasswordRequestDto {
    /**
    * The email of the user
    */
    'email': string;
    /**
    * The verification code sent to the email
    */
    'verificationCode': string;
    /**
    * The password of the user
    */
    'newPassword': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "verificationCode",
            "baseName": "verificationCode",
            "type": "string"
        },
        {
            "name": "newPassword",
            "baseName": "newPassword",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConfirmForgotPasswordRequestDto.attributeTypeMap;
    }
}

