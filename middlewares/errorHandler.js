const CustomAPIError = require('../errors/customError');
const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ success: false, message: err.message });
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: 'Something went wrong. Try again later...' });
}

module.exports = errorHandler;