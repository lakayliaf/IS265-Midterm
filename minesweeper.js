//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const annotate = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let m = 0; m < input[i].length; m++) {
      if (input[i][m] !== "*") {
        let count = 0; 
        let findMines = str => {
          if (str === "*") count++;
        };
        findMines(input[i][m - 1]);
        findMines(input[i][m + 1]);
        if (i > 0) {
          findMines(input[i - 1][m]);
          findMines(input[i - 1][m - 1]);
          findMines(input[i - 1][m + 1]);
        }
        if (i < input.length - 1) {
          findMines(input[i + 1][m]);
          findMines(input[i + 1][m - 1]);
          findMines(input[i + 1][m + 1]);
        }
        if (count > 0) {
          input[i] = input[i].slice(0, m) + count + input[i].slice(m + 1);
        }
      }
    }
  }
  return input;
};