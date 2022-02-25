import { AllergenI } from "../interfaces/allergen-i";
import { PanierOutI } from "../interfaces/panierOut-i";

export class PanierOut implements PanierOutI {
    data: { amount: number };
    constructor(){
        this.data = {
            amount : 55
        };
    }
}
