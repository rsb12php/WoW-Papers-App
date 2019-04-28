import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { Usuario } from '../models/usuario.model';

//@Author Ismael Alves
@Injectable()
export class LoginService {
  
  //token de autenticação
  IdToken:string
  
  constructor(
    private af:AngularFirestore,
    private afa:AngularFireAuth,
    private afs:AngularFireStorage
  ) { }

  //metodo de login
  async login(login:Usuario){
    return this.afa.auth.signInAndRetrieveDataWithEmailAndPassword(login.email, login.senha)
    .then(()=>{
      //pegar token e salvar no localStorage
      this.saveLocalStorage()
    })
    
  }

  //metodo de login facebook
  async loginFacebook(){
    return this.afa.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((user)=>{
      this.af.collection('usuarios').doc(user.user.uid).set({
        uid:user.user.uid,
        nome:user.user.displayName,
        foto:user.user.photoURL,
        email:user.user.email,
        dtCadastro:new Date()
      })
      //pegar token e salvar no localStorage
      this.saveLocalStorage()
    })
  }

  //metodo de login google
  async loginGoogle(){
    return this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user)=>{
      this.af.collection('usuarios').doc(user.user.uid).set({
        uid:user.user.uid,
        nome:user.user.displayName,
        foto:user.user.photoURL,
        email:user.user.email,
        dtCadastro:new Date()
      })
      //pegar token e salvar no localStorage
      this.saveLocalStorage()
    })
  }

  //metodo criar usuario
  async createUser(create:Usuario){
    return this.afa.auth.createUserWithEmailAndPassword(create.email, create.senha).then((user)=>{
     this.af.collection('usuarios').doc(user.user.uid).set({
       uid: user.user.uid,
       foto: '',
       email: create.email,
       nome:create.nome,
       dtCadastro:new Date()
     })
   })
  }  

  //metodo que edita usuario
  async editUser(usuario:Usuario, senha:string){
    return new Promise((resolve, reject)=>{
      this.afa.authState.subscribe((user)=>{
        user.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(user.email, senha))
        .then(()=>{
          user.updateEmail(usuario.email)
            .then(()=>{
              user.updatePassword(usuario.senha)
              this.afs.ref(`usuarios/${user.uid}`).put(usuario.foto).then((foto)=>{
                foto.ref.getDownloadURL().then((fotoUrl)=>{
                  this.af.collection("usuarios").doc(user.uid).update({
                    foto: fotoUrl,
                    email: usuario.email,
                    nome: usuario.nome,
                  })
                  resolve(user)
                })
              })
            })
        })
        .catch((e)=>{
          reject(e)
        })
      })
    })
  }

  //metodo logout
  async logout(uid:string){
    return this.afa.auth.signOut().then(()=>{
      this.af.collection('usuarios').doc(uid).update({
        online:false,
        dtLogin:new Date()
      })
      localStorage.clear()
    })
  }

  //pegar usuario logado
  async currentUser(){
    return new Promise((resolve, reject)=>{
      this.afa.authState.subscribe(
        user=>{
        this.af.collection('usuarios').doc(user.uid).valueChanges().subscribe((data)=>{
          resolve(data)
        })
        error=>{
          reject(error)
        }
      })
    })
  }

  //pegar token e salvar no localStorage
  saveLocalStorage(){
    this.afa.auth.currentUser.getIdToken().then((idToken:any)=>{
      this.IdToken = idToken
      localStorage.setItem('idToken', idToken)
    })
  }

  //resetar senha
  resetPassword(email:string){
    return this.afa.auth.sendPasswordResetEmail(email)
  }

  //tradução dos erros de login
  erroTratament(erro:firebase.FirebaseError):firebase.FirebaseError{
    if( erro.code == "auth/email-already-in-use" ){
      erro.message = "O endereço de e-mail já está sendo usado por outra conta."
    }else if(erro.code == "auth/invalid-email"){
      erro.message = "O endereço de e-mail está invalido"
    }else if(erro.code == "auth/wrong-password"){
      erro.message = "A senha é inválida ou o usuário é inválido."
    }else if (erro.code == "auth/user-not-found"){
      erro.message = "Não há registro do usuário. O usuário pode ter sido excluído."
    }else if (erro.code == "auth/user-disabled"){
      erro.message = "A conta do usuário foi desativada."
    }else if (erro.code = "auth/user-token-expired"){
      erro.message = "A credencial do usuário não é mais válida. O usuário deve entrar novamente."
    }else if (erro.code = "auth/argument-error"){
      erro.message = "reauthenticateWithPopup falhou: o primeiro argumento authProvider deve ser um provedor de Auth válido."
    }
    return erro
  }
}
