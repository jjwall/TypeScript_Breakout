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
    let numberOfTruths = <number> 0;
    partialPattern1.forEach(element => {
        if (element) {
            numberOfTruths++;
        }
    });
    if (numberOfTruths === 0) {
        return renderBlocks();
    }
    let partialPattern2 = partialPattern1.slice();
    partialPattern2.reverse();
    let totalPattern = partialPattern1.concat(partialPattern2);

    return totalPattern;
}