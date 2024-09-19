export interface ImagePostDTO {
    id?: string;
    url: string;
    description: string;
    likes: number;
    author: {
        id: string;
        firstName: string;
        lastName: string;
    };
}