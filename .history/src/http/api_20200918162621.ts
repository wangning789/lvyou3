import service from'./index'
// let token =localStorage.getItem('token')

export default {
    //轮播图
getlunbo(){
    return service.get('/scenics/banners')
},

    //手机验证码
 postyanzheng({tel}:{tel:number|string}){
    return service.post('/captchas',{tel})
 },
 
//  注册
postnox({username,nickname,captcha,password}:{username:string,nickname:string,captcha:string,password:string}){
    return service.post('/accounts/register',{username,nickname,captcha,password})
},

//登录
getlogin({username,password}:{username:string,password:string}){
    return service.post('/accounts/login',{username,password})
},

//城市菜单列表
getcity(){
    return service.get('/posts/cities')
},

//获取文章分类
getwen(){
    return service.get('/postkinds')
},

//文章列表
getlou(){
    return service.get('/posts')
},
//文章详情
getpost({id}:{id:number}){
    return service.post('/posts',{id})
}
}