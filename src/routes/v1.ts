import { Router } from 'express';

import { UserController } from './v1/user.controller';
import { AuthController } from './v1/auth.controller';
import { BooksController } from './v1/book.controller';


const router = Router();

router.use('/users', UserController);
router.use('/users', AuthController);
router.use('/books', BooksController);

export const v1Controller = router;
