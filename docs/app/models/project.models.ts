export class Project {
  constructor(public title: string,
              public image: string[],
              public desc: string,
              public keywords: string[],
              public institution: string[],
              public funding: string[],
              public collaborators: string[],
              public students: string[],
              public id: string,
              ) {
  }
}
