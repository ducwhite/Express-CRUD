import express  from "express";
const router = express.Router();

import { getAllUsers, getUserById, createUser, deleteUser, updatedUser } from "../controllers/users.js";

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updatedUser); 

export default router;