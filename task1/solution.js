"use strict";
let deepClone = require('../utils');
let map = [
    [1, 3, 0, 0],
    [0, 0, 1, 4],
    [3, 0, 0, 2],
];
const Judge = (map) => {
    let rank = [];
    for (let j = 0; j < 4; j++) {
        let flag = 0;
        for (let i = 0; i < 3; i++) {
            if (map[i][j] !== 0) {
                rank.push(map[i][j]);
                flag++;
            }
        }
        if (flag !== 1) {
            return false;
        }
    }
    // 检验是否有是连续的顺序
    for (let i = 0; i < 4; i++) {
        if (rank[i] !== i + 1) {
            return false;
        }
    }
    return true;
};
let a = [0, 1];
let b = [2, 3];
let c = [0, 3];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
            const temp = deepClone(map);
            temp[0][a[i]] = 0;
            temp[1][b[j]] = 0;
            temp[2][c[k]] = 0;
            console.log(i, j, k);
            // console.log(temp)
            // console.log(Judge(temp))
        }
    }
}
