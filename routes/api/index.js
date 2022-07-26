const router=require('express').Router();
const usersRoutes=require('./userRoutes');

router.use('/users',usersRoutes);



module.exports=router;

