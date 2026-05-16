import client from "resources/client"



const clearAll = async () => {
    await client.student.deleteMany();
}


export default clearAll;