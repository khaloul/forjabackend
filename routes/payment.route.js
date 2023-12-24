// // payment.route.js
// const express = require('express');
// const router = express.Router();
// const Stripe = require('stripe')('pk_test_51NAV4wEuXU2z3Y7Af5OjHO36DYxmFpOj9qMGhOc96PvhYasU0a7DYnhPPqD1K8rvZVAf7h2ari0MEXEqTKOmIxau00kkUKniJd');

// router.post('/', async (req, res) => {
//   console.log(req.body);
//   let status, error;
//   const { token, amount } = req.body;
//   try {
//     await Stripe.charges.create({
//       source: token.id,
//       amount,
//       currency: 'usd',
//     });
//     status = 'success';
//   } catch (error) {
//     console.log(error);
//     status = 'Failure';
//   }
//   res.json({ error, status });
// });

// // Export the router with a named export
// export default paymentRouter ;
