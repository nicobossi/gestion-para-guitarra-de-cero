import client from "resources/context"



const clearAll = async () => {
    await client.alumno.deleteMany();
}


export default clearAll;