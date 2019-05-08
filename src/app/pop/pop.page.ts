import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image.model';
import { ImageService } from '../services/image.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.page.html',
  styleUrls: ['./pop.page.scss'],
})
export class PopPage implements OnInit {

  constructor(
    private imageS: ImageService 
  ) { }

  ngOnInit() { 
    let cont = 2 
    for (let i = 0; cont <= 2; i++){
      let image: Image = new Image()
      let usuario: Usuario = new Usuario()
      usuario.uid = "QH9pyTqcaGT5GWPne0KhoziLSbv1"
      image.nome= "KTL"
      image.descricao="KTL"
      this.imageS.addUpload(usuario, image)
    }
  }

}
