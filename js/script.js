var vehicles = [
  "Dacia",
  "UAZ",
  "Boat",
  "Buggy",
  "Bike"
];

var dropspots = [
  "Pochinki",
  "Mylta",
  "Mylta Power",
  "Yasnaya Polyana",
  "Stalber",
  "Georgopol",
  "Gatka",
  "Lipovka",
  "Rozhok",
  "Primorsk",
  "Sosnovka Island",
  "Sosnovka Military Base",
  "Novorepnoye",
  "Severny",
  "Zharki"
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

var playstyles = [
  "Aggresive",
  "Defensive",
  "Stealth",
  "Hug the woods",
  "YOLO",
  "Top Ten Tryhard"
];

$(document).ready(function() {
  $("#dropText").html(dropspots[Math.floor(Math.random() * dropspots.length)]);
  $("#weaponText").html(weapons[Math.floor(Math.random() * weapons.length)]);
  $("#vehicleText").html(vehicles[Math.floor(Math.random() * vehicles.length)]);
  $("#playstyleText").html(playstyles[Math.floor(Math.random() * playstyles.length)]);
});
