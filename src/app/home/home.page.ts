import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public teste01:string = 'Séries em Destaque';
  public teste02:string = 'Filmes Populares';
  public teste03:string = 'Desenhos Infanto Juvenis';
  public teste04:string = 'Animes Diversos';

  public wow01:Array<object> = [];
  public wow02:Array<object> = [];
  public wow03:Array<object> = [];
  public wow04:Array<object> = [];

  constructor(public navCtrl: NavController){

    // Series em Destaque
    this.wow01 = [
      {
        "nome" : "La Casa de Papel",
        "img" : "https://drive.google.com/uc?id=12FokVWYLdUitCfIg34Vg0wOQ1Ilbsivf",
        "title" : "Mais de 121 resultados...",
        
      },
      {
        "nome" : "Stranger Things",
        "img" : "https://drive.google.com/uc?id=1FvSaTkiamK_4AMa_hP6wIEgqGy-3Dpzv",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Doctor Who",
        "img" : "https://drive.google.com/uc?id=1wCbC0-X4OnbtfhUSrVrjhP2aNTr-tH4X",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Game of Thrones",
        "img" : "https://drive.google.com/uc?id=1HvpRVBZawwLKsmBgO4bf0yut9ntUNjeJ",
                "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Supernatural",
        "img" : "https://drive.google.com/uc?id=1-odj5jjxr3yT-7VYNenzmjFGpwSdfn3X",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "The Walking Dead",
        "img" : "https://drive.google.com/uc?id=1GEF-bv0IAv6rauRBuj4OPcedXy9208eK",
        "title" : "Mais de 121 resultados...",
      },
    ]

    // Filmes Populares
    this.wow02 = [
      {
        "nome" : "Avengers",
        "img" : "https://drive.google.com/uc?id=1EmWuQleu-CyvL0A7muemizkQ6PnHvqi-",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Harry Potter",
        "img" : "https://drive.google.com/uc?id=17i3R1TK2TxbkkLBZdZfFwcRWIUf36_84",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Star Wars",
        "img" : "https://drive.google.com/uc?id=1Bpcs5bBigMgPZp8Y733thMpul2fQQrk1",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "O Senhor dos Anéis",
        "img" : "https://drive.google.com/uc?id=1_QNpcPFMteWQpC5e3XPDXGVZvLgmVmhh",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Matrix",
        "img" : "https://drive.google.com/uc?id=1CvvAVkKCQZd6goC-GzEXRFEzwCouWctB",
        "title" : "Mais de 121 resultados...",
      },
    ]

    // Desenhos Infanto Juvenil
    this.wow03 = [
      {
        "nome" : "Hora de Aventura",
        "img" : "https://drive.google.com/uc?id=1R3qaEEMe6d5y4cqQfiS6gvlEul-5p0Kr",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Rick and Morty",
        "img" : "https://drive.google.com/uc?id=1i4fiIy83A-13V8x7i2sN7Oon7S4eELUo",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "O Incrível Mundo de Gumball",
        "img" : "https://drive.google.com/uc?id=1B11JiQ4d8JryqDq1GOyDRhCecBR7CjDt",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Futurama",
        "img" : "https://drive.google.com/uc?id=1vEhCsLrUf1Sm4n7b532lYEwAhDL4ULnr",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Star vs as Forças do Mal",
        "img" : "https://drive.google.com/uc?id=1pcTsAKHK8QCm6Mx00OemeCgqP7A0HLXK",
        "title" : "Mais de 121 resultados...",
      },
    ]

    // Animes Diversos
    this.wow04 = [
      {
        "nome" : "Naruto",
        "img" : "https://drive.google.com/uc?id=1ym_HwsVaRLFXg1UDlVKG54s7sqAHn1WT",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Pokemon",
        "img" : "https://drive.google.com/uc?id=1lcbQ8IvhP5Y2GLWTOKxduvsszOxw7phZ",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Dragon Ball",
        "img" : "https://drive.google.com/uc?id=1RaJ8nMBW5wyC7710Xe-4M_MuQX3x-gC-",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Death Note",
        "img" : "https://drive.google.com/uc?id=105e88CWhwhIwhyiz5CpQd9IresK_ziL5",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "One Piece",
        "img" : "https://drive.google.com/uc?id=1y04cTKrZXt5wabZM_QD6gQNGFfSIO8-D",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Yu-Gi-Oh! Duel Monsters",
        "img" : "https://drive.google.com/uc?id=1NMhR9CUBWJtsTtyldHcXybR6S5aNbBvj",
        "title" : "Mais de 121 resultados...",
      },
      {
        "nome" : "Shingeki no Kyojin",
        "img" : "https://drive.google.com/uc?id=12uG8DayMfNg2OO2_TvT3odzQZbKS9rqs",
        "title" : "Mais de 121 resultados...",
      },
    ]
  }
}
