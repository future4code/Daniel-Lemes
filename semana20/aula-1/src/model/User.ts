import { Task } from "./Task"

export type User = {
    id: string,
    name: string,
    email: string,
    nickname: string,
    password: string,
    role: USER_ROLES,
    tasks?: Task[]
}

export type CreateUserInput = {
    name: string
    nickname: string,
    email:string,
    password: string,
    role: USER_ROLES
}



export type CreateUserOutput = {
    token: string
}

export interface CreateUserOutputInterface {
    token: string
}


export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}


export function stringToUserRole(role: string): USER_ROLES {
    if(role.toUpperCase() === USER_ROLES.ADMIN){
        return USER_ROLES.ADMIN
    }else if(role.toUpperCase() === USER_ROLES.NORMAL){
        return USER_ROLES.NORMAL
    }else{
        throw new Error("Envie um User Role válido. Os valores válidos são ADMIN ou NORMAL")
    }
}


export function numberToBoolean(value: number): boolean{
    if(value !==0){
        return true
    }
    return false;
}

export function userRoleToString(role: USER_ROLES): string {
    if(role === "ADMIN"){
        return "admin";
    }
    return "normal";
}

export function setTasks(tasks: Task[], user: User): User{
    user.tasks = tasks;
    return user;
}