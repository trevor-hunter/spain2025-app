import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface image { src: string, alt: string }

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  imgSrc1: image[] = []
  imgSrc1PF: string = ''
  selectedImage: image = { src: '', alt: ''}

  ngOnInit() {
    this.imgSrc1PF = 'assets\\images\\test\\'
    this.imgSrc1 = [
      { src: `IMG_1305 - Copy (2).JPG`, alt: 'image 1' },
      { src: `IMG_1305 - Copy.JPG`, alt: 'image 1' },
      { src: `IMG_1305.JPG`, alt: 'image 1' },
      { src: `IMG_3788 - Copy (2).jpg`, alt: 'image 1' },
      { src: `IMG_3788 - Copy.jpg`, alt: 'image 1' },
      { src: `IMG_3788.jpg`, alt: 'image 1' },
      { src: `IMG_3791 - Copy (2).jpg`, alt: 'image 1' },
      { src: `IMG_3791 - Copy.jpg`, alt: 'image 1' },
      { src: `IMG_3791.jpg`, alt: 'image 1' },
      { src: `IMG_1305 - Copy (2).JPG`, alt: 'image 1' },
      { src: `IMG_1305 - Copy.JPG`, alt: 'image 1' },
      { src: `IMG_1305.JPG`, alt: 'image 1' },
      { src: `IMG_3788 - Copy (2).jpg`, alt: 'image 1' },
      { src: `IMG_3788 - Copy.jpg`, alt: 'image 1' },
      { src: `IMG_3788.jpg`, alt: 'image 1' },
      { src: `IMG_3791 - Copy (2).jpg`, alt: 'image 1' },
      { src: `IMG_3791 - Copy.jpg`, alt: 'image 1' },
      { src: `IMG_3791.jpg`, alt: 'image 1' }
    ]
  }

  selectImage (event: Event, img: image) { this.selectedImage = this.selectedImage === img? { src: '', alt: ''}: img }
}
