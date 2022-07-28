const {Schema,Types}=require('mongoose');
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
            default:Date.now,
            get:getFormattedDate
        }
    },
    {
        
    toJSON:{
        getters: true
    },

    id: false,
   }
);

//Getter Method to format the date
function getFormattedDate(date){

    return moment(date).format('MM-DD-YYYY HH:MM:SS');

}


module.exports=reactionSchema;