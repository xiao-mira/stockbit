const groupAnagramWords = (arr) => {
  const map = {};

  for (let i=0; i<arr.length; i++) {
    const splittedCharSet = Array.from(new Set(arr[i].split('').sort())).join('')
    
    if (map[splittedCharSet]) {
      map[splittedCharSet].push(arr[i]);
    } else {
      map[splittedCharSet] = [arr[i]]
    }
  }
  
  const result = [];
  
  for(const key in map) {
    result.push(map[key]);
  }
  
  return result;
}

// const arr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
// console.log(groupAnagramWords(arr))