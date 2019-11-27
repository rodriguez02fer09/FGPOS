function withErrorStack(error, stack) {
    if (process.env.NODE_ENV === 'development') {
        return {
            ...error,
            stack
        };
    }

    return error;
}

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);
}

function errorHandler(err, req, res, next) {
    const {
        output: {
            statusCode,
            payload
        }
    } = err;
    res.status(statusCode);
    res.json(withErrorStack(payload, err.stack));
    console.log('executedd');

}

module.exports = {
    logErrors,
    errorHandler
}