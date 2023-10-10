const mangoose = require("mangoose");
const connectDB=async()=>{
    try{
    const conn =await mangoose.connect(process.env.mangoose_uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        

    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }catch(error){
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
    }
};
module.exports=connectDB;