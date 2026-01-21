import studentController from "@/main/routes/student/student-controller";
import { Router } from "express"



const studentRouter = () => {

    const route = Router();

    route.post("/income", (req, res) => studentController.post(req, res));

    return route;

}

export default studentRouter;