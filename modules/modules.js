var SolarSystem = (function() {
  var planet = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  var spaceCraft = [];
  var planetsVisited = 5;


  return {
    lastModified: Date.now(),
    getPlanets: function() {
      return planet;
    },
    getLanded: function() {
      return planetsVisited;
    },
    setLanded: function(landed) {
      planetsVisted = landed;
    },
    getSpacecraft: function() {
      return spaceCraft;
    },
    setSpacecraft: function(craft) {
      spaceCraft.push(craft);
    }

  };
})();
