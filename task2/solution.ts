const input:number = 6

let stopFlag:boolean = false
/*
* 由于数字是由0，1组成
* 实际上，每次都是+1或者+0
* */
const dfs = (num:number) => {
  // js数据长度>16会出现问题
  if (stopFlag || num.toString().length >= 16){
    return
  }
  // 退出递归条件
  if (num % input === 0 && num !== input){
    console.log(num)
    // 尽早停止
    stopFlag=true
    return
  }

  // 相当于在末尾+0
  dfs(num*10)
  // 相当于在末尾+1
  dfs(num*10+1)
}

dfs(1)

console.log(321)
