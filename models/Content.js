/**
 * Created by Administrator on 2017/3/10.
 */
var mongoose=require('mongoose');

var contentsSchema=require('../schema/contents')

module.exports=mongoose.model('Content',contentsSchema);