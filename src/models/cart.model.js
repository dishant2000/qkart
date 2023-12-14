const mongoose = require('mongoose');
const { productSchema } = require('./product.model');
const config = require("../config/config")
const validator = require('validator');

// TODO: CRIO_TASK_MODULE_CART - Complete cartSchema, a Mongoose schema for "carts" collection
const cartSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: false,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
      },
    },
    cartItems : [
      {
        product : productSchema,
        quantity : Number
      }
    ],
    paymentOption :{
      type : String,
      default : config.default_payment_option
    }
  },
  {
    timestamps: false,
  }
);


/**
 * @typedef Cart
 */
const Cart = mongoose.model('Cart', cartSchema);

module.exports.Cart = Cart;