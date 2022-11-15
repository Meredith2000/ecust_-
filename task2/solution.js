"use strict";
const input = 2;
let stopFlag = false;
/*
* 由于数字是由0，1组成
* 实际上，每次都是+1或者+0
* */
const dfs = (num) => {
    if (stopFlag || num.toString().length > 100) {
        return;
    }
    // 退出递归条件
    if (num % input === 0 && num !== input) {
        console.log(input);
        console.log('===');
        console.log(num);
        stopFlag = true;
        return;
    }
    // 相当于在末尾+1
    dfs(num * 10 + 1);
    // 相当于在末尾+0
    dfs(num * 10);
};
dfs(1);
console.log(321);
