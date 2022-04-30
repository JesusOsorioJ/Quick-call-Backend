const fs = require('fs');
const cloudinary = require('cloudinary').v2;

async function deleteImage(public_id) {
    try {
      const result = await cloudinary.uploader.destroy(public_id);
      return result;
    } catch (error) {
      console.log(error);
    }
}

async function uploadImage(image) {
    try {
      const result = await cloudinary.uploader.upload(image);
      return result;
    } catch (error) {
      console.log(error);
    } finally{
      fs.unlinkSync(image);
    }
}

module.exports = {
  uploadImage,
  deleteImage,
};
