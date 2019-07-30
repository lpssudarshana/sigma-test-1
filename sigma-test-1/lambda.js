let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    debugger;
    ddb.put({
        TableName: 'sudarshana-test-table',
        Item: { 'id': event.id, 'name': event.name, 'age': event.age }
    }).promise()
        .then((data) => {
           callback(null, { "data": data.$response.httpResponse.statusCode });
        })
        .catch((err) => {
            callback(null, { "error": err });
        });

    

}