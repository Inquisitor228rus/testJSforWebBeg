const string = "Привет! Как дела?";
const dictionary = ["у", "е", "ы", "а", "о", "э", "я", "и", "ю", "ё"]; // словарь гласных

getVowels = (args) => {
  const newArr = makeArr(args.toLowerCase()); // возвращает новый массив
  let vowels = [];
for (const i in newArr) {
    if (dictionary.includes(newArr[i]) == true) { // проверка что строка из словаря такое же как в новом массиве
        vowels.push(newArr[i]); // если истина - добавить строку в массив.
    }
}
return vowels;
};

makeArr = (args) => {
  const arr = args.split(""); // составляет из строки массив по буквам
  return arr;
};

console.log(getVowels(string));
