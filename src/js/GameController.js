export default class GameController {
  constructor(cellsSelector) {
    this.cells = document.querySelectorAll(cellsSelector);
    this.activeCell = 0;
    this.nextCell = 0;
  }

  getRandomCell() {
    return Math.floor(Math.random() * this.cells.length);
  }

  addGoblin(index) {
    this.cells[index].innerHTML = '<img class="goblin" src="https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true" alt="goblin">';
  }

  deleteGoblin(index) {
    this.cells[index].innerHTML = '';
  }

  nextTurn() {
    this.deleteGoblin(this.activeCell);

    while (this.nextCell === this.activeCell) {
      this.nextCell = this.getRandomCell();
    }

    this.addGoblin(this.nextCell);

    this.activeCell = this.nextCell;
  }
}
