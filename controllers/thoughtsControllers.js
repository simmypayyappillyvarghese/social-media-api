    const {User,Thoughts}=require('../models');

module.exports={

    getThoughts(req,res){
        Thoughts.find()
       .select('-__v')
        .then((thoughts)=>
        res.json(thoughts))
        .catch(e=>res.status(500).json(e));
    },
    createThought(req,res){

    Thoughts.create(req.body)
    .then((thought)=>{
    return User.findOneAndUpdate(
        {_id:req.body.userId},
        {$addToSet:{thoughts:thought._id}},
        {new:true}
        );
    })
    .then(user=>
            !user
            ?res.status(404).json("Thought created but no matching user found")
            : res.status(200).json('Created the Thought') 
        )
    .catch(e=>
        {console.log(e);
            res.status(500).json(e)})
    
    },

    getSingleThought(req,res){

        Thoughts.findById({_id:`${req.params.thoughtId}`})
        .select('-__v')
        .then(thought=>res.status(200).json(thought))
        .catch(e=>res.status(500).json(e))

    },

    updateThought(req,res){

        Thoughts.findOneAndUpdate(
            {_id:`${req.params.thoughtId}`},
            {$set:req.body},
            {runValidators:true,new:true}
            )
        .then(thoughtData=>res.status(200).json(thoughtData))
        .catch(e=>res.status(500).json(e))    
    },

    deleteThought(req,res){

        Thoughts.findOneAndRemove(
            {_id:`${req.params.thoughtId}`}
        )
        .then(deletedThought=>res.status(200).json(deletedThought))
        .catch(e=>res.status(500).json(e))


    },

    createReaction(req,res){

        Thoughts.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$addToSet:{reactions:req.body}},
            {runValidators:true,new:true}
        )
        .then(thoughtsData=>res.status(200).json(thoughtsData))
        .catch(e=>res.status(500).json(e))
        
    },
    removeReaction(req,res){

        Thoughts.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$pull:{reactions:{reactionId:req.params.reactionId}}},
            { runValidators: true,new:true}
        )
        .then(thoughtsData=>
            {
                if(!thoughtsData){

                    res.status(404).json("No Reaction with this Id")
                }
                res.status(200).json(thoughtsData)
            })        
        .catch(e=>res.status(500).json(e))
    }


};  