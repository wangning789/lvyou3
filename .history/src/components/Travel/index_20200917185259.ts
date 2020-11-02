
export interface Res{
    data:msg[]
}
export interface msg{
    children:[
        {
        city:string
        desc:string
    }
    ]
    type:string
}


export interface arr{
account:object
banner: []
city:object
cityName:string
comments:liu[]
content:string
created_at:number
id:number
images:htt[]
like: null
likeIds: null
postkind: null
scenic: null
summary: string
title:string
updated_at:number
watch:number
}


export interface liu{

}

export interface htt{
    
}
// export interface children{
//     city:string
//     desc:string
// }