import {Country} from './enums';
import {ISportsman, IHitParams, IBetterSprortsman} from './interfaces';


class Fighter implements ISportsman{
    id: number;
    name: string;
    age: number;
    private health: number;
    country: Country;
    power: number; 
    
    constructor(name:string, power:number, health:number) {
        
        this.name = name;
        this.power = power;
        this.health = health;
    } 

    getHealth(){
        return this.health;
    }

    setDamage(damage:number){
        this.health -= damage;
        document.write(`<p>health: ${this.health}</p>`);
    }
 
    hit(params:IHitParams) {
          const {
            enemy,
            point = 4
        } = params;
    
        let damage = point * enemy.power;
        enemy.setDamage(damage);
    }
    
}

class ImprovedFighter extends Fighter {
    constructor(name:string, power:number, health:number) {
        super(name, power, health);
    }
    doubleHit(params:IHitParams) {
        const {
            enemy,
            point = 4
        } = params;
        super.hit({
            enemy,
            point: point * 2
        });
    }
}


const fight = (fighters: Array<ISportsman>, ...points:number[]) => {
    const firstHit = Math.floor(Math.random() * 2);
    const secondHit = firstHit ? 0 : 1;
    while (true) {
        const point = points.pop();
        let fighter1 = fighters[firstHit] as IBetterSprortsman;
        let fighter2 = fighters[secondHit] as IBetterSprortsman;


        fighter1.doubleHit ?
            fighter1.doubleHit({
                enemy: fighter2,
                point
            }) :
            fighter1.hit({
                enemy: fighter2,
                point
            });

        let health1:number = fighter2.getHealth();
        let health2:number = fighter1.getHealth();

        if (health1 <= 0) {
            document.write(`<h2>${fighter1.name} has won</h2>`);
            break;
        }
        fighter2.doubleHit ?
            fighter2.doubleHit({
                enemy: fighter1,
                point
            }) :
            fighter2.hit({
                enemy: fighter1,
                point
            });
        if (health2 <= 0) {
            document.write(`<h2>${fighter2.name} has won</h2>`);
            break;
        }
    }
};

let fighterA = new Fighter("A", 10, 100);
let fighterB = new ImprovedFighter("B", 5, 100);


fight([fighterA, fighterB], 7, 10);
