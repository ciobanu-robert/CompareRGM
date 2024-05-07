import { IProduct } from "./product.interface";

export interface ICompetitor {
    _id?: string,
    profileImage?: string;
    email?: string;
    company?: string;
    description?: string;
    products?: IProduct[];
}