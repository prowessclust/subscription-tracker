import { Router } from 'express';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({ title: 'GET all subscriptions' })
})

subscriptionRouter.get('/:id', (req, res) => {
  res.send({ title: 'GET user subscription' })
})

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
  res.send({ title: 'Update a subscription' })
})

subscriptionRouter.delete('/:id', (req, res) => {
  res.send({ title: 'Delete user subscriptions' })
})

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id', (req, res) => {
  res.send({ title: 'Cancel user subscriptions' })
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({ title: 'GET upcoming renewals' })
})

export default subscriptionRouter;