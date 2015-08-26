var Sedan = (function() {
  var color = "blue";
  var type = "sedan";

  return {
    manufacture_date: new Date(),
    getColor: function() {
      return color;
    },
    setColor: function(newColor) {
      color = newColor;
    },
    getType: function() {
      return type;
    },
    setType: function(newType) {
      type = newType;
    }
  };
})();

Sedan.setColor("Sky Blue Pink");
console.log(Sedan.getColor());

Sedan.setType("4 door coupe");
console.log(Sedan.getType());


