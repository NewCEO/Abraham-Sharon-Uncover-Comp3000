export interface UploadCover { 
    song_name:string,
    artist_name:string,
    description:string,
    userId?:number,
    id?:number,
    art:File,
    audio:File
 }