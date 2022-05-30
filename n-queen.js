arr = [];
for(i=0;i<4;i++){
  arr[i]=[]
}
for(i=0;i<arr.length;i++){
  for(j=0;j<4;j++){
    arr[i][j]= i+j;
  }
}
for(i=0;i<arr.length;i++){
  let str = "";
  for(j=0;j<arr[i].length;j++){
    str+=arr[i][j]+" ";

  }
  console.log(str);
}










