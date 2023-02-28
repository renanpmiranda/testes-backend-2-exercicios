import { UserDB } from './../types';
import { UserModel } from "../types"

export interface SignupInputDTO {
    name: unknown,
    email: unknown,
    password: unknown
}

export interface SignupOutputDTO {
    token: string
}

export interface LoginInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginOutputDTO {
    token: string
}

export type GetAllOutputDTO = UserModel[]

export interface DeleteUserInputDTO {
    id: string,
    token: string | undefined
}

export interface DeleteUserOutputDTO {
    message: string
}

export interface GetUserByIdInputDTO {
    id: string,
    token: string | undefined
}

export type GetUserByIdOutputDTO = UserModel