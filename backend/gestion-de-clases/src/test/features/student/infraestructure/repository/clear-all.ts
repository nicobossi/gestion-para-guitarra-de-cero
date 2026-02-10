import client from "resources/client";



const clearAll = async () => client.student.deleteMany();

export default clearAll;