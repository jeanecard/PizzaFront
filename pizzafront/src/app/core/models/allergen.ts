import { AllergenI } from "../interfaces/allergen-i";

export class Allergen  implements AllergenI {
    code = "";
    label = "";
    url = "";

    constructor(obj?: Partial<Allergen>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }

    direBonjour(): string {
        return "Bonjour";
    }
}
