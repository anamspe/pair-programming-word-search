const transpose = function(matrix) {
  // Replace this code with your solution
  // Initialize variable; an empty array
  const transposedArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transposedArray.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let ii = 0; ii < matrix[i].length; ii++) {
      // console.log(matrix[i][ii]);
      transposedArray[ii].push(matrix[i][ii]);
      // console.log(transposedArray);
    }
  }
  return transposedArray;
};

const wordSearch = (letters, word) => {


  if (letters.length === 0) {
    return 'not possible to look for a word in an empty matrix'
  }

  //check lines horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(horizontalJoin);
  for (l of horizontalJoin) {
    // console.log(l);
    if (l.includes(word)) {
      return true
    }
    continue;
  }

  // console.log('hello');
  //transpose matrix to check letters vertically
  const transposed = transpose(letters);
  const verticalJoin = transposed.map(tl => tl.join(''));

  // console.log(verticalJoin)
    if (verticalJoin.includes(word)) {
      return true
    }
    return false;
  
  
};

module.exports = wordSearch;

wordSearch([
  ['A', 'W', 'C', 'F', 'E', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'A', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'V', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'S', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'D', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'R', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'O', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'P', 'U', 'A', 'L'],
], 'EAVESDROP');