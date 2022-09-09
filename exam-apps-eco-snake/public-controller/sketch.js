const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

function setup() {
    frameRate(16);
    createCanvas(windowWidth, windowHeight);

    arriba = createButton('arriba');
    arriba.position(windowWidth / 2, windowHeight / 3, 50, 50);
    arriba.mousePressed(windowWidth / 2, windowHeight / 3);
    
    abajo = createButton('abajo');
    abajo.position(windowWidth / 2, windowHeight / 1.5, 50, 50);
    abajo.mousePressed(windowWidth / 2, windowHeight / 1.5);

    izquierda = createButton('izquierda');
    izquierda.position(windowWidth / 3, windowHeight / 2, 50, 50);
    izquierda.mousePressed(windowWidth / 3, windowHeight / 2);

    derecha = createButton('derecha');
    derecha.position(windowWidth / 1.5, windowHeight / 2, 50, 90);
    derecha.mousePressed(windowWidth / 1.5, windowHeight / 2);
}

function draw() {
    background(0);
    ellipse(windowWidth / 2, windowHeight / 3, 50, 50);
    ellipse(windowWidth / 2, windowHeight / 1.5, 50, 50);
    ellipse(windowWidth / 1.5, windowHeight / 2, 50, 50);
    ellipse(windowWidth / 3, windowHeight / 2, 50, 50);


    movementButton('UP', windowWidth / 2, windowHeight / 3);
    movementButton('DOWN', windowWidth / 2, windowHeight / 1.5);
    movementButton('RIGHT', windowWidth / 1.5, windowHeight / 2);
    movementButton('LEFT', windowWidth / 3, windowHeight / 2);
}



/*___________________________________________

1) Create a function that includes the socket method to emit the directions
_____________________________________________ */

//Se crea un emit en el cual vamos a transmitir al display el movimiento, vamos a poner direcciones de llamado
// y emitiremos lo que son las direcciones del botón

io.on("directions", (socket) => {
    socket.emit(movementButton());
  });
