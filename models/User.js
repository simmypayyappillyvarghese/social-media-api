
//Import mongoose
const {Schema,model}=require('mongoose');

//Create user schema
const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            match:
            [/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ ,"Enter a Valid Email Address"]
                    
        },
        thoughts:[
            {
                type:Schema.Types.ObjectId,
                ref:'Thought'
            }]
        ,
        friends:[
            {
            type:Schema.Types.ObjectId,
            ref:'User'
            }
        ]
    },
    {
        toJSON:{
            virtuals:true
        }

    }
    
);

//Create the virtual friendCount that will return the lenggth of the friends array

userSchema.virtuals('friendCount').get(()=>{

    return this.friends.length;
});


// Initialize User model
const User = model('User', userSchema);

module.exports = User;