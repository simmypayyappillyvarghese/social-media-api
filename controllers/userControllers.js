const User=require('./models');

module.exports={

    getUsers:function(req,res){

        User.find()
        .then(users=>res.json(users))
        .catch(e=>res.status(500).json(e))
    },
    createUser:function(req,res){

        User.create()
        .then(userData=>res.status(200).json(userData))
        .then(err=>res.status(500).json(err))
    }

}