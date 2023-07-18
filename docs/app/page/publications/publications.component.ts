import { Component } from '@angular/core';
import { Publication } from 'src/app/models/publication.models';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  publications!: Publication[]

  publicationFile: string = 'assets/content/publications.json'

  ngOnInit() {
    fetch(this.publicationFile)
      .then(response => response.json())
      .then(JSONContent => {
        this.publications = JSONContent.filter((obj:any) => {
          let isValid = this.isValidMember(obj)
          if (!isValid) {
            console.warn('Among the list of publications, it seems that a publication object has the wrong format and is therefore not displayed in the list.')
          }
          return isValid;
        }) as Publication[];

        this.publications.sort((publication1, publication2) => publication2.year - publication1.year)
      })
      .catch(erreur => {
        console.error('An error occurred while retrieving the json file :', erreur);
      });
  }

  private isValidMember(obj: any): boolean {
    return (
      typeof obj.type === 'string' &&
      typeof obj.title === 'string' &&
      typeof obj.bookTitle === 'string' &&
      Array.isArray(obj.author) &&
      obj.author.every((element: any) => typeof element === 'string') &&
      typeof obj.year === 'number' &&
      typeof obj.publisher === 'string' &&
      typeof obj.link === 'string' &&
      typeof obj.journal === 'string' &&
      typeof obj.image === 'string'
    );
  }
}
