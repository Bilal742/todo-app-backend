import mongoose  from "mongoose"
const conectDB = async ()=>{
    try {
          await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb Connected");
    } catch (error) {
        console.log("MongoDB Error ",error);  
    }
}

export default conectDB;







