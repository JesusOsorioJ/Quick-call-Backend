function handlerAllAdmins(req, res) {
    return res.status(200).json({ message: 'All admins' });
}

module.exports = {
    handlerAllAdmins,
}
