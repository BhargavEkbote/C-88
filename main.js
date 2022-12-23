var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });

}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        player_object.scaleToWidth(block_image_width);
        player_object.scaleToHeight(block_image_height);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("P and SHIFT Pressed together");
        block_image_width = block_image_width+10;
        block_image_height = block_image_height+10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("M and SHIFT Pressed together");
        block_image_width = block_image_width-10;
        block_image_height = block_image_height-10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if(keyPressed == '38' || keyPressed == '87'){
        up();
        console.log("UP");

    }
    if(keyPressed == '40' || keyPressed == '83'){
        down();
        console.log("DOWN");

    }
    if(keyPressed == '37' || keyPressed == '65'){
        left();
        console.log("LEFT");

    }
    if(keyPressed == '39' || keyPressed == '68'){
        right();
        console.log("RIGHT");

    }
    if(keyPressed == '66'){
        new_image('wall.jpg');
        console.log("B");

    }
    if(keyPressed == '71'){
        new_image('ground.png');
        console.log("G");

    }
    if(keyPressed == '79'){
        new_image('light_green.png');
        console.log("O");

    }
    if(keyPressed == '86'){
        new_image('trunk.jpg');
        console.log("V");

    }
    if(keyPressed == '78'){
        new_image('roof.jpg');
        console.log("N");

    }
    if(keyPressed == '89'){
        new_image('yellow_wall.png');
        console.log("Y");

    }
    if(keyPressed == '82'){
        new_image('dark_green.png');
        console.log("R");

    }
    if(keyPressed == '85'){
        new_image('unique.png');
        console.log("U");

    }
    if(keyPressed == '67'){
        new_image('stone.png');
        console.log("C");

    }
}

function up(){
    if(player_y>=0){
        player_y = player_y - block_image_height;
        console.log("Block image height = "+block_image_height);
        console.log("When up arrow key is pressed, X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
        
    }
}

function down(){
    if(player_y<=500){
        player_y = player_y + block_image_height;
        console.log("Block image height = "+block_image_height);
        console.log("When down arrow key is pressed, X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x = player_x - block_image_width;
        console.log("Block image width = "+block_image_width);
        console.log("When left arrow key is pressed, X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x = player_x + block_image_width;
        console.log("Block image width = "+block_image_width);
        console.log("When right arrow key is pressed, X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
