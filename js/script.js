var vehicles = [
  "Dacia",
  "UAZ",
  "Boat",
  "Buggy"
];

var dropspots = [
  "Pochinki",
  "Mylta",
  "Mylta Powerplant",
  "Yasnaya"
];

var weapons = [
  "Melee",
  "Assault rifles",
  "Snipers",
  "Shotguns",
  "Pistols",
  "Vehicle",
  "Grenades"
];

$(document).ready(function() {
  $("#dropText").html(dropspots[Math.floor(Math.random() * dropspots.length)]);
  $("#weaponText").html(weapons[Math.floor(Math.random() * weapons.length)]);
  $("#vehicleText").html(vehicles[Math.floor(Math.random() * vehicles.length)]);
});
