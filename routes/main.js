/**
 * Created by Administrator on 2017/3/31.
 */
var express = require('express');
var router = express.Router();
var Category = require('../models/Category');
var Content = require('../models/Content');
var data;
router.use(function (req, res, next) {
    data = {
        userInfo: req.userInfo,
        categories: []
    }
    Category.find().then(function (categories) {
        data.categories = categories;
        next();
    });
})

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(1)

    data.category = req.query.category || '';
    data.page = Number(req.query.page || 1)
    data.limit = 3
    data.pages = 0

    var where = {};
    if (data.category) {
        where.category = data.category;
    }

//读取所有分类信息

    Content.where(where).count().then(function (count) {
        data.count = count;
        //计算总页数
        data.pages = Math.ceil(data.count / data.limit);
        //取值不能超过pages
        data.page = Math.min(data.page, data.pages);
        //取值不能小于1
        data.page = Math.max(data.page, 1);
        var skip = (data.page - 1) * data.limit;


        return Content.where(where).find().sort({_id: -1}).limit(data.limit).skip(skip).populate(['category', 'user']);
    }).then(function (contents) {
        data.contents = contents;
        res.render('main/index', data);
        console.log(data)
    })

});
router.get('/view', function (req, res) {
    var contentId = req.query.contentid || '';

    Content.findOne({_id: contentId}).then(function (content) {
        data.content = content;
        content.views++;
        content.save();
        res.render('main/view',data)
    })
})

module.exports = router;
