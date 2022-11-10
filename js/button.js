class Button {
    constructor(buttonText, positionX, positionY, buttonWidth, buttonHeight, backgroundColour, fontSize) {
        this.button;
        this.buttonText = buttonText;
        this.positionX = positionX;
        this.positionY = positionY;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.backgroundColour = backgroundColour;
        this.fontSize = fontSize;
    }

    buttonSetUp(clickHandler) {
        this.button = createButton(this.buttonText);
        this.button.position(this.positionX, this.positionY);
        this.button.style("width", this.buttonWidth);

        //if a font size has been specified when instancing the class, then the font size will be set to that size
        //other wise it will be the default size
        if(this.fontSize){
            this.button.style("font-size",  this.fontSize);
        }

        this.button.style("border-radius", "20px")
        this.button.style("height", this.buttonHeight);
        this.button.style("background-color", this.backgroundColour)
        this.button.style("color", "white")
        this.button.style("box-shadow", "5px 10px 15px black")

        //set the mousePressed method to the passed in parameter- clickHandler, which will be the button clicked functions
        this.button.mousePressed(clickHandler);
        this.setOnHover()
    }

    hideButton() {
        this.button.hide();
    }

    showButton(){
        this.button.show();
    }
      
    setOnHover(){
        this.button.mouseOver(()=>{this.button.style('cursor', 'pointer');})
    }
}