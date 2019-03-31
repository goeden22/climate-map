function setSmall(string){
    return string.replace(/\s+/g,"").toLowerCase();
}
function ifContains(array, value){
    if(array.map(val => {return setSmall(val)}).includes(setSmall(value))){
        return setSmall(array.find(c => {
            return setSmall(c) == setSmall(value)
        }))
    } else{
        return false
    }
}

module.exports = {setSmall, ifContains}
