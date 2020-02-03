// This function can be used when ever the api has to send back the response to the given request

const response = (res, code, message) => {
    return res.status(code).send(message);
}