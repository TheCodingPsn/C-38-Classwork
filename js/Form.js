class Form{

    constructor(){
        this.title = createElement('h2');        
        this.input= createInput("Name");
        this.button = createButton("Start Game");
        this.greeting = createElement('h3')
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

    // DOM - document object model- written html - this will elements
    //form - so that player can register themselves
    //this form will have button, input box


    display(){

    
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50,0);

        //create a input box
        
        this.input.position(displayWidth/2 - 50, displayHeight/2-80);   
        this.button.position(displayWidth/2 +30, displayHeight/2);


        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            
            myPlayerCount += 1 ;//1 2
            player.index = myPlayerCount;

            //we will call the function updatename function in the Player class
            player.update();//this will player 

            //also call update playercount function in Player class
            player.updatePlayerCount(myPlayerCount);

            this.greeting.html("Hello "+ player.name + ", Welcome to the Car racing game!")
            this.greeting.position(displayWidth/2 - 50,displayHeight/4);

    });


 }


}


 


 