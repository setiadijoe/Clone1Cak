require('dotenv').config()
const Multer = require('multer');
const Storage = require('@google-cloud/storage');
const CLOUD_BUCKET = process.env.CLOUD_BUCKET

const storage = Storage({
  projectId: process.env.PROJECT_ID,
  keyFilename: process.env.KEYFILE_PATH
});

const bucket = storage.bucket(CLOUD_BUCKET)
const getPublicUrl = (filename) => {
  console.log(filename)
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`
}

const sendImage = (req, res, next) => {
  if (!req.file) {
    return next()
  }
  const gcsname = Date.now() + req.file.originalname
  const file = bucket.file(gcsname)

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  })

  stream.on('error', (err) => {
    req.file.cloudStorageError = err
    next(err)
  })

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    file.makePublic().then(() => {
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
      next()
    })
  })

  stream.end(req.file.buffer)
}

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024 // no larger than 20mb, you can change as needed.
  }
});

module.exports = {
  multer,
  getPublicUrl,
  sendImage
}



