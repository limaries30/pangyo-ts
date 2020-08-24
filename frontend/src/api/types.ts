export interface AxiosResp
{
    status: string;
}

export interface Post{
    url: string;
    titile: string;
}

export interface PostResp extends AxiosResp{
    data: Post[];
}