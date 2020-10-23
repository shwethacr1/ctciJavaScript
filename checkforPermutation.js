function checkforPermutation(){
  var name1 = 'enterastring'
  var name2 = 'enterastring'
  var toArray1 = name1.split('')
  var toArray2 = name2.split('')
  toArray1 = toArray1.sort()
  toArray2 = toArray2.sort()
  for(var i=0;i<toArray1.length;i++){
    if(toArray1[i] === toArray2[i]) {
      continue
    }
    else {
      return false
    }
  }
  return true
}