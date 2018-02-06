let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name){
    this.name = name;
    store.drivers.push(this);
    this.id = driverId++;
  }
  trips(){
    return store.trips.filter(trip => trip.driverId === this.id)
  }
  passengers(){
  let trips = this.trips() 
  return trips.map(trip => trip.passenger())
  }
}

class Passenger{
  constructor(name){
    this.name = name;
    store.passengers.push(this);
    this.id = passengerId++;
  }
  trips(){
    return store.trips.filter(trip => trip.passengerId === this.id)
  }
  drivers(){
    let trips = this.trips()
    return trips.map(trip => trip.driver())
  }
}

class Trip{
  constructor(driver, passenger){
    store.trips.push(this);
    this.id = tripId++;
    this.passengerId = passenger.id
    this.driverId = driver.id;
  }

  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }

  driver(){
    return store.drivers.find(driver => driver.id === this.driverId)
  }
}







