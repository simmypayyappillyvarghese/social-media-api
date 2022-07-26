const Thoughts=require('../models/Thoughts');

module.exports={

    getThoughts(req,res){
        Thoughts.find()
       .select('-__v')
        .then((thoughts)=>
        res.json(thoughts))
        .catch(e=>res.status(500).json(e));
    },
    createThoughts(req,res){
        Thoughts.create(req.body)
        .then(thoughtsData=>res.status(200).json(thoughtsData))
        .catch(e=>res.status(500).json(e));
    }

};  