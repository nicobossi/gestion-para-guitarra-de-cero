import client from "resources/client"



const clearAll = async () => {
    await client.alumno.deleteMany();
}


export default clearAll;