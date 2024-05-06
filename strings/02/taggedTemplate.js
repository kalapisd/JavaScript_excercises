export function taggedTemplate (texts, ...values) {

  let result = '';

  texts.forEach((text, index) => {
    if(text!=" "){
      result += `<em>${text}</em>`;
    }
    if (values[index]) {
      result += `<strong>${values[index]}</strong>`;
    }
  });

  return result;
};
