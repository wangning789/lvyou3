export interface Res{
    data: data[];
    total: number
}
export interface data{
    url:string, // 图片链接
    desc:string, // 图片描述
}