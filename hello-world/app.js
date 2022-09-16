

export const lambdaHandler = async (event) => {
    let response;
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'world',
            }),
        };
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }

    return response;
};
