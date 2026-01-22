import "dotenv/config"; 
import app from "./src/main/app"; 
import cors from "cors";

const PORT = 3000;

app.use(cors())

app.listen(PORT, () => console.log("Listen in port: " + PORT));
