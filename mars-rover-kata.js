// Rover Object Goes Here
// ======================
const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]
  };
  
// ======================

// Turn left:
function turnLeft(rover){
    
    console.log("turnLeft was called!");
    
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
      default:
        console.log("Wrong input!");
    }
    console.log(`New rover direction: ${rover.direction}`);
    }
  
  // Turn right:
  function turnRight(rover){
    
    console.log("turnRight was called!");
    
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "N";
        break;
      default:
        console.log("Invalid input!");
    }
    console.log(`New rover direction: ${rover.direction}`);
  }
  
    // Move forward :
  function moveForward(rover){
    
    console.log("moveForward was called");
    
    if ((rover.direction === "N" && rover.y === 0) || (rover.direction === "S" && rover.y === 9) || (rover.direction === "W" && rover.x === 0) || (rover.direction === "E" && rover.x === 9)) {
        
      console.log("Can't move rover in that direction.");
      
      } else {
        switch (rover.direction) {
              case "N":
                rover.y--;
                break;
              case "S":
                rover.y++;
                break;
              case "W":
                rover.x--;
                break;
              case "E":
                rover.x++;
                break;
            }
        
        let newPosition = {x: rover.x, y: rover.y};
        rover.travelLog.push(newPosition);
        
        console.log(`Rover new position is x: ${rover.x} y: ${rover.y}`);
      }
  }
  
  function moveBackward(rover){
    
    console.log("moveBackward was called");
    
    if ((rover.direction === "N" && rover.y === 9) || (rover.direction === "S" && rover.y === 0) || (rover.direction === "W" && rover.x === 9) || (rover.direction === "E" && rover.x === 0)) {
        
      console.log("Can't move rover in that direction.");
      
      } else {
        switch (rover.direction) {
              case "N":
                rover.y++;
                break;
              case "S":
                rover.y--;
                break;
              case "W":
                rover.x++;
                break;
              case "E":
                rover.x--;
                break;
            }
        
        let newPosition = {x: rover.x, y: rover.y};
        rover.travelLog.push(newPosition);
        
        console.log(`Rover new position is x: ${rover.x} y: ${rover.y}`);
      }
  }
  
  // commands function
  function command(rover, orders) {
    
    for ( let i=0 ; i < orders.length ; i++ ) {
     
      let order = orders[i];
      
      if ((order === "f" ) || (order === "l") || (order === "r") || (order === "b")) {
        
        switch(order) {
          case "f":
            moveForward(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
          case "r":
            turnRight(rover);
            break;
          case "b":
            moveBackward(rover);
            break;
        }
      }
    }
    console.log(rover.travelLog);
  }
  
  // testing:
  command(rover, "rfzilb");