const express = require('express');
const { Registration, Login, ProfileUpdate, ProfileDetails, RecoverVerifyEmail, RecoverVerifyOTP, RecoveryResetPass } = require('../controllers/Users/UsersController');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');
const { CreateBrand, UpdateBrand, BrandList, BrandDropDown, DeleteBrand, BrandDetailsByID } = require('../controllers/Brands/BrandsController');
const router = express.Router();

router.post("/Registration",Registration);
router.post("/Login",Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,ProfileDetails);
router.get("/RecoverVerifyEmail/:email",RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",RecoverVerifyOTP);
router.post("/RecoverResetPass",RecoveryResetPass);

// Brands
router.post("/CreateBrand",AuthVerifyMiddleware,CreateBrand);
router.post("/UpdateBrand/:id",AuthVerifyMiddleware,UpdateBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandList);
router.get("/BrandDropDown",AuthVerifyMiddleware,BrandDropDown);
router.get("/DeleteBrand/:id",AuthVerifyMiddleware,DeleteBrand);
router.get("/BrandDetailsByID/:id",AuthVerifyMiddleware,BrandDetailsByID);

module.exports = router;