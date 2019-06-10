const riddleSolver = (board = [
  [7, 7, 7, 5, 1, 7],
  [1, 8, 1, 1, 1, 4],
  [3, 2, 3, 9, 7, 6],
  [9, 9, 3, 3, 6, 2],
  [1, 9, 3, 1, 8, 7],
  [5, 9, 2, 2, 4, 8]]) => {

  const arr = board.map(item => {
    return item
  });

  const checkRowsColumnsArray = () => {
    let rowsAmount;

    for (let i = 0; i < arr.length; i++) {
      rowsAmount = arr.length;
    }

    if (rowsAmount > 2 && rowsAmount <= 50) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (rowsAmount !== arr[i].length) {
            rowsAmount = 0;
          } 
        }
      }
    } else {
      rowsAmount = 0;
    }
    console.log(rowsAmount);
    return rowsAmount;
  }

  const checkNumbers = () => {
    let correctNumbers;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if ((arr[i][j] <= 0 || arr[i][j] > 1000) || (typeof arr[i][j] === 'string')) {
          correctNumbers = 0;
        } else {
          correctNumbers = 1;
        }
      }
    }
    return correctNumbers;
  }

  const correctNumbers = checkNumbers();
  const rowsAmount = checkRowsColumnsArray();

  const changeItems = () => {

    const findIdenticalNumbers = () => {
      let indenticalNumber;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
          if (arr[i][j] == arr[i][j + 1] && arr[i][j] == arr[i][j + 2] && arr[i][j] !== 0) {
            arr[i][j] += '';
            arr[i][j + 1] += '';
            arr[i][j + 2] += '';
            indenticalNumber = arr[i][j];
          }
        }
      }

      for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
          if (arr[j][i] == arr[j + 1][i] && arr[j][i] == arr[j + 2][i] && arr[j][i] !== 0) {
            arr[j][i] += '';
            arr[j + 1][i] += '';
            arr[j + 2][i] += '';
            indenticalNumber = arr[j][i];
          }
        }
      }
    }

    const putValueZero = () => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (typeof arr[i][j] === 'string') {
            arr[i][j] = 0;
          }
        }
      }
    }

    const changePositionItem = () => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
          if (arr[j][i] === 0) {
            for (let k = j - 1; k >= 0; k--) {
              if (arr[j][i] !== arr[k][i]) {
                arr[j][i] = arr[k][i]
                arr[k][i] = 0
                break
              }
            }
          }
        }
      }
    }

    if (correctNumbers == true) {
      findIdenticalNumbers();
      putValueZero();
      changePositionItem();
      findIdenticalNumbers();

      let itemStr = false;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (typeof arr[i][j] === 'string') {
            itemStr = true;
          }
        }
      }

      if (itemStr) {
        putValueZero();
        changePositionItem();
        changeItems();
      }
    }
  }

  const init = () => {
    checkRowsColumnsArray();
    checkNumbers();
    changeItems();
  }

  if (rowsAmount > 0 && correctNumbers == true) {
    init();
    return arr;
  }
}
module.exports = riddleSolver;