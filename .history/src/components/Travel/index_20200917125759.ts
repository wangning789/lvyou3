
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

// export interface children{
//     city:string
//     desc:string
// }