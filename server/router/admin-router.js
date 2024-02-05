const express = require("express");
const router = express.Router();
const {getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById} = require("../controllers/admin-controllers");
const  authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require("../middleware/admin-middleware");
// router.use(authMiddleware); // apply the authentication middleware to this route group

// GET all users



router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById)
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, deleteContactById);


module.exports = router;