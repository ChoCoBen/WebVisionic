import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input()
  images: string[] = [];

  @Input()
  projectId: string = '';

  image_number!: number;
  marginLeft = -0;
  slideWidth!: number;

  current_image: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.image_number = this.images.length
    this.slideWidth = 100 / this.image_number;
  }

  onRadioChange(index: number): void {
    this.marginLeft = -index * this.slideWidth;
    this.current_image = index;
    this.setMarginLeft();
  }

  onLeftButton() {
    this.current_image -= 1;
    if (this.current_image < 0) {
      this.current_image = this.image_number - 1;
    }
    this.marginLeft = -this.current_image * this.slideWidth;
    this.setMarginLeft();
  }

  onRightButton() {
    this.current_image += 1;
    if (this.current_image >= this.image_number) {
      this.current_image = 0;
    }
    this.marginLeft = -this.current_image * this.slideWidth;
    this.setMarginLeft();
  }

  setMarginLeft() {
    const elements = document.querySelectorAll('.first');
    elements.forEach((element: { classList: { contains: (arg0: string) => any; }; }) => {
      if (element.classList.contains(this.projectId)) {
        this.renderer.setStyle(element, 'margin-left', this.marginLeft + '%');
      }
    });
  }
}
