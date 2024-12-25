import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoWeb';

  peliculas = [
    {
      titulo: 'Moana 2',
      fechaLanzamiento: new Date('2025-02-06'),
      precio: 9.30,
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
    },
    {
      titulo: 'Encanto',
      fechaLanzamiento: new Date('2026-06-18'),
      precio: 10.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg'
    },
    {
      titulo: 'Zootopia',
      fechaLanzamiento: new Date('2025-03-21'),
      precio: 11.00,
      poster: 'https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg'
    }
  ];
  

}
