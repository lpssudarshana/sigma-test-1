let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'sudarshana-test-table',
        Item: { 'id': '0', 'name': 'sudarshana', 'age': 0 }
    }).promise()
        .then((data) => {
            //your logic goes here
        })
        .catch((err) => {
            //handle error
        });

callback(null, { "message": "Successfully executed" });

}