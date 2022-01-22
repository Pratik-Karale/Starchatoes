const maps={
    Demo:{
        lowerSrc:"images/maps/DemoLower.png",
        upperSrc:"images/maps/DemoUpper.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        walls:["0,0"],
        defaultMovement:{
            npc1:["up","down"]
        },
        dialogues:{
            npc1:{
                msg:"Imma crush this table"
            },
            npc2:{
                ask:"Isnt that girl azy-cra?",
                yes:"HAHA looks like i am not alone whos annoyed by her!",
                no:"You seem to have a same idiocity! Go away!"
            }
        },
        doors:{
            "5,11":"Kitchen"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Kitchen:{
        lowerSrc:"images/maps/KitchenLower.png",
        upperSrc:"images/maps/KitchenUpper.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["0,0"],
        defaultMovement:{
            npc4:["right","left"]
        },
        dialogues:{
            npc4:{
                msg:"Imma crush this room"
            },
            npc5:{
                msg:"Welcome to the kitchen m8!"
            }
        },
        doors:{
            "5,11":"Kitchen"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
}