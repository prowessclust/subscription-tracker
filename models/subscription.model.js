import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Subscription Name is required"],
    trim: true,
    minLength: [3, "Subscription Name must be at least 3 characters long"],
    maxLength: [50, "Subscription Name must be at most 50 characters long"],
  },
  price: {
    type: Number,
    required: [true, "Subscription Price is required"],
    min: [0, "Subscription Price must be at least 0"],
    max: [100000, "Subscription Price must be at most 100000"]
  },
  currency: {
    type: String,
    enum: ["USD", "EUR", "GBP", "INR", "JPY"],
    default: "USD"
  },
  frequency: {
    type: String,
    enum: ["daily", "monthly", "yearly", "one-time"],
    required: [true, "Subscription Frequency is required"],
    default: "daily"
  },
  category: {
    type: String,
    enum: ["entertainment", "utilities", "food", "health", "other"],
    required: [true, "Subscription Category is required"],
    default: "other"
  },
  paymentMethod: {
    type: String,
    trim: true,
    required: [true, "Payment Method is required"],
  },
  status: {
    type: String,
    enum: ["active", "expired", "cancelled"],
    default: "active"
  },
  startDate: {
    type: Date,
    required: [true, "Subscription Start Date is required"],
    validate: {
      validator: (value) => value <= new Date(),
      message: "Start Date cannot be in the future"
    }
  },
  renewalDate: {
    type: Date,
    validate: {
      validator: (value) => value > this.startDate,
      message: "Renewal Date must be after Start Date"
    }
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "User ID is required"],
    index: true,
  }
}, {timestamps: true});

subscriptionSchema.pre('save', function(next) {
  if(!this.renewalDate) {
    const renewalPeriods = {
      daily: 1, 
      weekly: 7,
      monthly: 30,
      yearly: 365
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
  }

  if(this.renewalDate <= new Date()) {
    this.status = "expired";
  }

  next();
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
