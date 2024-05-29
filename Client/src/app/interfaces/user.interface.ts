import { IProduct } from "./product.interface";

export interface IUser {
    _id?: string,
    profileImage?: string;
    email?: string;
    company?: string;
    admin?: boolean;
    banned?: boolean;
    products?: IProduct[];
}