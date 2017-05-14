/**
 * Created by Administrator on 2017/3/9.
 */
// var setting = require('../settings');
// var MongoClient = require('mongodb').MongoClient
// //mongodb 默认端口号27017
// var url = setting.host;
// function mongoObj() {
//     this.url = url;
//     this.MongoClient = MongoClient;
// }
// module.exports = mongoObj;
// //实现mongodb存储功能
// mongoObj.prototype.mongoSave = function mongoSave(primarykey,data,document ,callback) {
//     this.MongoClient.connect(url, function(err, db) {
//         if(err){
//             return callback(err);
//         }
//         // 创建类似于sql的table mongo里叫document
//         db.collection(document,function (err,collection) {
//             if(err){
//                 db.close();
//                 return callback(err);
//             }
//             //给primarykey 类似于name属性添加索引,
//             collection.ensureIndex(primarykey,{unique:true},function (err) {
//                 //写入data数据eg:user文档
//                 collection.insert(data,{safe:true},function (err,data) {
//                     db.close();
//                     console.log('db.js 存储成功 调用callback');
//                     callback(err,data);
//                 })
//             })
//         })
//     });
// }
//
//
//
// mongoObj.prototype.mongoGet = function mongoGet(document,obj,callback){
//     this.MongoClient.connect(url, function(err, db) {
//         if(err){
//             return callback(err);
//         }
//         db.collection(document,function (err,collection) {
//             if (err) {
//                 db.close();
//                 return callback(err);
//             }
//             collection.findOne(obj,function (err, doc) {
//                 db.close();
//                 if (doc){
//                     callback(err,doc);
//                 }else {
//                     callback(err,null);
//                 }
//             })
//         });
//     });
// };
//
//
//
// //当我们创建完成数据库后,module.exports 输出创建的数据库连接,设置回话支持持久网络协议 通过cookie识别用户
// //添加依赖模块 connect-mongo