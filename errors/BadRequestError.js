/**
 * The idea is to get a specific Error class which will extend from the CustomAPIError, since it has the message property
 */
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./customError');

class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError;

