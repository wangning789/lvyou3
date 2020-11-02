
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

export interface Omg{
data:arr[]
total:number|string
}

export interface arr{
account:object
banner: []
city:object
cityName:string
comments:liu[]
content:string
created_at:number|null
id:number|null
images:[]
like: null
likeIds: null
postkind: null
scenic: null
summary: string|null
title:string
updated_at:number
watch:number|null
}


export interface liu{
    account:number
    content:string
    created_at:number
    follow: null
    hotel: null
    id:number
    level: number
    like: null
    likeIds: null
    post: number
    score: null
    type: number
    updated_at: number
}


// export interface children{
//     city:string
//     desc:string
// }