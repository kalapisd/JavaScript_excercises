export function concatArrays (char, ...stringArray) {
  
    let concatenatedArray = [];
    stringArray.forEach(array => {
      concatenatedArray = concatenatedArray.concat(array);
    });
  
    const uniqueArray = [...new Set(concatenatedArray)];
  
    const filteredArray = uniqueArray.filter(item => !item.includes(char));
  
    const trimmedArray = filteredArray.map(item => item.trim());

    return trimmedArray;
  };
