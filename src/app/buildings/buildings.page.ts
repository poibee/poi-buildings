import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal, IonButtons, IonButton, IonIcon, IonChip, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, bookOutline, serverOutline, mapOutline, globeOutline, timeOutline } from 'ionicons/icons';
import { Building } from '../models/building.model';
import * as countryFlagIcons from 'country-flag-icons/string/3x2';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.page.html',
  styleUrls: ['./buildings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal, IonButtons, IonButton, IonIcon, IonChip, IonLabel, IonList, IonItem, CommonModule, FormsModule]
})
export class BuildingsPage implements OnInit {
  famousBuildings: Building[] = [
    new Building(
      'Eiffel Tower',
      'Paris',
      'France',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=800&q=80',
      'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris.',
      { lat: 48.8584, lng: 2.2945 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Eiffel_Tower',
      'Q243',
      'way/5013364',
      'https://www.toureiffel.paris/en',
      {
        monday: '9:30 AM - 10:45 PM',
        tuesday: '9:30 AM - 10:45 PM',
        wednesday: '9:30 AM - 10:45 PM',
        thursday: '9:30 AM - 10:45 PM',
        friday: '9:30 AM - 10:45 PM',
        saturday: '9:30 AM - 10:45 PM',
        sunday: '9:30 AM - 10:45 PM'
      }
    ),
    new Building(
      'Colosseum',
      'Rome',
      'Italy',
      'https://images.unsplash.com/photo-1552432552-06c0b0a94dda?w=800&h=800&q=80',
      'The Colosseum is an oval amphitheatre in the centre of Rome.',
      { lat: 41.8902, lng: 12.4922 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Colosseum',
      'Q10285',
      'way/39748303',
      'https://www.il-colosseo.it/en/',
      {
        monday: '9:00 AM - 7:15 PM',
        tuesday: '9:00 AM - 7:15 PM',
        wednesday: '9:00 AM - 7:15 PM',
        thursday: '9:00 AM - 7:15 PM',
        friday: '9:00 AM - 7:15 PM',
        saturday: '9:00 AM - 7:15 PM',
        sunday: '9:00 AM - 7:15 PM',
        holidays: '9:00 AM - 2:00 PM'
      }
    ),
    new Building(
      'Taj Mahal',
      'Agra',
      'India',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=800&q=80',
      'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna.',
      { lat: 27.1751, lng: 78.0421 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Taj_Mahal',
      'Q9141',
      'way/89225675',
      undefined,
      {
        monday: 'Closed',
        tuesday: 'Sunrise to Sunset',
        wednesday: 'Sunrise to Sunset',
        thursday: 'Sunrise to Sunset',
        friday: 'Sunrise to Sunset',
        saturday: 'Sunrise to Sunset',
        sunday: 'Sunrise to Sunset'
      }
    ),
    new Building(
      'Sydney Opera House',
      'Sydney',
      'Australia',
      'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800&h=800&q=80',
      'The Sydney Opera House is a multi-venue performing arts centre.',
      { lat: -33.8568, lng: 151.2153 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Sydney_Opera_House',
      'Q45178',
      undefined,
      'https://www.sydneyoperahouse.com',
      undefined
    ),
    new Building(
      'Empire State Building',
      'New York',
      'USA',
      'https://images.unsplash.com/photo-1546436836-07a91091f160?w=800&h=800&q=80',
      'The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan.',
      { lat: 40.7484, lng: -73.9857 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Empire_State_Building',
      'Q9188',
      'way/123456789',
      'https://www.esbnyc.com',
      {
        monday: '10:00 AM - 10:00 PM',
        tuesday: '10:00 AM - 10:00 PM',
        wednesday: '10:00 AM - 10:00 PM',
        thursday: '10:00 AM - 10:00 PM',
        friday: '10:00 AM - 12:00 AM',
        saturday: '10:00 AM - 12:00 AM',
        sunday: '10:00 AM - 10:00 PM'
      }
    ),
    new Building(
      'Brandenburg Gate',
      'Berlin',
      'Germany',
      'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&h=800&q=80',
      'The Brandenburg Gate is an 18th-century neoclassical monument in Berlin.',
      { lat: 52.5163, lng: 13.3777 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Brandenburg_Gate',
      'Q82425',
      'way/29389355',
      undefined,
      undefined
    ),
    new Building(
      'Burj Khalifa',
      'Dubai',
      'UAE',
      'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&h=800&q=80',
      'The Burj Khalifa is the world\'s tallest building.',
      { lat: 25.1972, lng: 55.2744 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Burj_Khalifa',
      'Q160411',
      'way/150935295',
      'https://www.burjkhalifa.ae',
      {
        monday: '24 hours',
        tuesday: '24 hours',
        wednesday: '24 hours',
        thursday: '24 hours',
        friday: '24 hours',
        saturday: '24 hours',
        sunday: '24 hours'
      }
    ),
    new Building(
      'Big Ben',
      'London',
      'UK',
      'https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?w=800&h=800&q=80',
      'Big Ben is the nickname for the Great Bell of the clock at the north end of the Houses of Parliament.',
      { lat: 51.5007, lng: -0.1246 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Big_Ben',
      'Q79056',
      'way/123456',
      'https://www.parliament.uk/bigben',
      {
        monday: 'Tours by appointment',
        tuesday: 'Tours by appointment',
        wednesday: 'Tours by appointment',
        thursday: 'Tours by appointment',
        friday: 'Tours by appointment',
        saturday: 'Closed',
        sunday: 'Closed'
      }
    ),
    new Building(
      'Petronas Towers',
      'Kuala Lumpur',
      'Malaysia',
      'https://images.unsplash.com/photo-1494959323928-ac0394595a78?w=800&h=800&q=80',
      'The Petronas Towers are 88-floor twin towers in Kuala Lumpur.',
      { lat: 3.1579, lng: 101.7120 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Petronas_Towers',
      'Q83425',
      'way/987654',
      'https://www.petronastwintowers.com.my',
      {
        monday: '9:00 AM - 9:00 PM',
        tuesday: '9:00 AM - 9:00 PM',
        wednesday: '9:00 AM - 9:00 PM',
        thursday: '9:00 AM - 9:00 PM',
        friday: '9:00 AM - 9:00 PM',
        saturday: '9:00 AM - 9:00 PM',
        sunday: '9:00 AM - 9:00 PM'
      }
    ),
    new Building(
      'St. Basil\'s Cathedral',
      'Moscow',
      'Russia',
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&h=800&q=80',
      'The Cathedral of Vasily the Blessed is a church in Red Square in Moscow.',
      { lat: 55.7525, lng: 37.6231 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Saint_Basil%27s_Cathedral',
      'Q157402',
      'way/456789',
      undefined,
      {
        monday: 'Closed',
        tuesday: '11:00 AM - 5:00 PM',
        wednesday: '11:00 AM - 5:00 PM',
        thursday: '11:00 AM - 5:00 PM',
        friday: '11:00 AM - 5:00 PM',
        saturday: '11:00 AM - 5:00 PM',
        sunday: '11:00 AM - 5:00 PM'
      }
    ),
    new Building(
      'Christ the Redeemer',
      'Rio de Janeiro',
      'Brazil',
      'https://images.unsplash.com/photo-1593995863951-57c27e518295?w=800&h=800&q=80',
      'Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro.',
      { lat: -22.9519, lng: -43.2105 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)',
      'Q127367',
      'way/654321',
      'https://www.cristoredentoroficial.com.br',
      {
        monday: '8:00 AM - 7:00 PM',
        tuesday: '8:00 AM - 7:00 PM',
        wednesday: '8:00 AM - 7:00 PM',
        thursday: '8:00 AM - 7:00 PM',
        friday: '8:00 AM - 7:00 PM',
        saturday: '8:00 AM - 7:00 PM',
        sunday: '8:00 AM - 7:00 PM'
      }
    ),
    new Building(
      'Great Wall of China',
      'Mutianyu',
      'China',
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=800&q=80',
      'The Great Wall of China is a series of fortification systems along the historical borders of Chinese states.',
      { lat: 40.4319, lng: 116.5704 } as { lat: number; lng: number },
      'https://en.wikipedia.org/wiki/Great_Wall_of_China',
      'Q12501',
      'relation/931834',
      'https://www.greatwall-china.com',
      {
        monday: '7:30 AM - 5:30 PM',
        tuesday: '7:30 AM - 5:30 PM',
        wednesday: '7:30 AM - 5:30 PM',
        thursday: '7:30 AM - 5:30 PM',
        friday: '7:30 AM - 5:30 PM',
        saturday: '7:30 AM - 5:30 PM',
        sunday: '7:30 AM - 5:30 PM'
      }
    )
  ];

  selectedBuilding: Building;
  isModalOpen = false;
  isHoursModalOpen = false;

  private countryToCodeMap: { [key: string]: string } = {
    'France': 'FR',
    'Italy': 'IT',
    'India': 'IN',
    'Australia': 'AU',
    'USA': 'US',
    'Germany': 'DE',
    'UAE': 'AE',
    'UK': 'GB',
    'Malaysia': 'MY',
    'Russia': 'RU',
    'Brazil': 'BR',
    'China': 'CN'
  };

  constructor(private sanitizer: DomSanitizer) {
    addIcons({ closeOutline, bookOutline, serverOutline, mapOutline, globeOutline, timeOutline });
    this.selectedBuilding = this.famousBuildings[0];
  }

  showOpeningHours(building: Building) {
    this.selectedBuilding = building;
    this.isHoursModalOpen = true;
  }

  closeHoursModal() {
    this.isHoursModalOpen = false;
    // this.selectedBuilding = null;
  }

  openImage(building: Building) {
    this.selectedBuilding = building;
    this.isModalOpen = true;
  }

  closeImage() {
    this.isModalOpen = false;
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {
  }

  getCountryFlag(country: string): SafeHtml | null {
    const code = this.countryToCodeMap[country];
    if (!code) {
      return null;
    }
    const flagIcon = (countryFlagIcons as { [key: string]: string })[code];
    if (!flagIcon) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustHtml(flagIcon);
  }

}
