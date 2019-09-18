function setSmall(string){
    return string.replace(/\s+/g,"").toLowerCase();
}
function ifContains(array, value){
    if(array.map(val => {return setSmall(val)}).includes(setSmall(value))){
        return setSmall(array.find(c => {
            return setSmall(c) === setSmall(value)
        }))
    } else{
        return false
    }
}
function ifItHasDesc(array,value){
   let tempValue = array.filter(el => {
       return setSmall(el.name) === setSmall(value)
   })
   return tempValue.length > 0 ? tempValue[0].desc : false
}



module.exports = {setSmall, ifContains, ifItHasDesc}
