export interface Res{
    data: spw[];
    total?: number
}
export interface spw{
    url:string, // 图片链接
    desc:string, // 图片描述
}

export interface yan{
code:string
created_at:number
id:number
isValid:number
tel:string
updated_at:number
}