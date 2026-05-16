import express, { json } from "express";
import cors from 'cors'
import dbErrorMiddleware from "./shared/infraestructure/middlewares/error-handler/db-error/instance";
import studentRouter from "./features/student/infraestructure/route/instance";
import exceptionMiddleware from "./shared/infraestructure/middlewares/error-handler/model-exception/instance";
import bodyErrorMiddleware from "./shared/infraestructure/middlewares/error-handler/body-error/instance";
import feeRouter from "./features/fee/infraestructure/router/instance";


const app = express();

app.use(cors()); 

app.use(json());

app.use(studentRouter.getPath, studentRouter.routes());

app.use(feeRouter.getPath, feeRouter.routes())

app.use(bodyErrorMiddleware.handle());

app.use(exceptionMiddleware.handle());

app.use(dbErrorMiddleware.handle());

export default app;