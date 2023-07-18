import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-image-displayer',
  templateUrl: './image-displayer.component.html',
  styleUrls: ['./image-displayer.component.scss']
})
export class ImageDisplayerComponent implements OnInit {

  private items!: Element[];

  ngOnInit(): void {
    this.items = Array.from(document.querySelectorAll('.item'));
  }

  onClick(itemIndex: number): void {
    const clickedItem = this.items[itemIndex];

    gsap.to(this.items, {
      width: (index) => (index === itemIndex) ? '15vw' : '10vw',
      duration: 2,
      ease: 'elastic(1, .6)'
    })

    gsap.to(this.items, {
      width: (index) => (index === itemIndex) ? '36vw' : '12vw',
      duration: 2.5,
      ease: 'elastic(1, .3)'
    })
  }
}
