import express, { json } from "express";
import studentRouter from "./features/student/infraestructure/route/student.router";
import cors from 'cors'
import dbErrorMiddelware from "./shared/infraestructure/middlewares/db-errors/instance";


const app = express();

app.use(cors()); //agregar origines concretos

app.use(json());

app.use("/api/student", studentRouter());

app.use(dbErrorMiddelware.handleErrors());

export default app;