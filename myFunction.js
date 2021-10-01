exports.handler = async (event) => {

    const msg = "Kishore Says " + event.keyword
    const response = {
        statusCode: 200,
        body: msg
    };
    return response;
};