import { Router } from 'express';
import {UserController} from '../app/controllers/userController'
const router = Router();

router.get('/', UserController.listAllUsers);
router.post('/', UserController.addUser);

export default router;
