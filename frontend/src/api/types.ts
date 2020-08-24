export interface AxiosResp
{
    status: string;
}

export interface Post{
    url: string;
    title: string;
    id: number;
}

export interface PostResp extends AxiosResp{
    data: Post[];
}