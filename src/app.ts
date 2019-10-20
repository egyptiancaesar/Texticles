// Not the best idea to user require but refuses to work with import
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

import express from 'express';

import { v1Controller } from './routes/v1';

import { jwtMiddleware } from './middlewares/jwt.mw';
import { errorHandler } from './middlewares/error.mw';

import { SysConfig } from './config';
import { dbClient } from './database/client';

(async () => {
    const app = express();
    await dbClient.setup();

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(jwtMiddleware);

    // Add sub-routers
    app.use('/v1', v1Controller);

    // Add middlewares, error handler must be last to be 'used'
    app.use(errorHandler);

    // Server the static client components
    app.use(express.static('dist/client'));

    // Listen and serve the applications
    console.log('Serving at: '+SysConfig.serverHost+':'+SysConfig.serverPort);
    app.listen(SysConfig.serverPort, SysConfig.serverHost);
})();
