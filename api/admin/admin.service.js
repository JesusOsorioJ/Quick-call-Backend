const admins = require('./admin.model');

async function getAllAdmins() {
    return await admins.find();
}

async function getAdminById(id){
    return await admins.findById(id);
}

async function getAdminByEmail(email) {
    return await admins.findOne({email});
}

async function createAdmin(body) {
    return await admins.create(body);
}

async function updateAdmin(id, body) {
    return await admins.findByIdAndUpdate(id, body);
}

async function deleteAdmin(id) {
    return await admins.findByIdAndDelete(id);
}

module.exports = {
    getAllAdmins,
    getAdminById,
    getAdminByEmail,
    createAdmin,
    updateAdmin,
    deleteAdmin
}
