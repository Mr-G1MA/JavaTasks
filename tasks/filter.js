const string = "Привет! Как дела?";

const result = string.replace(/[^аеёиоуыэюя]/ig, '');

console.log(result);