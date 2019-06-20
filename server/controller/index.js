require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const { getCounts } = require('./getCounts');
const adminHandler = require('./accountsMangment/admin');
const captainHandler = require('./accountsMangment/captains');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');
const { getImage } = require('./getImage');
const placeHandler = require('./place');


const router = express.Router();
router.use(checkAuth);
// the all routes start from here
router.use(adminHandler);

router.use(protectRoutes);
// the protected route start from here
router.route('/counts')
  .get(getCounts);

router.use(customerHandler);
router.use(captainHandler);
router.use(orderHandler);
router.use(placeHandler);
router.route('/image/:name')
  .get(getImage);
router.use(orderHandler);

module.exports = router;
