import app from "./src/main/app";
import "dotenv/config";  

const PORT = 3000;

app.listen(PORT, () => console.log("Listen in port: " + PORT));
