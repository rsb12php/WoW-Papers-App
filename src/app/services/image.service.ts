// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorage } from '@angular/fire/storage';
// import { Usuario } from './models/usuario.model';
// import { Image } from './models/image.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ImageService {

//   constructor(
//     private afs:AngularFireStorage,
//     private af:AngularFirestore,
//   ) { }

//   getData(usuario:Usuario){
//     return this.af.collection('users').doc(usuario.uid).collection('uploads').valueChanges()
//   }

//   addUpload(usuario:Usuario, image:Image){
//     return this.afs.ref(`users/${usuario.uid}/${new Date()}`).put(image.foto).then((rs)=>{
//       rs.ref.getDownloadURL().then((fotoUrl)=>{
//         this.af.collection('users').doc(usuario.uid).collection('uploads').add({
//           nome:image.nome,
//           descricao:image.descricao,
//           foto:fotoUrl,
//           dtCadastro: new Date()
//         })
//       })
//     })
//   }
// }
