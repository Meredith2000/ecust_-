const _deepClone = (obj:any) =>{
  return JSON.parse(JSON.stringify(obj))
}

module.exports = _deepClone
