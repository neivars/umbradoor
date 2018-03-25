/* ============================================================================
  SETUP
============================================================================ */
// Global variable to hold game fixture
let Sys = {}

// Set up gameport
Sys.gameport = new Gameport();
Sys.gameport.affix();

// Set up ui elements
Sys.ui = new UI();


// Main game loop
function main()
{
  // Renders ui for now only
  Sys.ui.render();

  requestAnimationFrame(main);
}

main();