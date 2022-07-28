const {User,Thoughts}=require('../models');

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

        User.findOneAndUpdate(
        {_id:`${req.params.userId}`},
        {$set:req.body},
        {runValidators:true,new: true}
        )
        .select('-__v')
        .then(userData=>res.status(200).json(userData))
        .catch(e=>res.status(500).json(e));

    },
    deleteUser(req,res){

        User.findOneAndRemove(
        {_id:`${req.params.userId}`},
        {runValidators:true,new: true}
        )
        .then((userData)=>{
                Thoughts.deleteMany(
                {
                    _id: {$in:userData.thoughts},
                   
                })
            .then(removedData=>{
                if(removedData){
                    res.status(200).json("User and associated Thought is deleted");
                }
                else{
                    res.status(200).json("No Thought found for user to Remove");
                }  
            })   
            .catch(e=>res.status(500).json(e))
            }
        )
        .catch(e=>
         {   
            console.log(e);
            res.status(500).json(e)
        }
            )


    },
    createFriend(req,res){

        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$addToSet:{friends:req.params.friendId}},
            {runValidators:true,new:true}
        )
        .select('-__v')
        .then(userData=>res.status(200).json(userData))
        .catch(e=>res.status(500).json(e))
        
    },

    deleteFriend(req,res){

        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$pull:{friends:req.params.friendId}},
            {runValidators:true,new:true}
        )
        .then(userData=>
            {
                if(!userData){

                    res.status(404).json("No Friends with this Id")
                }
                res.status(200).json(userData)
            }
        )
        .catch(e=>res.status(500).json(e))

    }

}

