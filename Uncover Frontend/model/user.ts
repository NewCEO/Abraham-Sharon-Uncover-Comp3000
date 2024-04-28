export interface UserObject {
    access_token:string;
    user: User
}


export interface User {
    id: number;
    created_at: string;
    updated_at: string;
    first_name: string;
    last_name: string;
    email: string;
    email_verified: boolean;
    username: string;
    role: string;
    is_admin: boolean;
    password_reset: null | string;
    password_reset_expires: null | string;
    bio: null | string;
    profile_photo: null | string;
    is_deleted: boolean;
}



export interface AuthState {
    user: User | null;
  }