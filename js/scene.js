function loadScenePics() {
    testAlley = loadImage("assets/img/level_backgrounds/alley_scene1.png");
    aircon = loadImage("assets/img/level_backgrounds/components/aircon.png");
    bgWstuff = loadImage("assets/img/level_backgrounds/components/alley_background_graffiti_pipes.png");
    bgWOstuff = loadImage("assets/img/level_backgrounds/components/alley_background_only.png");
    cloud1 = loadImage("assets/img/level_backgrounds/components/cloud1.png");
    cloud2 = loadImage("assets/img/level_backgrounds/components/cloud2.png");
    cloud3 = loadImage("assets/img/level_backgrounds/components/cloud3.png");
    cloud4 = loadImage("assets/img/level_backgrounds/components/cloud4.png");
    cloud5 = loadImage("assets/img/level_backgrounds/components/cloud5.png");
    cloud6 = loadImage("assets/img/level_backgrounds/components/cloud6.png");
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

    clouds.push(cloud1, cloud2, cloud3, cloud4, cloud6);

    for(let i = 0; i < clouds.length; i++){
        image(clouds[i], cloudX, cloudY);        
    }


    if (x1 < -width) {
        x1 = width;
    }
    if (x2 < -width) {
        x2 = width;
    }
    if(cloudX < -20){
        cloudX = width;
    }
}