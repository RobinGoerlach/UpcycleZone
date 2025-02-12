import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany(); // delete all orders
    await Product.deleteMany(); // delete all products
    await User.deleteMany(); // delete all users

    /* Create Users */
    const createdUsers = await User.insertMany(users);

    /* Create Products */
    const adminUser = createdUser[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    const createdProducts = await Product.insertMany(sampleProducts);

    /* Create Orders */

    /* Import done */
    console.log("Data Imported!".green.inverse);
    process.exit(0);
  } catch (e) {
    console.error(`${e}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany(); // delete all orders
    await Product.deleteMany(); // delete all products
    await User.deleteMany(); // delete all users
    /* Deletion done */
    console.log("Data deleted!".green.inverse);
    process.exit(0);
  } catch (e) {
    console.error(`${e}`.red.inverse);
    process.exit(1);
  }
};

//console.log(process.argv[2]);
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
