import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({ title: 'GET all subscriptions' })
})

subscriptionRouter.get('/:id', (req, res) => {
  res.send({ title: 'GET user subscription' })
})

subscriptionRouter.post('/', (req, res) => {
  res.send({ title: 'Create subscription' })
})

subscriptionRouter.put('/:id', (req, res) => {
  res.send({ title: 'Update a subscription' })
})

subscriptionRouter.delete('/:id', (req, res) => {
  res.send({ title: 'Delete user subscriptions' })
})

subscriptionRouter.get('/user/:id', (req, res) => {
  res.send({ title: 'GET all user subscriptions' })
})

subscriptionRouter.put('/:id', (req, res) => {
  res.send({ title: 'Cancel user subscriptions' })
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({ title: 'GET upcoming renewals' })
})

export default subscriptionRouter;