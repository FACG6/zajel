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
    }, {
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
  ]);
  //   res.status(204).send('No orders yet');
  res.send(orders);
};
