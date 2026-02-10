import client from "resources/client";




const clearAll = async () => await client.fee.deleteMany();

export default clearAll;