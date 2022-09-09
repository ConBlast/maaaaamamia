const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

let character = {
    x: 0,
    y: 0
};
let whiteMouse = {
    x: 50,
    y: 50
};
let speed = 10;

let positions = 0;

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    character.x = windowWidth / 2;
    character.y = windowHeight / 2;

    setupCondition1();
}

function draw() {
    background(0, 50);
    textSize(64);
    text('🐍', character.x - 25, character.y);
    textSize(24);
    text('🐁', whiteMouse.x, whiteMouse.y);
    eatsMouse();
}


function eatsMouse() {
    if (dist(character.x, character.y, whiteMouse.x, whiteMouse.y) < 50) {
        putMouseRandomPosition();
    }
}

function putMouseRandomPosition() {
    whiteMouse.x = random(50, windowWidth - 50);
    whiteMouse.y = random(50, windowHeight - 50);
}

/*___________________________________________

1) Include the socket method to listen to events and change the character position.
You may want to use a Switch structure to listen for up, down, right and left cases.

switch (movement) {
    case 1:
        x+1;
        break
    case 2:
        x-1;
        break
    case 3:
        y+1;
    case 4
        y-1;

    default:
        break;
}
_____________________________________________ */

//Las direcciones las escucha el servidor, tiene que recibir las posiciones
socket.on("directions", (positions) => {
    switch (positions) {
        case 1:
            character.x+3
            break;
            
        case 2:
            character.x-3
            break;

        case 3:
            character.y+3
            break;

        case 4:
            character.y-3
            break;
        default:
            break;
    }
    
  });


  function setupCondition1() {
    if (death) {
        character.y + character.x == whiteMouse.y + whiteMouse.x
    } 
    eatsMouse()
  }



/*___________________________________________

2) Include the fetch method to post each time the snake eats a mouse
_____________________________________________ */

