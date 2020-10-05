
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArr=[]
  if(matrix==undefined) return resArr;
  for(let i=0;i<matrix.length;i++){
    if(i%2==0){
      for(let x=0;x<matrix[i].length;x++){
        resArr.push(matrix[i][x])
      }
    }else{
      for(let x=matrix[i].length-1;x>=0;x--){
        resArr.push(matrix[i][x])
      }
    }
    
  }
  return resArr;
}
