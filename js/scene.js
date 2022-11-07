function loadScenePics() {
    testAlley = loadImage("assets/img/level_backgrounds/alley_scene1.png");
    aircon = loadImage("assets/img/level_backgrounds/components/aircon.png");
    bgWstuff = loadImage("assets/img/level_backgrounds/components/alley_background_graffiti_pipes.png");
    bgWOstuff = loadImage("assets/img/level_backgrounds/components/alley_background_only.png");
    clouds[0] = loadImage("assets/img/level_backgrounds/components/cloud1.png");
    clouds[1] = loadImage("assets/img/level_backgrounds/components/cloud2.png");
    clouds[2] = loadImage("assets/img/level_backgrounds/components/cloud3.png");
    clouds[3] = loadImage("assets/img/level_backgrounds/components/cloud4.png");
    cloud5 = loadImage("assets/img/level_backgrounds/components/cloud5.png");
    clouds[4] = loadImage("assets/img/level_backgrounds/components/cloud6.png");
    bgDoor = loadImage("assets/img/level_backgrounds/components/door.png");
    bgMoon = loadImage("assets/img/level_backgrounds/components/moon.png");
}

function testScene() {
    background(32, 42, 68);
    // image(testAlley,0,0);

    image(bgWOstuff, x1, 0, width, height);
    image(bgWstuff, x2, 0, width, height);
    fill(0);
    rect(0, 0, width, 75);
    image(bgMoon, width / 2, 0);
    image(bgDoor, x2 + (width - (width / 3)), height - (height / 3.5));
    image(aircon, x2 + (width/2 - 150), height / 3.5);



    for(let i = 0; i < clouds.length; i++){
        image(clouds[i], cloudX[i], cloudY[i]);
        cloudX[i] -= scrollSpeed/4;  
        if(cloudX[i] < -20){
            cloudX[i] = width;
        } 
    }


    if (x1 < -width) {
        x1 = width;
    }
    if (x2 < -width) {
        x2 = width;
    }

}