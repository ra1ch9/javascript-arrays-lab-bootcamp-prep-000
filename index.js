var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
    kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}
function appendKitten(name){
  var appendKit = kittens;
  return [... appendKit, name];
}
function prependKitten(name){

}
function removeLastKitten(){

}
function removeFirstKitten(){

}
