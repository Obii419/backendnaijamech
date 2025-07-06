import express from "express";
import { getAllMechanics } from "../controllers/mechanic.controller";

const router = express.Router();

// GET /api/mechanics
router.get("/", getAllMechanics);

export default router;
