import express, { json } from "express";
import studentRouter from "./api/student/student.router";
import cors from 'cors'
import { DbErrorMiddelware } from "./api/middleware/db-errors.middleware";
import { HttpResponse } from "./api/http-response";


const app = express();

app.use(cors()); //agregar origines concretos

app.use(json());

app.use("/api/student", studentRouter());

const dbErrorMiddelware = new DbErrorMiddelware(new HttpResponse());
app.use(dbErrorMiddelware.handleErrors());

export default app;