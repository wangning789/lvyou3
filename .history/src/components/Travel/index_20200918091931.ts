
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
total:number|undefined
}

export interface arr{
account:object
banner: []|null
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
    account:number|null
    content:string|null
    created_at:number|null
    follow: null
    hotel: null
    id:number|null
    level: number|null
    like: null
    likeIds: null
    post: number|null
    score: null
    type: number|null
    updated_at: number|null
}


// export interface children{
//     city:string
//     desc:string
// }