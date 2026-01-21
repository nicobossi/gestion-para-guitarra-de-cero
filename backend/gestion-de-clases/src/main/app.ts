import express, { json } from "express";
import studentRouter from "./api/student/student-router";


const app = express();

app.use(json());

app.use("/api/student", studentRouter());

export default app;