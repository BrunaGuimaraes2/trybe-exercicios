// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let seconIndex = 0; seconIndex < index; seconIndex += 1) {
    if (numbers[index] < numbers[seconIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[seconIndex];
      numbers[(seconIndex = position)];
    }
  }
}

console.log(numbers);
