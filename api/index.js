import express from "express";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

/* Show Server is running in Browser */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* Deal with products */
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);
/* Start the Server */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
