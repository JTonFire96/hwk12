class empire {
    constructor(name, type){
        this._name = name;
        this._type = type;
        this._shootingAbility = 0;
        this._forcePower = 100;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type; 
    }
    incrementshootingAbility() {
        this._shootingAbility++;
    }
    shootingRange(x){
        this._shootingAbility += x;
        console.log(`You have been taught the ways of the blaster. Abilites went up by ${this._shootingAbility}.`)
    }
    silthTraining(y){
        this._forcePower += y;
        console.log(`You have been trained in the ways of the darkness. Your powers have went up by ${this._forcePower}.`)
    }    

    }
    class stormTrooper extends empire {
        constructor(name, classes, type){
            super(name,type);
            this._classes= classes;
        
        }
        get classes(){
            return  this.classes       
        }
    }
var deathTrooper = new stormTrooper("XT-243", "Death Trooper","blaster master");
deathTrooper.incrementshootingAbility();
console.log(deathTrooper.name);
console.log(deathTrooper.classes);
console.log(deathTrooper.type);
deathTrooper.shootingRange(5);
deathTrooper.silthTraining(7);
