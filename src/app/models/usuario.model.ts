export class Usuario{
    uid:string
    nome:string
    email:string
    senha:string
    foto: File | string
    dtCadastro:Date

    

constructor(init?: Partial<Usuario>) {
    Object.assign(this, init);
    }



}