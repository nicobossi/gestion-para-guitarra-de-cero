import type { Response } from "express";




export class HttpResponse {
    
    static OK<T>(res : Response<T>, data : T) : Response<T> {
        return res.status(200).json(data);
    }

    static CREATE<T>(res : Response<T>, data : T) : Response<T> {
        return res.status(201).json(data);
    }

    static BAD_REQUEST<T>(res : Response<T>, data : T) : Response<T> {
        return res.status(400).json(data);
    }

    static UNAUTHORIZED<T>(res : Response<T>, data : T) : Response<T> {
        return res.status(401).json(data);
    }

    static SERVER_UNAVAILABLE<T>(res : Response<T>, data : T): Response<T> {
        return res.status(503).json(data);
    }

    static SERVER_TIMEOUT<T>(res : Response<T>, data : T) : Response<T> {
        throw res.status(504).json(data);
    }

    static ERROR<T>(res : Response<T>, data : T, code? : number) : Response<T> {
        return res.status(code ? code : 500).json(data);
    }
}