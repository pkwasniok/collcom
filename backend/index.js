const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };

    try {
        switch (event.routeKey) {
            case "GET /":
                body = {
                    message: "Hello MakeUC!"
                };
                break;
            case "GET /items/{institute}":
                body = await dynamo
                    .scan({
                        TableName: "makeuc-items"
                    })
                    .promise()
                    .then(data => {
                        return data.Items;
                    })
                    .then(data => {
                        return data.filter(item => {
                            return item.institute === event.pathParameters.institute;
                            });
                    })
                    .then(data => {
                        return data.sort((a, b) => {
                            return b.id - a.id;
                        });
                    });
                break;
            case "POST /items":
                let requestJSON = JSON.parse(event.body);
                let id = Date.now();
                await dynamo
                    .put({
                        TableName: "makeuc-items",
                        Item: {
                            id: id.toString(),
                            title: requestJSON.title,
                            description: requestJSON.description,
                            institute: requestJSON.institute
                        }
                    })
                    .promise();
                body = `Put item ${id}`;
                break;
            default:
                throw new Error(`Unsupported route: "${event.routeKey}"`);
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers
    };
};
