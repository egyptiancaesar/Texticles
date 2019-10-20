import { Response, Request, NextFunction } from 'express';

// This is how you create an express error handling middleware
// https://wanago.io/2018/12/17/typescript-express-error-handling-validation/
export const errorHandler = (err: Error, req: Request, 
                             res: Response, next: NextFunction) => {

    console.log(err, res, req, next)
};
