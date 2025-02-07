$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 220, 200, 25, "white");
    createPlatform(0, 420, 800, 25, "orange");
    createPlatform(1100, 450, 500, 25, "blue");
    createPlatform(55, 200, 500, 25, "red");
    createPlatform(0, 650, 800, 25, "yellow");
    createPlatform(950, 550, 80, 25, "white");
    createPlatform(1025, 425, 8, 150, "white");
    createPlatform(950, 350, 80, 25, "black");
    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 300);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("max", 100, 70);


    
    // TODO 4 - Create Cannons

    createCannon("top", 200, 1000);
    createCannon("right", 300, 1000);
    createCannon("right", 800, 1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
