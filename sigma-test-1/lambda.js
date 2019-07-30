let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    debugger;
    ddb.put({
        TableName: 'sudarshana-test-table',
        Item: {  'name': event.name, 'age': event.age }
    }).promise()
        .then((data) => {
            //your logic goes here
        })
        .catch((err) => {
            //handle error
        });

    callback(null, { "message": "Successfully executed" });

}