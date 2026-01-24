import type { Response } from "express";




export class HttpResponse {

    OK<T>(res : Response<T>, data : T) : Response<T> {
        return res.status(200).json(data);
    }

    CREATE<T>(res : Response<T>, data : T) : Response<T> {
        return res.status(201).json(data);
    }

    BAD_REQUEST<T>(res : Response<T>, data : T) : Response<T> {
        return res.status(400).json(data);
    }

    SERVER_ERROR<T>(res : Response<T>, data : T): unknown {
        return res.status(500).json(data);
    }
}