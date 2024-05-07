import express from 'express';
import { login, logout, signUp } from '../controllers/authController';

const router = express.Router();

router.get("/signUp", signUp);

router.get("/login", login);

router.get("/logout", logout);

export default router; 
