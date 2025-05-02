import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { ItineraryComponent } from './pages/itinerary/itinerary.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'map', component: MapComponent },
    { path: 'itinerary', component: ItineraryComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
