const {Schema,model}=require('mongoose');
const moment=require('moment');


const reactionSchema=new Schema(
    {
        //Why are we setting it as objectId
        reactionId:{
            type:Schema.Types.ObjectId,
            default:function(){
                return new Types.ObjectId();
            }
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
    }
);


reactionSchema.methods.getFormattedDate=function(){

    console.log(this.createdAt);
    let formattedDate=moment((this.createdAt).toString(), "DD MM YYYY hh:mm:ss", true);
    console.log(formattedDate);
    return formattedDate;

}


module.exports=reactionSchema;