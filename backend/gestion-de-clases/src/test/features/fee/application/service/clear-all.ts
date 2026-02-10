import client from "resources/client";



const clearAll = async () => client.fee.deleteMany();

export default clearAll;