 
const   User  = require('../models/usersModel.js');
const bcryptjs = require('bcryptjs')
const signup = async  (req,res) =>{
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User ({username,email,password:hashedPassword})
   

  try{
    await  newUser.save();
    res.status(201).json("User Created Successfully")
  }catch(err){
    res.status(500).json(err.message)
  }
  
}

module.exports = signup; 
 