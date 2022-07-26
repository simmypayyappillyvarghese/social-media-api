const User=require('../models/User');

module.exports={

    getUsers(req,res){
        User.find()
       .select('-__v')
        .then((users)=>
        res.json(users))
        .catch(e=>res.status(500).json(e));
    },
    createUser(req,res){

        User.create(req.body)
        .then(userData=>res.status(200).json(userData))
        .catch(err=>res.status(500).json(err));
    },
    getSingleUser(req,res){

        User.findById({_id:`${req.params.userId}`})
        .select('-__v')
        .then(userData=>res.status(200).json(userData))
        .catch(e=>res.status(500).json(e));
    },
    updateSingleUser(req,res){

        User.updateOne(
        {_id:`${req.params.userId}`},
        {$set:req.body},
        {runValidators:true,new: true}
        )
        .then(userData=>res.status(200).json(userData))
        .catch(e=>res.status(500).json(e));

    }

}

