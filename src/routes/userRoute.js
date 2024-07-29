import express from 'express'
import { addUser, listUser, removeUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/add',  addUser);
userRouter.get('/list', listUser);
userRouter.post('/remove', removeUser);


export default userRouter;