const maps={
    Demo:{
        lowerSrc:"images/maps/MainCharacterhouseLOWER.png",
        upperSrc:"images/maps/MainCharacterhouseUPPER.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        walls:["1,3","1,5","1,6","1,7","1,8","1,10","2,3","3,3","4,3","5,3","6,3","8,3","9,3","10,3","13,5","13,6","13,7","13,8","13,9",,"0,4","0,5","0,6","0,7","0,8","0,9","0,10","1,11","2,11","3,11","4,11","5,12","7,12","8,12","9,12","10,12","11,12","12,12",],
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
            "6,11":"Factory"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Factory:{
        lowerSrc:"images/maps/BossFactoryLOWER.png",
        upperSrc:"images/maps/BossFactoryUPPER.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,3","1,5","1,6","1,7","1,8","1,10","2,3","3,3","4,3","5,3","6,3","8,3","9,3","10,3","18,5","18,6","18,7","18,8","18,9",,"0,4","0,5","0,6","0,7","0,8","0,9","0,10","1,11","2,11","3,11","4,11","5,12","7,12","8,12","9,12","10,12","11,12","12,12","13,12","14,12","15,12","16,12",],
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
            "9,11":"Demo1"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Demo1:{
        lowerSrc:"images/maps/MainCharacterhouseLOWER.png",
        upperSrc:"images/maps/MainCharacterhouseUPPER.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc1:new Character("npc1",7,7),
            npc2:new Character("npc2",8,8)  
        },
        walls:["1,3","1,5","1,6","1,7","1,8","1,10","2,3","3,3","4,3","5,3","6,3","8,3","9,3","10,3","13,5","13,6","13,7","13,8","13,9",,"0,4","0,5","0,6","0,7","0,8","0,9","0,10","1,11","2,11","3,11","4,11","5,12","7,12","8,12","9,12","10,12","11,12","12,12",],
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
            "6,11":"Scientist"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Scientist:{
        lowerSrc:"images/maps/ScientistLower.png",
        upperSrc:"images/maps/ScientistUpper.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,3",,"2,3","3,3","4,3","5,3","6,3","8,3","9,3","10,3","13,5","13,6","13,7","13,8","13,9","13,10","0,4","0,5","0,6","0,7","0,8","0,9","0,10","1,12","2,12","3,12","4,12","5,12","7,12","8,12","9,12","10,12","11,12","12,12",],
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
            "6,11":"Meteore"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Meteore:{
        lowerSrc:"images/maps/MeteoriteLower.png",
        upperSrc:"images/maps/MeteoriteUpper.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,3",,"2,3","3,3","4,3","5,3","6,3","8,3","9,3","11,3","11,4","11,5","11,6","11,7","11,8","11,9","11,10","11,11","0,4","0,5","0,6","0,7","0,8","0,9","0,10","0,11","1,12","2,12","3,12","4,12","5,12","7,12","8,12","9,12","10,12","11,12","12,12",],
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
            "5,11":"Astronaut"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Astronaut:{
        lowerSrc:"images/maps/AstronautLOWER.png",
        upperSrc:"images/maps/AstronautUPPER..png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,3",,"2,3","3,3","4,3","5,3","6,3","8,3","9,3","11,3","11,4","11,5","11,6","11,7","11,8","11,9","11,10","11,11","0,4","0,5","0,6","0,7","0,8","0,9","0,10","0,11","1,12","2,12","3,12","4,12","5,12","7,12","8,12","9,12","10,12","11,12","12,12",],
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
            "5,11":"Witch"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Witch:{
        lowerSrc:"images/maps/WitchHouseLOWER.png",
        upperSrc:"images/maps/WitchHouseUPPER..png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,5","2,5","3,5","4,5","5,5","6,5","7,5","8,5","9,5","10,5","11,5","12,5","13,5","14,5","15,5","16,5","17,5","18,5","19,5","20,5","21,5","22,5","23,5","23,6","23,7","23,8","23,9","23,10","23,11","23,12","23,13","23,14","23,15","23,16","23,17","23,18","23,19","23,20","23,21","23,22","2,4","2,5","2,6","2,7","2,8","2,9","2,10","2,11","2,12","2,13","2,14","0,15","2,17","2,16","2,20","2,21","2,22","2,23",],
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
            "2,18":"Astronaut1",
            "2,19":"Astronaut1"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Astronaut1:{
        lowerSrc:"images/maps/AstronautLOWER.png",
        upperSrc:"images/maps/AstronautUPPER..png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,3",,"2,3","3,3","4,3","5,3","6,3","8,3","9,3","11,3","11,4","11,5","11,6","11,7","11,8","11,9","11,10","11,11","0,4","0,5","0,6","0,7","0,8","0,9","0,10","0,11","1,12","2,12","3,12","4,12","5,12","7,12","8,12","9,12","10,12","11,12","12,12",],
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
            "5,11":"Meteore1"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Meteore1:{
        lowerSrc:"images/maps/MeteoriteLower.png",
        upperSrc:"images/maps/MeteoriteUpper.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,3",,"2,3","3,3","4,3","5,3","6,3","8,3","9,3","11,3","11,4","11,5","11,6","11,7","11,8","11,9","11,10","11,11","0,4","0,5","0,6","0,7","0,8","0,9","0,10","0,11","1,12","2,12","3,12","4,12","5,12","7,12","8,12","9,12","10,12","11,12","12,12",],
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
            "5,11":"Factory1"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Factory1:{
        lowerSrc:"images/maps/BossFactoryLOWER.png",
        upperSrc:"images/maps/BossFactoryUPPER.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,3","1,5","1,6","1,7","1,8","1,10","2,3","3,3","4,3","5,3","6,3","8,3","9,3","10,3","18,5","18,6","18,7","18,8","18,9",,"0,4","0,5","0,6","0,7","0,8","0,9","0,10","1,11","2,11","3,11","4,11","5,12","7,12","8,12","9,12","10,12","11,12","12,12","13,12","14,12","15,12","16,12",],
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
            "13,4":"Battle"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
    Battle:{
        lowerSrc:"images/maps/FarmBacksideLower.png",
        upperSrc:"images/maps/FarmBacksideUpper.png",
        gameObjects:{
            hero:new Character("hero",5,5),
            npc4:new Character("npc4",7,7),
            npc5:new Character("npc5",8,8)  
        },
        walls:["1,5","2,5","3,5","4,5","5,5","6,5","7,5","8,5","9,5","10,5","11,5","12,5","13,5","14,5","15,5","16,5","17,5","18,5","19,5","20,5","21,5","22,5","35,5","35,6","35,7","35,8","35,9","35,10","35,11","35,12","35,13","35,14","35,15","35,16","35,17","35,18","35,19","35,20","35,21","35,22","35,23","35,24","35,25","35,26","35,27","35,28","4,4","4,5","4,6","4,7","4,8","4,9","4,10","4,11","4,12","4,13","4,14","4,15","2,17","2,16","2,20","2,21","2,22","2,23",],
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
            "13,4":"Battle"
        },
        // listenHeroAt:{
        //     npc2:[[8,9]]
        // }
    },
}