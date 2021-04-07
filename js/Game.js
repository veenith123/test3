class Game{
  constructor(){

  }
  getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
          gameState = data.val();
      })

  }

  update(state) {
      database.ref('/').update({
          gameState: state
      });
  }
  async start() {
          if (gameState === 0) {
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              
              if (playerCountRef.exists()) {
                  playerCount = playerCountRef.val();
                  player.getCount();
              }
              form = new Form()
              form.display();
            }
            gamebg1 = createSprite(770,430);
            gamebg1.scale = 1;
            gamebg1.addImage("gamebg1",gamebg1_img);

            sling1 = createSprite(80,100);
            sling1.scale = 0.50;
            sling1.addImage("sling1",sling1_img);

            sling2 = createSprite(67,80);
            sling2.scale = 0.45;
            sling2.addImage("sling2",sling2_img);

            sling3 = createSprite(74,67,14,9);
            sling3.scale = 1.7;
            sling3.addImage("sling3",sling3_img);

            slinga = createSprite(1465,100);
            slinga.scale = 0.50;
            slinga.addImage("slinga",slinga_img);

            slingb = createSprite(1452,80);
            slingb.scale = 0.45;
            slingb.addImage("sling1b",slingb_img);

            slingc = createSprite(1460,67,14,5);
            slingc.scale = 1.7;
            slingc.addImage("sling3",sling3_img);

            grass = createSprite(110,786);
            grass.scale = 0.4;
            grass.addImage("grass",grass_img);

            grass1 = createSprite(1428,786);
            grass1.scale = 0.4;
            grass1.addImage("grass1",grass1_img);

            board = createSprite(24,127);
            board.scale = 0.7;
            board.addImage("board",board_img);

            board1 = createSprite(1512,127);
            board1.scale = 0.7;
            board1.addImage("board1",board1_img);

            wood = createSprite(85,768);
            wood.scale = 0.3;
            wood.addImage("wood",wood_img);

            wood1 = createSprite(1451,768);
            wood1.scale = 0.3;
            wood1.addImage("wood1",wood1_img);

            blank = createSprite(-700,590,50,20);
            blank.addImage("blank",blank_img);
            blank.scale = 0.8;

            gamebg1.depth= blank.depth+1
            wood.depth = gamebg1.depth+10


            
        }
        play(){
            form.hide();
    
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              background(bg2_img);
              if (frameCount % 300 === 0) {
                tanks = createSprite(random(0, 85), 772);
                tanks.scale = 0.05;
                tanks.velocityX = 2;
                var rand = Math.round(random(1,7));
                switch(rand){
                    case 1: tanks.addImage("tank1",tank1_img);
                    break;
                    case 2: tanks.addImage("tank2", tank2_img);
                    break;
                    case 3: tanks.addImage("tank3", tank3_img);
                    break;
                    case 4: tanks.addImage("tank4", tank4_img);
                    break;
                    case 5: tanks.addImage("tank5", tank5_img);
                    break;
                    case 6: tanks.addImage("tank6", tank6_img);
                    break;
                }
            
                
                gamebg1.depth = tanks.depth+1
                blank.depth = tanks.depth+1
                wood.depth = tanks.depth+1
                wood1.depth = tanks.depth+1
                grass.depth = tanks.depth+1
                grass1.depth = tanks.depth+1

                tankGroup.add(tanks);
              }


            drawSprites();
        }
      }
    }
