export class Proveedor{

    constructor(
        public proveedorId:string,
        public nombre:string,
        public rut:string,
        public createAt:string,
        public isActive: boolean
    ){}
}