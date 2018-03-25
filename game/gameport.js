/* ============================================================================
  GAMEPORT
============================================================================ */
class Gameport {
  constructor(w = 750, h = 625) {
    // Create canvas and context
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Assign width and height
    this.canvas.width = w;
    this.canvas.height = h;

    // Prevent anti-aliasing
    this.ctx.imageSmoothingEnabled = false;
  }

  affix() {
    document.getElementById('game-port').appendChild(this.canvas);
  }
}