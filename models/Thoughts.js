const {Schema,model}=require('mongoose');
const moment=require('moment');
const reactionSchema=require('./Reaction');

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
            default:Date.now,
            get:getFormattedDate
        },
        username:{
            type:String,
            required:true
        },
        reactions:[reactionSchema]

    },
    {
        toJSON:{
            virtuals:true,
            getters: true,
        }
    }
);

//Getter Method to format the date
function getFormattedDate(date){

    return moment(date).format('MM-DD-YYYY HH:MM:SS');

}

// //Creating virtuals for the Thoughts model

thoughtsSchema.virtual('reactionCount').get(function(){

    return this.reactions.length;
});


//Creating Thoughts model
const Thoughts=new model('Thoughts',thoughtsSchema);


module.exports=Thoughts;