import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication.models';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Input()
  publication!: Publication;

  imagePath!: string;
  path: string = "assets/images/publication/"

  ngOnInit(): void {
    if (this.publication.image === "") {
      this.imagePath = this.path + "no_image.png"
    }
    else {this.imagePath = this.path + this.publication.image}
  }
}
