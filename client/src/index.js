let positions = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
}

const createBoard = () => {
  console.log(`
_${positions[1]}_|_${positions[2]}_|_${positions[3]}_
_${positions[4]}_|_${positions[5]}_|_${positions[6]}_
 ${positions[7]} | ${positions[8]} | ${positions[9]}
`);
}

const markBoard = (position, mark) => {
  if (typeof mark === 'string') {
    mark = mark.toUpperCase();
  }

  if (isNaN(position)) {
    return console.log('Please enter a valid number betweemn 1 - 9');
  }

  positions[position] = mark;
  createBoard();
}

const winner = () => {
  
}

const resetBoard = () => {
  for (let key in positions) {
    positions[key] = ' ';
  }

  createBoard();
}

createBoard();
markBoard('3', 'x');
