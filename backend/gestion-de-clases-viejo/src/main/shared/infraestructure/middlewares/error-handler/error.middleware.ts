import type { ErrorRequestHandler } from "express";


export interface ErrorMiddleware {
    handle() : ErrorRequestHandler
}