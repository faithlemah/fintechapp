const mongoose = require('mongoose');



  
async function connectToDatabase(){
  try{
      const conn= await mongoose.connect(process.env.MONGO_URL)
      /** no need for the options in the lastest version of mongoose
       * we connect*/
      console.log('mongodb connected successfully')
  }catch(err){
      console.error('Error connecting to MongoDB: ',err.message)
      process.exit(1)
  }
}


module.exports = connectToDatabase
