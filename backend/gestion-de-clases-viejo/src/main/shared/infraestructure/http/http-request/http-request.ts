import type { Request, RequestHandler, Response } from "express";



export class HttpRequest {

    static execute(controller : (req : Request, res : Response) => Promise<Response>) : RequestHandler {
        return async (req, res, next) => 
            Promise.resolve(controller(req, res)).catch(next);
    }
}