/**
 * Created by Administrator on 2017/3/10.
 */
var mongoose=require('mongoose');

var usersSchema=require('../schema/users')

module.exports=mongoose.model('User',usersSchema);