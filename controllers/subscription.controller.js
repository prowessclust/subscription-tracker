import Subscription from "../models/subscription.model";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create
  } catch(error) {
   next(error); 
  }
}