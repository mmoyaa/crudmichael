
export class recetaproducto{

    constructor(
        public recetaProductoId:string,
        public productoId:string,
        public recetaId:string,
        public createAt:string,
        public updatedAt:string,
        public updatedByid:string,
        public isActive:boolean,
    ){}

}