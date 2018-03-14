
function animateLine( canvas, from, to, time = 5000, props = { }, number_of_steps = 100 ) {
 
  let x_interval = (to.x - from.x) / number_of_steps;
  let y_interval = (to.y - from.y) / number_of_steps;
  let context = canvas.getContext('2d');
  for (let prop in props) {
    context[prop] = props[prop];
  }
  context.moveTo(from.x, from.y);
  let current_x = from.x;
  let current_y = from.y;
  let step = 0;
  let timer = setInterval(() => {
    step++;
    current_x += x_interval;
    current_y += y_interval;
    context.lineTo(current_x, current_y);
    context.stroke();
    if (step === number_of_steps) {
      clearInterval(timer);
    }
  }, time / number_of_steps);

}

