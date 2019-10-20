import {Request, Response, Router, NextFunction} from 'express';
const router = Router();

router.get(/([A-Za-z0-9]|\-){36}/, (req: Request, res: Response, next: NextFunction): any => {
    console.log(req.params, res.status, next.name);

});

export const UserController = router;