import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primo-angular';
  pagina = [
    {
      titolo: 'Gli aspetti fondamentali di Angular',
      descrizione: "Questa sezione è dedicata a tutti i principianti che non vedono l'ora di entra nel mondo Angular",
        menu: [
          {
          testo: "What's Angular ?",
          bgcolor: "rosso"
        }, {
          testo: "Getting started",
          bgcolor: "verde"
        }, {
          testo: "Try it",
          bgcolor: "blu"
        }
        ]
    },
    {
      titolo: 'Il concetto di vita del componente',
      descrizione: "In questa sezione potrai capire al meglio tutto il processo di vita del componente.",
        menu: [
          {
          testo: "Component lifecycle",
          bgcolor: "rosso"
        }, {
          testo: "Component Interaction",
          bgcolor: "verde"
        }, {
          testo: "Component styles",
          bgcolor: "blu"
        }
        ]
    }
  ]
}