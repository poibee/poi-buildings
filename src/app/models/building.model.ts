export interface OpeningHours {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
    holidays?: string;
}

export class Building {
    constructor(
        public name: string,
        public location: string,
        public country: string,
        public image: string,
        public description?: string,
        public coordinates?: { lat: number; lng: number },
        public wikipediaUrl?: string,
        public wikidataId?: string,
        public openStreetMapId?: string,
        public website?: string,
        public openingHours?: OpeningHours
    ) {}

    static fromJson(json: any): Building {
        return new Building(
            json.name,
            json.location,
            json.country,
            json.image,
            json.description,
            json.coordinates,
            json.wikipediaUrl,
            json.wikidataId,
            json.openStreetMapId,
            json.website,
            json.openingHours
        );
    }

    toJson(): any {
        return {
            name: this.name,
            location: this.location,
            image: this.image,
            description: this.description,
            coordinates: this.coordinates,
            wikipediaUrl: this.wikipediaUrl,
            wikidataId: this.wikidataId,
            openStreetMapId: this.openStreetMapId,
            website: this.website,
            openingHours: this.openingHours
        };
    }
}
