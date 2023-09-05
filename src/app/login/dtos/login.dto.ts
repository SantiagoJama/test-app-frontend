export interface LoginRequestDTO {
    userName : string;
    userPassword : string;   
}

export interface LoginResponseDTO {
    status : number;
    message : string;
}