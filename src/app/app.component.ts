import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { CloudinaryModule } from '@cloudinary/ng'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { environment } from '../environments/environment'

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive, CloudinaryModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spain2025-app'
  img!: CloudinaryImage
  photos: any

  constructor(private http: HttpClient) {}

  ngOnInit () {
    this.getData('myphotoalbum-angular');
  }

  getData(tag: string): void {
    this.http.get(`/api/cloudinary?tag=${tag}`).subscribe((data: any) => {
      this.photos = data.resources
    })
  }
}
