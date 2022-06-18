const mongoose = require ("mongoose");
const { string } = require("prop-types");


//creating connection and creating database
mongoose.connect('mongodb://localhost:27017/reactapp').then(() => {
        console.log("Connected to Database");
        }).catch((err) => {
            console.log("Not Connected to Database ERROR! ", err);
        });
//schema defines structure of the document
const profilesSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    age : Number,
    email: String,
    number: Number,
    location: String,
    occupation: String
})
//collection creation
const UserProfile = new mongoose.model("UserProfile" , profilesSchema );

const createDocument = async () => {
    try{
        //create/insert a document
        const reactUsers = new UserProfile({
        name : "Riki",
        age : 32,
        email: "riki@gmail.coming",
        number: 9734456124,
        location: "India",
        occupation: "Engineer"
    })

    const result = await reactUsers.save();
    console.log(result);
    }
    catch(err){
        console.log(err);
     }
  
}

createDocument();
