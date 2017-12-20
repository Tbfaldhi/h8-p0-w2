console.log('tugas 1');
console.log('');
function shoutout() {
  console.log("halo!");
}

shoutout();

console.log('');
console.log('tugas 2');
console.log('');
var calculateMultiply = function(NUM1,NUM2) {
  return NUM1 * NUM2
}
var hasilPerkalian = calculateMultiply;
console.log(hasilPerkalian(5,6))


console.log('');
console.log('tugas 3');
console.log('');

var processSentence = function(name,age,address,hobby) {
  return 'Nama saya '+ name +' ,umur saya '+ age + 'tahun, alamat saya di ' + address +' , dan saya punya hobby yaitu '+ hobby + ' !'
}
var fullSentence = processSentence;
console.log(fullSentence('Agus', 30 , 'Jln. Malioboro, Yogjakarta','gaming'))
