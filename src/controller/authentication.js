const user = require('../models/user')
class authentication {
    login(req,res){
        res.render('user/login', {layout: false})
    }
    createUser(req,res){
        res.render('user/createUser', {layout: false})
    }
    save(req,res){
        var newUser = new user(req.body)
        newUser.save()
        res.redirect('/authentication')
    }
    access(req,res){
        user.findOne({email:req.body.email}).lean()
        .then(function(info){
            if(!info){
                res.render('user/login',{err:'Email không đúng',layout: false})  
                return
            }
            if(info.password != req.body.password ){
                res.render('user/login',{err:'Sai mật khẩu',layout: false})  
                return
            }
            res.cookie('user',info.name)
            res.cookie('userId',info._id)
            res.redirect('/')
        }
        )     
    }
    logout(req,res, next) {
        res.clearCookie("user")
        res.redirect('/');
    }
}
module.exports = new authentication