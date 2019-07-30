let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    debugger;
    ddb.scan({
        TableName: 'sudarshana-test-table'
    }).promise()
        .then((data) => {
            callback(null, { "data": data.Items });
        })
        .catch((err) => {
            callback(null, { "error": err });
        });

}