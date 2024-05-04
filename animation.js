// animation.js

(function() {
  const frames = ["  ___   ", " /   \\ ", "|  O  |", " \\___/ "];
  let frameIndex = 0;

  function displayFrame() {
    console.clear();
    console.log(frames[frameIndex]);
    frameIndex = (frameIndex + 1) % frames.length;
  }

  setInterval(displayFrame, 200);
})();
