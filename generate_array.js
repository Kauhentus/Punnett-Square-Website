let _a1 = [[['A', '.'], ['B', '.'], ['C', '.']], [['A', '.'], ['B', '.'], ['c', '.']], [['A', '.'], ['b', '.'], ['C', '.']], [['A', '.'], ['b', '.'], ['c', '.']], [['a', '.'], ['B', '.'], ['C', '.']], [['a', '.'], ['B', '.'], ['c', '.']], [['a', '.'], ['b', '.'], ['C', '.']], [['a', '.'], ['b', '.'], ['c', '.']]];
let _a2 = [[['A', '.'], ['B', '.'], ['C', '.']], [['A', '.'], ['B', '.'], ['c', '.']], [['A', '.'], ['b', '.'], ['C', '.']], [['A', '.'], ['b', '.'], ['c', '.']], [['a', '.'], ['B', '.'], ['C', '.']], [['a', '.'], ['B', '.'], ['c', '.']], [['a', '.'], ['b', '.'], ['C', '.']], [['a', '.'], ['b', '.'], ['c', '.']]];

let cross = [];

for(let i = 0; i < 8; i++){
    let row = [];
    for(let j = 0; j < 8; j++){
        let a = _a1[i][0].concat(_a1[i][1].concat(_a1[i][2]));
        let b = _a2[j][0].concat(_a2[j][1].concat(_a2[j][2]));

        let a1 = a.slice(0, 2).concat(b.slice(0, 2));
        if(a1[0] != a1[0].toUpperCase()){
            a1 = b.slice(0, 2).concat(a.slice(0, 2));
        }

        let b1 = a.slice(2, 4).concat(b.slice(2, 4));
        if(b1[0] != b1[0].toUpperCase()){
            b1 = b.slice(2, 4).concat(a.slice(2, 4));
        }

        let c1 = a.slice(4, 6).concat(b.slice(4, 6));
        if(c1[0] != c1[0].toUpperCase()){
            c1 = b.slice(4, 6).concat(a.slice(4, 6));
        }

        row.push(a1.concat(b1.concat(c1)));
    }
    cross.push(row);
}

console.log(cross);