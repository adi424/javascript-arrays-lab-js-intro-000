var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.shift(name)
  return kittens;
}