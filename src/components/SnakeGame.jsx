import React, { useEffect, useRef, useState } from 'react';

function SnakeGame() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 200, y: 200 }]);
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * 15 + 1) * 20,
    y: Math.floor(Math.random() * 15 + 1) * 20,
  });
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const pixel = 20;

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    const handleKeyPress = (event) => {
      const key = event.keyCode;
      if (key === 37 && direction !== 'RIGHT') setDirection('LEFT');
      if (key === 38 && direction !== 'DOWN') setDirection('UP');
      if (key === 39 && direction !== 'LEFT') setDirection('RIGHT');
      if (key === 40 && direction !== 'UP') setDirection('DOWN');
    };

    document.addEventListener('keydown', handleKeyPress);

    const gameInterval = setInterval(() => {
      if (!gameOver) {
        updateGame(context);
      }
    }, 200);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      clearInterval(gameInterval);
    };
  }, [snake, direction, gameOver]);

  const updateGame = (context) => {
    context.clearRect(0, 0, 400, 400);

    // Draw Snake
    snake.forEach((segment, index) => {
      context.fillStyle = index === 0 ? '#fefefe' : '#000000';
      context.fillRect(segment.x, segment.y, pixel, pixel);
      context.strokeStyle = '#fefefe';
      context.strokeRect(segment.x, segment.y, pixel, pixel);
    });

    // Draw Food
    context.fillStyle = '#00FF00';
    context.fillRect(food.x, food.y, pixel, pixel);

    // Move Snake
    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    if (direction === 'LEFT') head.x -= pixel;
    if (direction === 'UP') head.y -= pixel;
    if (direction === 'RIGHT') head.x += pixel;
    if (direction === 'DOWN') head.y += pixel;

    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * 15 + 1) * pixel,
        y: Math.floor(Math.random() * 15 + 1) * pixel,
      });
    } else {
      newSnake.pop();
    }

    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= 400 ||
      head.y >= 400 ||
      isGameOver(head, newSnake)
    ) {
      setGameOver(true);
    } else {
      newSnake.unshift(head);
      setSnake(newSnake);
    }

    // Display Score
    context.fillStyle = 'red';
    context.font = '30px Pixelify Sans, sans-serif';
    context.fillText(score, 40, 40);
  };

  const isGameOver = (head, snake) => {
    for (let segment of snake) {
      if (head.x === segment.x && head.y === segment.y) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className='container'>
    <h1>Snake Game</h1>
      <canvas ref={canvasRef} width={400} height={400} />
      {gameOver && <div>Game Over! Final Score: {score}</div>}
    </div>
  );
}

export default SnakeGame;
