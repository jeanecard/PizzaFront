import { CodeI } from "../interfaces/code-i";
import { PizzaI } from "../interfaces/pizza-i";

export class Pizza   implements PizzaI {
    size: string;
    base: string;
    ingredients: CodeI[];
    constructor(){
        this.size = "";
        this.base = "";
        this.ingredients = [];
    }

}
