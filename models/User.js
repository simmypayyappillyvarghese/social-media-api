
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
                ref:'Thoughts'
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
        } ,
        
        id: false,

    }
    
);

//Create the virtual friendCount that will return the length of the friends array

userSchema.virtual('friendCount').get(function(){

    return this.friends.length;
});


// Initialize User model
const User = model('User', userSchema);

module.exports = User;