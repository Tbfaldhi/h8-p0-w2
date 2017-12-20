console.log('tugas1')
console.log('')

var total = 0;
for(var i = 1; i <= 100; i += 1){
if( i % 2 !==0){
  total += i;
}else{
  if(i % 2 === 0){
    total-=i;
  }
}
}
console.log(total)
