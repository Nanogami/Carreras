const Carro = function(){
    const img = []
    //let c1
    let i = 0
    var stepX = 0
    var stepY = 0


    function preload(){
        for (let i = 0; i < 4; i++)
        {
            img[i] = loadImage(`img/car${i + 1}.png`)
        }
    }

    function setup(){
       
        frameRate(20)
    }

    function draw(){

        stepX = stepX += 10
        

        image(img[0], 270, 30, 60, 60)
        image(img[1], 20 + stepX, 80, 60, 60)
        
        image(img[2], 270 + stepX, 80, 60, 60)

        if(stepX >= windowWidth*0.65)
        {
            stepY = stepY += 10
            background(bg);
            image(img[2], windowWidth*0.85, 80 + stepY, 60, 60)
            // push()
            // translate(600, 80);
            // rotate(radians(45));
            // image(img[2], 0, 0, 60, 60)
            // pop()
        }
            
        // if(i === img.length)
        // {
        //     i = 0
        // }
    }

    return(){
        draw,
    }
}}