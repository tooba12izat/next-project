import mongoose from "mongoose";

export type UserProps = {
    name: string,
    email: string,
    id: string
}
export type userType = {
    name: string,
    email: string,
    _id: string,
    password:string,
    createdAt:Date,
    updatedAt:Date,

}
type user={
    _id:string;
    name: string;
    email: string;
    password: string;

}
export interface IUser {
    _id:string;
    name: string;
    email: string;
    password: string;
    friends: user[] ;
}
export interface UserListType {
    name: string;
    email: string;
    _id: string;
    password:string;

    // Add other fields as needed
}
export interface PostsListType {
    title: string;
    content: string;
    _id: string;
    user:UserListType;
    createdAt:Date;

    // Add other fields as needed
}
