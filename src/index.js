import items from "./foods.js";
import { choice, remove } from "./helpers";

let randFruit = choice(items);

console.log(`I’d like one ${randFruit}, please.`);

let removed = remove(randFruit, items);

console.log(`sorry no more ${randFruit}`);
