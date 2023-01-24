const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')
const postsController = require('../controllers/post')
// const { ensureAuth } = require("../middleware/auth");


//main routes
router.get("/", homeController.getIndex)
router.get("/profile", postsController.getProfile);

// router.get("/profile", ensureAuth, postsController.getProfile);

//Routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
// router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;