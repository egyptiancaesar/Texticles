import { Request, Response, Router } from 'express';
import * as jwt from 'jsonwebtoken';
import { signingSecret } from '../../config';

import * as User from '../../models/user.model';
import { InternalError } from '../../error';

const router = Router();
 
router.post('/signup', (req: Request, res: Response): any => {
    // Parse new user data and create a user
    const reqBody = req.body;
    try {
        const user = User.createUsers(reqBody.email, reqBody.password, User.Role.Standard);
        const token = jwt.sign(User.createAuthToken(user), signingSecret);
        console.log(token);
    } catch(e) {
        console.log(e);
    }

    res.status(200).send();
});

router.post('/login', async (req: Request, res: Response) => {
    const reqBody = req.body;
    const user = await User.getUserByEmail(reqBody.email);
    if (user instanceof InternalError) {
        res.status(400).send({ message: 'No Account Exists With This Email' });
        return;
    }
    // check if password matches
    // if fail then increase max login count
    // else
    console.log(user);
    const token = User.createAuthToken(user);
    res.cookie('auth-token', token);
    res.send();
});

export const AuthController = router;