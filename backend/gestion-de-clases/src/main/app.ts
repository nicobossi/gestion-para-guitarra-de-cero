import express, { json } from "express";
import cors from 'cors'
import errorMiddelware from "./shared/infraestructure/middlewares/error-handler/instance";
import studentRouter from "./features/student/infraestructure/route/instance";


const app = express();

app.use(cors()); 

app.use(json());

app.use(studentRouter.getPath, studentRouter.routes());

app.use(errorMiddelware.handle());

export default app;