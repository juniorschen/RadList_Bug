import { Component } from '@angular/core';
import { StackLayout, Enums } from '@nativescript/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  title = 'NativeScript';
  cnt = 3;
  private messageLayout: StackLayout;
  private successLayout: StackLayout;
  items: { desc: string, price: string, imageSrc: string }[] = [
    { desc: "Uma bela fatia de pão quentinho.", price: "UN: ", imageSrc: "https://imagens-revista.vivadecora.com.br/uploads/2020/04/como-fazer-pao-caseiro-facil.jpg" },
    { desc: "Cookies deliciosos saindo do forno", price: "UN:", imageSrc: "https://img.cybercook.com.br/receitas/38/cookies-crocantes-de-chocolate-1.jpeg" },
    { desc: "Surpreendente bolo de chocoate com uma calda incrivel", price: "UN:", imageSrc: "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg" },
    { desc: "It looked cool in the store.", price: "UN:", imageSrc: "https://imagens-revista.vivadecora.com.br/uploads/2020/04/como-fazer-pao-caseiro-facil.jpg" },
    { desc: "You'll need them once in the next ten years.sdaa", price: "UN:", imageSrc: "https://imagens-revista.vivadecora.com.br/uploads/2020/04/como-fazer-pao-caseiro-facil.jpg" },
    { desc: "Too bad you are too old to use it.", price: "UN:", imageSrc: "https://imagens-revista.vivadecora.com.br/uploads/2020/04/como-fazer-pao-caseiro-facil.jpg" },
    { desc: "Desperate times we live in.", price: "UN:", imageSrc: "https://imagens-revista.vivadecora.com.br/uploads/2020/04/como-fazer-pao-caseiro-facil.jpg" },
    { desc: "Mmmmm drinky.", price: "UN:", imageSrc: "https://imagens-revista.vivadecora.com.br/uploads/2020/04/como-fazer-pao-caseiro-facil.jpg" },
    { desc: "Also good.", price: "UN:", imageSrc: "https://imagens-revista.vivadecora.com.br/uploads/2020/04/como-fazer-pao-caseiro-facil.jpg" }
  ];

  tapMe() {
    this.cnt--;
    if (this.cnt === 0) {
      this.messageLayout
        .animate({
          translate: { x: 0, y: 150 },
          opacity: 0,
          duration: 400,
          curve: Enums.AnimationCurve.easeOut,
        })
        .then(() => {
          this.successLayout.translateY = 150;
          this.successLayout.animate({
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: 300,
            curve: Enums.AnimationCurve.easeInOut,
          });
        });
    }
  }

  loadedContainer(args) {
    this.messageLayout = args.object;
  }

  loadedSuccess(args) {
    this.successLayout = args.object;
  }
  
}
