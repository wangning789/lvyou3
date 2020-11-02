import service from'./index'
// let token =localStorage.getItem('token')

export default {
getlunbo(){
    return service.get('/scenics/banners')
}
    
}