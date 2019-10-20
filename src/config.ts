// System deployment mode
export enum Mode {
    Production = 'prod',
    Staging = 'stage',
    Development = 'dev',
    Test = 'test'
}

interface Config {
    readonly mode: Mode,
    readonly serverHost: string,
    readonly serverPort: number,
    readonly dbHost: string,
    readonly dbPort: number,
    readonly dbName: string,
    readonly mongoURL: string,
}

// Config vars which are the same across all environments
const commonConfig = {
    dbName: 'app-main'
}

const prodConfig: Config = {
    mode: Mode.Production,
    serverHost: '',
    serverPort: 0,
    dbHost: '',
    dbPort: 0,
    mongoURL: '',
    ...commonConfig
}

const stageConfig: Config = {
    mode: Mode.Staging,
    serverHost: '',
    serverPort: 0,
    dbHost: '',
    dbPort: 0,
    mongoURL: '',
    ...commonConfig
}

// Local dev enviromnet config (default)
const devConfig: Config = {
    mode: Mode.Development,
    serverHost: 'localhost',
    serverPort: 8090,
    dbHost: 'localhost',
    dbPort: 27017,
    mongoURL: 'mongodb://localhost:27017',
    ...commonConfig
}

const testConfig: Config = {
    mode: Mode.Test,
    serverHost: 'localhost',
    serverPort: 8090,
    dbHost: 'localhost',
    dbPort: 27017,
    mongoURL: 'mongodb://localhost:27017',
    ...commonConfig,
    dbName: 'test-main',
}

// Retrieve the configurations for the current mode
function getConfig(config: string | undefined): Config {
    switch(config) {
        case Mode.Production: return prodConfig;
        case Mode.Staging: return stageConfig;
        case Mode.Development: return devConfig;
        case Mode.Test: return testConfig;
        default: return devConfig;
    }
}

export const SysConfig = getConfig(process.env.Mode);
export const signingSecret = 'ShhhhIamSecret';
