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
 }   
}