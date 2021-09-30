export class Atendimento{
    constructor(
        public id?:number,
        public nome?:string,
        public prioridade?:string,
        public atendido?: boolean,
        public status?:boolean
    ) {

    }
}