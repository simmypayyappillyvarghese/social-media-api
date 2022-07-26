const {Schema,model}=require('mongoose');
const moment=require('moment');
const Reaction=require('./Reaction');

//Defining the schema for the Thoughts document
const thoughtsSchema=new Schema(
    {
        thoughtText:{
            type:String,
            required:true,
            minlength:1,
            maxlength:280
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        username:{
            type:String,
            required:true
        },
        reactions:[Reaction]

    },
    {
        toJSON:{
            virtuals:true
        }
    }
);

//Defined methods on the schema to format the date
thoughtsSchema.methods.getFormattedDate=function(){

    console.log(this.createdAt);
    let formattedDate=moment((this.createdAt).toString(), "DD MM YYYY hh:mm:ss", true);
    console.log(formattedDate);
    return formattedDate;

}

//Creating virtuals for the Thoughts model

thoughtsSchema.virtual('reactionCount').get(()=>{

    return this.reactions.length;
});


//Creating Thoughts model
const Thoughts=new model('Thoughts',thoughtsSchema);


module.exports=Thoughts;