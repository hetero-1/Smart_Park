const mongoose= require("mongoose")
const URL='mongodb://Smart_Park:Smart_Park@ac-fqjqbef-shard-00-00.cm3nqhx.mongodb.net:27017,ac-fqjqbef-shard-00-01.cm3nqhx.mongodb.net:27017,ac-fqjqbef-shard-00-02.cm3nqhx.mongodb.net:27017/?ssl=true&replicaSet=atlas-7be7cb-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(URL).then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("fail to connect");
})


const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('Collection1', LogInSchema)

module.exports= collection