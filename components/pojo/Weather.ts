export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
    constructor(id:number, main:string, description:string,icon:string){
        this.id = id;
        this.main = main;
        this.description = description;
        this.icon = icon;
    }
    
    public get currentWeather() : string {
        return `main: ${this.main} 
        description: ${this.description}`
    }
    
}