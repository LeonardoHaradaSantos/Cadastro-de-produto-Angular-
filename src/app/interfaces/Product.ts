import { Category } from "./Category";

export interface Product {
    length: number;
    newProduct: boolean;
    promotion: boolean;
    id : number;
    name : string;
    description : string;
    price : number;
    category : Category;
}