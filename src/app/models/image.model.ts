export class Image{
    constructor(init?: Partial<Image>) {
        Object.assign(this, init);
    }

    nome:string
    descricao:string
    foto: File | string
    dtCdastro: Date
}