import { useState, useCallback } from "react";

import { TETROMINOS, randomTetromino } from "../tetrominos";
import { STAGE_WIDTH, checkCollision } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  function rotate(matrix, direction) {
    // Make the rows to become cols (transpose)
    const mtrx = matrix.map((_, index) =>
      matrix.map((column) => column[index])
    );
    // Reverse each row to get a rotated matrix
    if (direction > 0) return mtrx.map((row) => row.reverse());
    return mtrx.reverse();
  }

  return [player];
};
