// ARRAY VISUALIZER SCALE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [60, 70, 80, 50, 40, 90, 100, 30, 45, 75, 40, 80];
let max = 100; // myArray values should be b/t 0 and max


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = myArray[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

