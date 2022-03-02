const maps={
    // Demo:{
    //     lowerSrc:"images/maps/MainCharacterhouseLOWER.png",
    //     upperSrc:"images/maps/MainCharacterhouseUPPER.png",
    //     gameObjects:{
    //         hero:new Character("hero",5,5),
    //         npc1:new Character("npc1",7,7),
    //         npc2:new Character("npc2",8,8)  
    //     },
    //     walls:["1,3","1,5","1,6","1,7","1,8","1,10","2,3","3,3","4,3","5,3","6,3","8,3","9,3","10,3","13,5","13,6","13,7","13,8","13,9",,"0,4","0,5","0,6","0,7","0,8","0,9","0,10","1,11","2,11","3,11","4,11","5,12","7,12","8,12","9,12","10,12","11,12","12,12",],
    //     defaultMovement:{
    //         npc1:["up","down"]
    //     },
    //     dialogues:{
    //         npc1:{
    //             msg:"Imma crush this table"
    //         },
    //         npc2:{
    //             ask:"Isnt that girl azy-cra?",
    //             yes:"HAHA looks like i am not alone whos annoyed by her!",
    //             no:"You seem to have a same idiocity! Go away!"
    //         }
    //     },
    //     doors:{
    //         "6,12":"Factory",
    //     },
    // },
    mcHouse:{
        lowerSrc:"images/maps/MainCharacterhouseLOWER.png",
        upperSrc:"images/maps/MainCharacterhouseUPPER.png",
        gameObjects:{
            hero:new Character("hero",1,3),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        walls:['2,3','1,3','3,3','4,3','5,3','6,3','7,3','8,3','9,3','9,4','10,3','11,3','12,3','13,3','13,4','13,5','13,6','12,6','11,6','10,6','10,7','10,8','11,8','12,8','13,8','13,9','13,10','13,11','13,12','12,12','11,12','10,12','9,12','8,12','7,12','7,13','6,13','5,13','5,12','4,12','3,12','2,12','1,12','1,11','2,11','3,11','4,11','0,11','0,10','0,9','0,8','0,7','0,6','0,5','0,4','0,3','1,5','1,6','1,7','1,8','1,9'],
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
            "6,12":"lunaShop",
        },
    },
    lunaShop:{
        lowerSrc:"images/maps/lunaShopLower.png",
        upperSrc:"images/maps/lunaShopUpper.png",
        gameObjects:{
            hero:new Character("hero",1,3),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        walls:['2,3','2,4','2,5','2,6','3,6','4,6','5,6','6,6','7,6','8,6','9,6','9,5','9,4','9,3','8,3','7,3','6,3','5,3','4,3','3,3','1,3','10,3','11,3','11,4','11,5','11,6','11,7','11,8','11,9','11,10','11,11','11,12','10,12','9,12','8,12','7,12','6,12','6,13','5,13','4,13','4,12','3,12','2,12','1,12','0,12','0,11','0,10','0,9','0,8','0,7','0,6','0,5','0,4','0,3','3,8','3,9','3,10','4,10','4,9','4,8','7,8','7,9','8,9','8,8'],
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
            // "6,12":"mcHouse",
        },
    },
    scienceLab:{
        lowerSrc:"images/maps/ScienceLabLower.png",
        upperSrc:"images/maps/ScienceLabUpper.png",
        gameObjects:{
            hero:new Character("hero",1,3),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        walls:['0,3','0,4','0,5','0,6','0,7','2,7','3,7','4,7','5,7','5,8','5,9','4,9','3,9','2,9','2,10','3,10','4,10','5,10','7,10','8,10','9,10','10,10','10,9','10,8','9,8','2,3','3,3','4,3','5,3','6,3','6,4','6,5','7,3','8,3','9,3','9,4','10,4','11,4','12,4','13,4','13,5','13,6','13,7','12,7','11,7','10,7','9,7','8,7','7,7','13,8','13,9','13,10','13,11','13,12','12,12','11,12','10,12','9,12','8,12','7,12','7,13','6,13','5,13','5,12','4,12','3,12','2,12','1,12','0,12','0,11','0,10','0,9','0,8','1,5','2,5','3,5','4,5','0,2','0,1','0,0','1,0','2,0','2,1','2,2','1,2','1,3'],
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
            // "6,12":"mcHouse",
        },
    },
    bodkinFarm:{
        lowerSrc:"images/maps/bodkinFarmLower.png",
        upperSrc:"images/maps/bodkinFarmUpper.png",
        gameObjects:{
            hero:new Character("hero",10,10),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        walls:['2,3','3,3','4,3','5,3','5,4','5,5','5,6','5,7','6,7','6,6','7,6','8,6','9,6','10,6','11,6','12,6','13,6','14,6','14,7','15,7','15,6','16,6','17,6','18,6','18,5','19,5','20,5','20,6','21,6','22,6','23,6','23,7','24,7','24,6','25,6','26,6','27,6','28,6','29,6','30,6','31,6','32,6','32,7','33,7','33,6','34,6','35,6','35,7','35,8','35,9','35,10','35,11','35,12','35,13','35,14','35,15','35,16','35,17','35,18','35,19','35,20','35,21','35,22','35,23','35,24','35,25','35,26','35,27','34,27','33,27','32,27','31,27','30,27','29,27','28,27','27,27','26,27','25,27','24,27','23,27','22,27','21,27','20,27','19,27','18,27','17,27','16,27','15,27','14,27','13,27','12,27','11,27','10,27','9,27','8,27','7,27','6,27','5,27','4,27','4,26','4,25','4,24','4,23','4,22','4,21','4,20','4,19','4,18','4,17','4,16','4,15','4,14','4,13','4,12','4,11','4,10','4,9','4,8','4,7','4,6','3,6','3,7','3,8','3,9','3,10','3,11','3,12','3,13','17,5','16,5','32,12','30,12','31,12','9,12','8,12','7,12','30,25','32,25','31,25','9,25','8,25','7,25','29,12','29,25'],
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
            // "6,12":"mcHouse",
        },
    },
    bodkinFactory:{
        lowerSrc:"images/maps/bodkinFactoryLower.png",
        upperSrc:"images/maps/bodkinFactoryUpper.png",
        gameObjects:{
            hero:new Character("hero",10,10),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        // remove 3,9
        walls:['1,4','2,4','2,5','1,5','1,6','2,6','3,6','4,6','5,6','6,6','7,6','8,6','9,6','10,6','4,5','3,5','3,4','4,4','4,3','5,3','6,3','7,3','7,4','8,4','8,3','9,3','10,3','11,3','12,3','12,4','12,2','13,2','14,2','14,3','14,4','15,4','16,4','17,4','18,4','18,5','18,6','18,7','18,8','18,9','18,10','18,11','17,11','16,11','15,11','15,12','14,11','14,12','13,12','12,12','11,12','10,12','10,13','9,13','8,13','8,12','7,12','6,12','5,12','5,11','4,11','4,10','3,10','2,10','2,9','1,9','0,9','0,8','0,7','0,6','0,5','0,4','13,3','15,3','16,3','17,3','18,3','18,12'],
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
            // "6,12":"mcHouse",
        },
    },
    factoryFrontSide:{
        lowerSrc:"images/maps/factoryFrontSideLower.png",
        upperSrc:"images/maps/factoryFrontSideUpper.png",
        gameObjects:{
            hero:new Character("hero",24,24),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        walls:['1,4','1,5','1,6','1,7','1,8','1,9','1,10','1,11','1,12','2,12','3,12','4,12','4,13','4,14','4,15','4,16','4,17','4,18','5,18','6,18','6,17','7,17','8,17','9,17','10,17','11,17','12,17','13,17','14,17','14,18','15,18','15,17','16,17','17,17','18,17','18,16','18,15','19,15','20,15','20,16','20,17','21,17','22,17','23,17','23,18','24,18','24,17','25,17','26,17','27,17','28,17','29,17','30,17','31,17','32,17','32,18','33,18','33,17','34,17','35,17','35,18','35,19','35,20','35,21','35,22','35,23','35,24','35,25','35,26','34,26','33,26','32,26','31,26','30,26','29,26','28,26','27,26','26,26','25,26','24,26','23,26','22,26','21,26','20,26','19,26','18,26','17,26','16,26','15,26','14,26','13,26','12,26','11,26','10,26','9,26','8,26','7,26','6,26','5,26','4,26','4,25','4,24','4,23','4,22','4,21','4,20','4,19','6,20','6,21','6,22','6,23','7,23','8,23','9,23','10,23','11,23','12,23','13,23','13,22','13,21','13,20','14,20','14,21','14,22','14,23','25,23','25,22','25,21','25,20','28,21','29,21','30,21','32,21','32,20','32,22','32,23','10,21','9,21'],
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
            "6,12":"mcHouse",
        },
    },
    // tatoVillage:{
    //     lowerSrc:"images/maps/tatoVillageLower.png",
    //     upperSrc:"images/maps/tatoVillageUpper.png",
    //     gameObjects:{
    //         hero:new Character("hero",1,3),
    //         npc1:new Character("npc1",7,7),
    //         npc2:new Character("npc2",8,8)  
    //     },
    //     walls:[],
    //     defaultMovement:{
    //         npc1:["up","down"]
    //     },
    //     dialogues:{
    //         npc1:{
    //             msg:"Imma crush this table"
    //         },
    //         npc2:{
    //             ask:"Isnt that girl azy-cra?",
    //             yes:"HAHA looks like i am not alone whos annoyed by her!",
    //             no:"You seem to have a same idiocity! Go away!"
    //         }
    //     },
    //     doors:{
    //         "6,12":"mcHouse",
    //     },
    // },
}