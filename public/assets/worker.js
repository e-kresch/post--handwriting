importScripts("model.min.js");

var penState, x, y, dx, dy;
var model_x, model_s, model_z;
var temperature = 0.65;

restart();

onmessage = function(e) {
  if (e.data.key == "temperature") temperature = e.data.value;
  if (e.data.key === "step") step();
}

function restart() {
  x = 0;
  y = 0;
  dx = 0;
  dy = 0;
  penState = 0;

  model_x = Model.random_input();
  model_s = Model.random_state();
}

function step() {
  model_s = Model.update(model_x, model_s);
  model_z = Model.get_mixture_coef(model_s);
  model_x = Model.sample(model_z, temperature);
  dx = model_x.get(0);
  dy = model_x.get(1);
  penState = model_x.get(2);



  postMessage([dx, dy, penState, x, y]);
  x += dx;
  y += dy;
  if (x > 150) {
    restart();
  }
}
