import service from'../http/index'

export default{
getlunbo(){
    return service.get('/scenics/banners')
}
    
}