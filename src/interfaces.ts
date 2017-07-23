import {Country} from './enums';


interface IPerson {
    id: number;
    name: string;
    age: number;
    country: Country

    getHealth:() => number;
}

interface ISportsman extends IPerson{
    power: number;

    setDamage:(damage:number) => void;
    
    hit:(params: IHitParams) => void;

}

interface IBetterSprortsman extends ISportsman{

    doubleHit:(params: IHitParams) => void;
} 


interface IHitParams {
    enemy: ISportsman;
    point: number;
}




export {IPerson, ISportsman, IHitParams, IBetterSprortsman};