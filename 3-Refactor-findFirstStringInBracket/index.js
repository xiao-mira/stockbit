// function findFirstStringInBracket(str){
//   if(str.length > 0){
//     let indexFirstBracketFound = str.indexOf("(");

//     if(indexFirstBracketFound >= 0) {
//       let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
//       console.log('wordsAfterFirstBracket', wordsAfterFirstBracket);

//       if(wordsAfterFirstBracket){
//         wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
//         console.log('wordsAfterFirstBracket', wordsAfterFirstBracket)
//         let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");

//         if(indexClosingBracketFound >= 0){
//           return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
//         } else {
//           return '';
//         }

//       } else {
//         return '';
//       }

//     } else {
//       return '';
//     }

//   } else {
//     return '';
//   }
// }

const findFirstStringInBracket = (str) => {
  if (str.length === 0) {
    return '';
  }

  const indexFirstBracketFound = str.indexOf("(");

  if (indexFirstBracketFound < 0) {
    return '';
  }

  const indexClosingBracketFound = str.indexOf(")", indexFirstBracketFound);
  
  if (indexClosingBracketFound < 0) {
    return '';
  }

  return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound)
}
