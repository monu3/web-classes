let vehicles = ["car", "bike", "scooter", "train", "truck", "bus"];
vehicles[0] = "bicycle"; //assign value to an index
vehicles.push("Aroplane"); //assign value to last index
vehicles.unshift("helicopter"); //assign value to first index
console.log(vehicles.length);
///lenght of an array
vehicles.forEach((vehicle) => {
  console.log(vehicle);
});

let vehiclesCapital = vehicles.map((vehicle) => {
  return vehicle.toUpperCase();
});

console.log(vehicles);
let chanVeh = vehicles.splice(2, 2);
console.log(chanVeh);
vehicles.slice(2, -2);
console.log(vehicles);
console.log(vehicles.slice(0,-1));
