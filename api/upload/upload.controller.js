const { uploadImage } = require('./upload.service');

async function handlerCreateImage(req, res) {
    try {
      const { file } = req;
      const result  = await uploadImage(file.path);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
}

module.exports = { handlerCreateImage };
