const string = "Привет! Как дела?";

const vowels = ["а", "А", "у", "У", "е", "Е", "ы", "Ы", "о", "О", "э", "Э", "я", "Я", "и", "И", "ю", "Ю"];

function filter(stringTofilter){
let extracted = "";

  for(let i = 0; i < stringTofilter.length; i++){
    const current = stringTofilter[i];

    if(vowels.indexOf(current) !== -1){
      extracted = extracted + current;
    }
  }
  return extracted;
}

const result = filter(string);

console.log(result);