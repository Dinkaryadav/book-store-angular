import { PriceModel } from "./price.model";

export interface Bookmodel{
    id:number,
    title:string,
    totalPages:number,
    auther: string,
    price:PriceModel
}