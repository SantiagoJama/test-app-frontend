export interface userDTO {
    status : number;
    user : User[]
}

export interface User{
    id ?: number,
    username ?: string,
    userpassword ?: string
}