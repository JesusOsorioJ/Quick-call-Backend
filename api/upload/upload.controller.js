const { uploadImage, deleteImage } = require('./upload.service');

async function handlerCreateImage(req, res) {
    try {
      const { file } = req;
      const result  = await uploadImage(file.path);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
}

async function handlerDeleteImage(req, res) {
  try {
    const { publicId } = req.params;
    const result = await deleteImage(publicId);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  handlerCreateImage,
  handlerDeleteImage,
};
