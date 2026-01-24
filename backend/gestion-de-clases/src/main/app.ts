import express, { json } from "express";
import studentRouter from "./api/student/student-router";
import cors from 'cors'


const app = express();

app.use(cors()); //agregar origines concretos

app.use(json());

app.use("/api/student", studentRouter());

export default app;