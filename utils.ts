export {}

let deepCLone = (obj:any) =>{
  return JSON.parse(JSON.stringify(obj))
}

module.exports = deepCLone
