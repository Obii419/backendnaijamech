import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mechanicRoutes from "./routes/mechanic.routes";
import connectDB from "./config/db";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api/mechanics", mechanicRoutes);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
