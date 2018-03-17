const carro = []
const karro = []
let i = 0
let vel = 1
let stepX = 300
let stepY = 20
let dir = 1
let laps = 0
var bg

function preload(){
    for (let i = 0; i < 4; i++)
    {
        carro[i] = loadImage(`img/car${i + 1}.png`)
        karro[i] = loadImage(`img/kar${i + 1}.png`)
    }
}

function setup(){
    bg = loadImage("img/pista.jpg")
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
}

function carros(){
    switch(dir){

        case 1:
            vel = vel+0.05
            if(stepX <= windowWidth*0.8)
            {
               image(carro[0], stepX += vel, stepY)
               image(karro[0], stepX += vel, stepY+50)
            }

            if(stepX >= windowWidth*0.8)
            {
                dir = 2
            }  
        break;

        case 2:
            if(stepY <= windowHeight*0.8)
            {
                // translate(stepX, stepY); 
                // rotate(radians(90));
                // image(carro1, 0, stepY+= vel)
               
                image(carro[1], stepX+50, stepY += vel)
                image(karro[1], stepX, stepY += vel)
                
            }

            if(stepY >= windowHeight*0.8)
            {
                dir = 3
            }
        break;

        case 3:
            image(carro[2], stepX -= vel, stepY+50)
            image(karro[2], stepX -= vel, stepY)

            if(stepX <= windowWidth*0.08)
            {
                dir = 4
            }
        break;

        case 4:
            image(carro[3], stepX-50, stepY -= vel)
            image(karro[3], stepX, stepY -= vel)

            if(stepX >= windowWidth*0.3 || stepY <= windowHeight*0.05)
            {
                dir = 1
                laps++
                vel=1
            }
            if(laps>=3)
            {
                vel=0
                text("Blanco ganador", windowWidth/2 -100, 100)
            }
        break;
    }
    // image(img[0], 270, 30, 60, 60)
    // image(img[1], 270+i, 80, 60, 60) 
    // if(i === img.length)
    // {
    //     i = 0
    // }
}

function draw(){
    background(bg)
    carros()

    fill('black')
    textSize(50)
    text("Vuelta: " + laps, windowWidth/2 -100, windowHeight/2 + 100)
}