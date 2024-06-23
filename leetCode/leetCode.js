let i = 0;
let j = 0;
let count = 0;
const box1 = [0, 0];
const box2 = [0, 1];
const box3 = [0, 2];
const box4 = [1, 0];
const box5 = [1, 1];
const box6 = [1, 2];
const box7 = [2, 0];
const box8 = [2, 1];
const box9 = [2, 2];
const patterns = [
  [box1, box2, box3],
  [box4, box5, box6],
  [box7, box8, box9],
  [box1, box4, box7],
  [box2, box5, box8],
  [box3, box6, box9],
  [box1, box5, box9],
  [box3, box5, box7],
];
const checkEquals = (A, pat) => {
  count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < pat.length; j++) {
      if (A[i][0] === pat[j][0] && A[i][1] === pat[j][1]) {
        count++;
      }
    }
  }
  return count;
};
const checkWinner = (A, B) => {
  for (pat of patterns) {
    for (i = 0; i < A.length - 2; i++) {
      if (checkEquals(A, pat) > 2) {
        return "A";
      } else if (checkEquals(B, pat) > 2) {
        return "B";
      }
    }
  }
  if (A.length + B.length < 9) {
    return "Pending";
  } else {
    return "Draw";
  }
};
const sortArray = (array) => {
  array.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  return array;
};
var tictactoe = function (moves) {
  let A = [];
  let B = [];
  for (let i = 0; i < moves.length; i++) {
    A.push(moves[i++]);
    if (moves[i] === undefined) {
      break;
    }
    B.push(moves[i]);
  }
  A = sortArray(A);
  B = sortArray(B);
  return checkWinner(A, B);
};
let moves = [
  [2, 0],
  [1, 1],
  [0, 2],
  [2, 1],
  [1, 2],
  [1, 0],
  [0, 0],
  [0, 1],
];
tictactoe(moves);
