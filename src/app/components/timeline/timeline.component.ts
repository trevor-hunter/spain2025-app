import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface timelineEntry {
  year: string,
  description: string
}

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  entries: timelineEntry[] = []

  ngOnInit() {
    this.entries = [
      { year: '1984', description: 'First Macintosh Computer' },
      { year: '1998', description: 'Mac' },
      { year: '2001', description: 'iPod' },
      { year: '2007', description: 'iPhone' },
      { year: '2015', description: 'Apple Watch' }
    ]
  }
}
