import service from'./index'

export default {
getlunbo({name}:{name:string}){
    return service.get(`cities?name=${name}`)
}
    
}