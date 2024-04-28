export interface ProfileObject {
    artist_name: string;
    bio: string;
    cover_categories: string[];
    genres: string[];
    userId?:number;
    banner: File;
    id?:number
}

export interface UpdateProfileObject {
    artist_name: string;
    cover_categories: string[];
    genres: string[];
    userId?:number;
    id?:number
}