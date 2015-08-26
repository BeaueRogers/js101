var basicCarModule = {

  color: "blue",
  size: "sedan",

  options: {
    sunRoof: true,
    racingStripes: false,
    spoiler: false,
    leatherSeats: true,
    heatedSeats: true,
    underLighting: true
  },

  setSpoilerOption: function (spoiler) {
    this.options.spoiler = spoiler;
  },

  setColor: function (color) {
    this.color = color;
  },

  setSize: function (size) {
    this.size = size;
  },

  setOptions: function (options) {
    this.options = options;
  }

};


console.log('basicCarModule', basicCarModule);

basicCarModule.setColor("green");

console.log('basicCarModule', basicCarModule);

basicCarModule.setSize("minivan");

console.log('basicCarModule', basicCarModule);


