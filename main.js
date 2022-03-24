window.onscroll = function () {
    layers = document.querySelectorAll(".layer");
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var depth = layer.dataset.depth;
      var y = window.scrollY * depth * -1;
      layer.style.transform = "translate3d(0, " + y + "px, 0)";
    }
  };