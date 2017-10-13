let paraGoat = document.getElementById('paraGoat');
let context = paraGoat.getContext('2d');

let width = paraGoat.width = window.innerWidth;
let height = paraGoat.height = window.innerHeight;

// position
let x = 0;
let y = 0;

// velocity;
let vx = 2;
let vy = 2;

// acceleration
let ax = -0.009;
let ay = .2;

// animate
function animate() {
  
  // clear paraGoat
  context.clearRect(0,0,width,height);
  
  //draw rectangle
  context.fillRect(x,y,20,20);
  
  // udpate velocity based in acceleration
  vx += ax;
  vy += ay;
  
  // update position with velocity
  x += vx;
  y += vy;
  
  requestAnimationFrame(animate);
  
  if ( y > height || x > width) {
    x = 0;
    y = 0;
    vx = 2;
    vy = 2;
  }
  
}

animate();

console.log("test")