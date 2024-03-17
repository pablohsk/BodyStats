import { Component } from '@angular/core';

@Component({
  selector: 'app-peso-ideal-popup',
  templateUrl: './peso-ideal-popup.component.html',
  styleUrls: ['./peso-ideal-popup.component.css']
})
export class PesoIdealPopupComponent {
  altura: number = 0; // Inicialização no construtor
  sexo: string = ''; // Inicialização no construtor
  pesoIdeal: number | null = null;

  calcularPesoIdeal(): void {
    if (this.altura && this.sexo) {
      if (this.sexo === 'M') {
        this.pesoIdeal = (72.7 * this.altura) - 58;
      } else if (this.sexo === 'F') {
        this.pesoIdeal = (62.1 * this.altura) - 44.7;
      }
    }
  }
}