<<<<<<< HEAD
<<<<<<< HEAD
const getOrdersQuery = require('../../database/queries/order/getOrders');

exports.get = (req, res) => {
  let orders = [];

  //   getOrdersQuery()
  // .then((resposne) => {
  //   if (!Response[0]) {
  //   res.status(204).send('No orders yet');
  //   } else {
  // res.send(JSON.stringify(resposne));
  //   }
  // })
  // .catch(error => res.status(500).send(JSON.stringify({ error })));

  orders = JSON.stringify([
    {
      key: '25',
      customer: 'أحمد',
      date: Date.now(),
      captain: 'محمود',
      b_status: true,
      price: '20$',
    },
    {
      key: '26',
      customer: 'سمير',
      date: '10/04/2019',
      captain: 'خالد',
      b_status: 'قيد التنفيذ',
      price: '20$',
    },
    {
      key: '27',
      customer: 'علي',
      date: '10-05-2018',
      captain: 'سامر',
      b_status: false,
      price: '20$',
    },
    {
      key: '23215',
      customer: 'أحمد',
      date: Date.now(),
      captain: 'محمود',
      b_status: true,
      price: '20$',
    },
    {
      key: '210',
      customer: 'سمير',
      date: '10/04/2019',
      captain: 'خالد',
      b_status: 'قيد التنفيذ',
      price: '20$',
    },
    {
      key: '275',
      customer: 'علي',
      date: '10-05-2018',
      captain: 'سامر',
      b_status: false,
      price: '20$',
    },
    {
      key: '2565',
      customer: 'أحمد',
      date: Date.now(),
      captain: 'محمود',
      b_status: true,
      price: '20$',
    },
    {
      key: '2678',
      customer: 'سمير',
      date: '10/04/2019',
      captain: 'خالد',
      b_status: 'قيد التنفيذ',
      price: '20$',
    },
    {
      key: '277896',
      customer: 'علي',
      date: '10-05-2018',
      captain: 'سامر',
      b_status: false,
      price: '20$',
    }, {
      key: '25132',
      customer: 'أحمد',
      date: Date.now(),
      captain: 'محمود',
      b_status: true,
      price: '20$',
    },
    {
      key: '268651',
      customer: 'سمير',
      date: '10/04/2019',
      captain: 'خالد',
      b_status: 'قيد التنفيذ',
      price: '20$',
    },
    {
      key: '271654',
      customer: 'علي',
      date: '10-05-2018',
      captain: 'سامر',
      b_status: false,
      price: '20$',
    },
  ]);
  //   res.status(204).send('No orders yet');
  res.send(orders);
};
=======
=======
>>>>>>> EditPopupFront
const express = require('express');
const { deleteOrder } = require('./deleteOrder');
// const { updateOrder } = require('./updateOrder');
const { getOrders } = require('../order/getOrders');

const router = express.Router();

router.route('/deleteOrder/:id')
  .delete(deleteOrder);

router.get('/viewOrders', getOrders);
// router.put('/editOrder/:id', updateOrder);

module.exports = router;
<<<<<<< HEAD
>>>>>>> 94c7a13e55f11b231a72d34777be0d4c472d4e1e
=======
>>>>>>> EditPopupFront
