export class Member {
  constructor(public lastname: string,
              public firstname: string,
              public project: string,
              public direction: string[],
              public photo: string,
              public cursus: string,
              public currentPosition: string,
              public isAlumni: boolean,
              public date: string) {
  }
}
