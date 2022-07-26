const {Schema,model}=require('mongoose');
const moment=require('moment');


const reactionSchema=new Schema(
    {
        //Why are we setting it as objectId
        reactionId:{
            type:Schema.Types.ObjectId,
            default:new ObjectId()
        },
        reactionBody:{
            type:String,
            required:true,
            maxlength:280
        },
        username:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    },
    {
        toJSON:{
            virtuals:true
        }
    }
);


reactionSchema.methods.getFormattedDate=function(){

    console.log(this.createdAt);
    let formattedDate=moment((this.createdAt).toString(), "DD MM YYYY hh:mm:ss", true);
    console.log(formattedDate);
    return formattedDate;

}


module.exports=reactionSchema;