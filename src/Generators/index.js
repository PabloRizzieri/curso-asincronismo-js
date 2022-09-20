function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterate(array) {
    for(let element of array) {
        yield element
    }
}

const it = iterate(["Pablo", "Rizzieri", "Oscar", "Mendez"])

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);