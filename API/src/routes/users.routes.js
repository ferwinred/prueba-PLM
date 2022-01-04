const express = require('express')
const router = express.Router()
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller');


router.get('/', get_users);
router.get('/:id', getById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.put('/:id', deleteUser);

module.exports = router