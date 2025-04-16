import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'home-component', component: HomeComponent },
    { path: 'map-component', component: MapComponent },
    { path: 'itinerary-component', component: ItineraryComponent },
    { path: 'gallery-component', component: GalleryComponent },
    { path: 'about-component', component: AboutComponent }
];
