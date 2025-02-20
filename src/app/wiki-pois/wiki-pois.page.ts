import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-wiki-pois',
  templateUrl: './wiki-pois.page.html',
  styleUrls: ['./wiki-pois.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule, FormsModule]
})
export class WikiPoisPage implements OnInit {
  famousBuildings = [
    { name: 'Eiffel Tower', location: 'Paris, France' },
    { name: 'Colosseum', location: 'Rome, Italy' },
    { name: 'Taj Mahal', location: 'Agra, India' },
    { name: 'Sydney Opera House', location: 'Sydney, Australia' },
    { name: 'Empire State Building', location: 'New York, USA' },
    { name: 'Sagrada Familia', location: 'Barcelona, Spain' },
    { name: 'Burj Khalifa', location: 'Dubai, UAE' },
    { name: 'Big Ben', location: 'London, UK' },
    { name: 'Petronas Towers', location: 'Kuala Lumpur, Malaysia' },
    { name: 'St. Basil\'s Cathedral', location: 'Moscow, Russia' },
    { name: 'Christ the Redeemer', location: 'Rio de Janeiro, Brazil' },
    { name: 'Great Wall of China', location: 'China' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
