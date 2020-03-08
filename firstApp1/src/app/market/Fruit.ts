export enum Seasons{summer, winter ,allYear}
export class Fruit
 {
    name:String
    color:String
    image_path:String
    season:Seasons 
    ischeked:boolean=false
    constructor(name, color,image_path,season) 
    { this.name=name;
    this.color=color;
    this.image_path=image_path;
    this.season=season;
    }
 }