//有序二维数组查找特定值
var arr=[[1,2,4,6],[2,4,6,8],[8,9,10,11],[9,12,13,15]];
function find(arr,rows,cols,number) {
  var found = false;
  if(arr && rows>0 &&cols>0){
    var row =0;
    var col =cols-1;
    while(row<rows &&col>=0){
      if(arr[row][col] == number){
        found = true;
        break;
      }else if(arr[row][col] > number){
        col--;
      }else{
        row++;
      }
    }
  }
   return found;
}
alert(find(arr,4,4));