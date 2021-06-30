import GameController from './GameController';

const gameController = new GameController('.cell');

setInterval(() => gameController.nextTurn(), 1000);
