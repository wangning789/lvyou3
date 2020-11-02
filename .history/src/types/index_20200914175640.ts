export interface Res{
    data: spw[];
    total?: number
}
export interface spw{
    url:string, // 图片链接
    desc:string, // 图片描述
}