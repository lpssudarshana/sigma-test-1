let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.scan({
        TableName: 'sudarshana-test-table'
    }).promise()
        .then((data) => {
            callback(null, { "data": data });
        })
        .catch((err) => {
            callback(null, { "error": err });
        });

}