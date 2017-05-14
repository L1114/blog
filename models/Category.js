/**
 * Created by Administrator on 2017/3/10.
 */
var mongoose=require('mongoose');

var categoriesSchema=require('../schema/categories')

module.exports=mongoose.model('Category',categoriesSchema);