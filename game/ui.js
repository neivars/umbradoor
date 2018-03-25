/* ============================================================================
  USER INTERFACE
============================================================================ */
class UI {
  constructor() {
    this.inventory = new Image();
    this.inventory.src = 'assets/inventory.png';

    this.textbox = new Image();
    this.textbox.src = 'assets/textbox.png';

    this.roomframe = new Image();
    this.roomframe.src = 'assets/roomframe.png';

    this.frame = new Image();
    this.frame.src = 'assets/frame.png';

    this.growths = new Image();
    this.growths.src = 'assets/growths.png';
  }

  render() {
    // Draw background
    Sys.gameport.ctx.fillRect(0, 0, Sys.gameport.canvas.width, Sys.gameport.canvas.height);

    // UI inventory image
    if (this.inventory.complete) {
      Sys.gameport.ctx.drawImage(this.inventory, 0, 0, Sys.gameport.canvas.width, Sys.gameport.canvas.height);
    };

    // UI textbox image
    if (this.textbox.complete) {
      Sys.gameport.ctx.drawImage(this.textbox, 0, 0, Sys.gameport.canvas.width, Sys.gameport.canvas.height);
    };

    // UI Room frame image
    if (this.roomframe.complete) {
      Sys.gameport.ctx.drawImage(this.roomframe, 0, 0, Sys.gameport.canvas.width, Sys.gameport.canvas.height);
    };
    // UI frame image
    if (this.frame.complete) {
      Sys.gameport.ctx.drawImage(this.frame, 0, 0, Sys.gameport.canvas.width, Sys.gameport.canvas.height);
    };

    // UI Decorative growths image
    if (this.growths.complete) {
      Sys.gameport.ctx.drawImage(this.growths, 0, 0, Sys.gameport.canvas.width, Sys.gameport.canvas.height);
    };

  }
}