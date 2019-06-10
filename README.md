# Documentation

Function 'riddleSolver' receive (board) a two-dimensional array of integers in range [1, 1000] and the numbers of columns and rows should be in range [3, 50].

Variable 'arr' is copy of the array (board). The variable is use by functions in 'riddleSolver'.

Functions 'checkRowsColumnsArray' and 'checkNumbers' check the numbers rows and columns ([3, 50]) and integers numbers in range [1, 1000].

Function 'changeItems' find identical numbers if there are three or more of the same integers adjacent vertically or horizontally ('findIdenticalNumbers'), then changes them on value zero. If there are zeros function 'changePositionItem' drops integers until they hit a non-zero value or the very bottom of the board.

Function 'init calls all functions.

Finally function 'riddleSolver' a stable board is returned if array in 'board' is correct.