

export class Users {
    
    constructor(
        public usuarioid:string,
        public nombre:string,
        public apellidos:string,
        public username:string,
        public password:string,
        public isActive:boolean,
        public tipoUsuarioId:string,
        public createdAt:string,
    ){
   }

}
