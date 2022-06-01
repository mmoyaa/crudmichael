

export class Products{

    constructor(
        public productoId:string,
        public nombre:string,
        public proveedorId:string,
        public stock:number,
        public ultimaCompra:string,
        public tipoProductoId:string,
        public isActive:boolean,
    ){}

}