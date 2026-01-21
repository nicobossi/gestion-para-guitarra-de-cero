import "dotenv/config"; 
import app from "./src/main/app"; 

const PORT = 3000;

app.listen(PORT, () => console.log("Listen in port: " + PORT));
