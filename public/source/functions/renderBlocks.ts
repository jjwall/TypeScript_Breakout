import { BaseEntity } from "../classes/BaseEntity";
import { Block } from "../classes/Block";

export function renderBlocks():boolean[] {
    function random() {
        return Math.floor(Math.random() * 2);
    }
    let partialPattern1 = new Array<boolean>();
    for (let i: number = 0; i < 5; i++) {
        if (random() === 1) {
            partialPattern1.push(true);
        }
        else {
            partialPattern1.push(false);
        }
    }
    // -> revist
    //if (!partialPattern1.includes(true))
    let partialPattern2 = partialPattern1;
    partialPattern2.reverse();
    let totalPattern = partialPattern1.concat(partialPattern2);

    return totalPattern;
}