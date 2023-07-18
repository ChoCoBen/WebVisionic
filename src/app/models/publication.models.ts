export class Publication {
  constructor(public type: string,
              public title: string,
              public author: string[],
              public bookTitle: string,
              public journal: string,
              public year: number,
              public publisher: string,
              public link: string,
              public image: string,
              ) {
  }
}
