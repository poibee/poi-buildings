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
    { name: 'Eiffel Tower', location: 'Paris, France', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=800&q=80' },
    { name: 'Colosseum', location: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1552432552-06c0b0a94dda?w=800&h=800&q=80' },
    { name: 'Taj Mahal', location: 'Agra, India', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=800&q=80' },
    { name: 'Sydney Opera House', location: 'Sydney, Australia', image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800&h=800&q=80' },
    { name: 'Empire State Building', location: 'New York, USA', image: 'https://images.unsplash.com/photo-1546436836-07a91091f160?w=800&h=800&q=80' },
    { name: 'Brandenburg Gate', location: 'Berlin, Germany', image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&h=800&q=80' },
    { name: 'Burj Khalifa', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&h=800&q=80' },
    { name: 'Big Ben', location: 'London, UK', image: 'https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?w=800&h=800&q=80' },
    { name: 'Petronas Towers', location: 'Kuala Lumpur, Malaysia', image: 'https://images.unsplash.com/photo-1494959323928-ac0394595a78?w=800&h=800&q=80' },
    { name: 'St. Basil\'s Cathedral', location: 'Moscow, Russia', image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&h=800&q=80' },
    { name: 'Christ the Redeemer', location: 'Rio de Janeiro, Brazil', image: 'https://images.unsplash.com/photo-1593995863951-57c27e518295?w=800&h=800&q=80' },
    { name: 'Great Wall of China', location: 'China', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=800&q=80' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
