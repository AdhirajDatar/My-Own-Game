class Game {
    constructor(){
        
    }

    getState(){
         var gameStateRef = database.ref('gameState')
         gameStateRef.on("value",function(data){
             gameState = data.val();
         })
    }

    writeState(state){
        database.ref('/').update({
            gameState: state
        })
    }


    start(){
        player = new Player();
        player.getCount()
        form = new Form();
       form.display();

       balloonGroup = new Group();
       arrowGroup = new Group()
       
       bow1=createSprite(15,height/2 , 10,100);
       bow1.addImage('bow1', bowLeftImg)
       bow2=createSprite(width-30,height/2 , 10 , 100);
       bow2.addImage('bow2', bowRightImg)
        bows=[bow1,bow2];

    


    }

    play(){
        form.hide();
        Player.getPlayerInfo()
        imageMode(CENTER)
        image(bkgMiddle,width/2, height/2, width, height )


        if(allPlayers!= undefined){
            var index = 0 ;
            for(var plr in allPlayers){       
                index = index+1       
                bows[index-1].y = height/2+allPlayers[plr].distance;
                textSize(40)
                fill("red")
                text("Player1 :" + allPlayers.player1.score,width-100,100);
                text("Player2 :" + allPlayers.player2.score,width-100,150);
            }
            
        }

        
        if(keyDown(UP_ARROW)  &&  player.index!=null){
            player.distance -=10
            player.update();

        }

        if(keyDown(DOWN_ARROW)  &&  player.index!=null){
            player.distance +=10
            player.update();

        }


        if(keyWentDown("space")){
            arrow = createSprite(45,65,60,10);
            arrow.x = bows[player.index-1].x
            arrow.y = bows[player.index-1].y
            if(player.index===1){
                arrow.velocityX = 8
            }
            if(player.index===2){
                arrow.velocityX = -8
            }
            arrow.lifetime = width/8;
            arrowGroup.add(arrow);
        }

        this.spawnBalloon();
        this.burstBallooon();
                     
        drawSprites();
    }

    spawnBalloon(){
        if(World.frameCount % 40 === 0){
            balloon = createSprite(random(50,width-50), 0);
            balloon.scale = 0.1;
            balloon.velocityY = 6;
            balloon.lifetime = height/6;
            balloonGroup.add(balloon);
            var selectBalloon = Math.round(random(1,4));
            switch(selectBalloon){
                case 1 : balloon.addImage( 'black', blackBalloon)
                break;
                case 2 : balloon.addImage( 'blue', blueBalloon)
                break;
                case 3 : balloon.addImage( 'green', greenBalloon)
                break;
                case 4 : balloon.addImage( 'lightBlue', lightBlueBalloon)
                break;
            }  
        }       
    }

    burstBallooon(){
        for (var i = 0; i<arrowGroup.length;i++ ) {
            for (var j = 0; j<balloonGroup.length; j++) {
                if( arrowGroup.get(i).isTouching(balloonGroup.get(j))){
                    arrowGroup.get(i).destroy();
                    balloonGroup.get(j).destroy();
                    player.score = player.score+1;
                    player.update()
                }
                
            }
        }
    
    }
}