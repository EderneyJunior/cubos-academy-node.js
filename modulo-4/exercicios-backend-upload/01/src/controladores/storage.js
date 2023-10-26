const aws = require('aws-sdk')
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3)

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.APP_KEY
    }
})

module.exports = {
    uploadFile: async (path, bufer, mimetype) => {
        const arquivo = await s3.upload({
            Bucket: process.env.BACKBLAZE_BUCKET,
            Key: path,
            Body: bufer,
            ContentType: mimetype
        }).promise()

        return {
            url: arquivo.Location,
            path: arquivo.Key
        }
    },
    deleteFile: async (file) => {
        return await s3.deleteObject({
            Bucket: process.env.BACKBLAZE_BUCKET,
            Key: file
        }).promise()
    }
}