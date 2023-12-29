import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(()=>{
    app.listen(PORT,()=>console.log("Server Running @port:"+PORT+" & Connected to the Database :) ")); 
  })
  .catch((err)=>console.log(err)); 
 