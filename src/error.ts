// Severity levels of the associated error
export enum Severity {
    Info,
    Warning,
    Error,
    Fatal,
}

export enum ErrCodes {
    DBConnectionErr,
}

// Custom error for internal logging
export class InternalError extends Error {
    code: number;
    severity: Severity;

    constructor(code: number | ErrCodes, message: string, severity: Severity) {
        super(message);
        this.code = code;
        this.severity = severity;
    }
}