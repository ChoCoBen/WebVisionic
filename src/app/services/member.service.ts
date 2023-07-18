import { Injectable } from '@angular/core'
import { Member } from '../models/member.model';
import { Promise } from 'es6-promise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberFile: string = 'assets/content/team.json'

  getAllMembers(): Observable<{ currentMembers: Member[], alumniMembers: Member[] }> {
    return new Observable<{ currentMembers: Member[], alumniMembers: Member[] }>(observer => {
      fetch(this.memberFile)
        .then(response => response.json())
        .then(JSONContent => {
          const members = JSONContent.filter((obj: any) => {
            return this.isValidMember(obj);;
          }) as Member[];

          const currentMembers = members.filter((obj: any) => !obj.isAlumni) as Member[];
          const alumniMembers = members.filter((obj: any) => obj.isAlumni) as Member[];

          observer.next({ currentMembers, alumniMembers });
          observer.complete();
        })
        .catch(error => {
          console.error('An error occurred while retrieving the json file:', error);
          observer.error(error);
        });
    });
  }

  getImageMembers(membersName: string[]): Observable<{student:string, image:string}[]> {
    /* Retrive the images of the people corresponding to the names given.
     * The name are given in type 'firstname lastname', but in the team file firstnames & lastnames are separated.
     */
    return new Observable<{student:string, image:string}[]>(observer => {
      const membersNameLower = membersName.map(str => str.toLowerCase());
      fetch(this.memberFile)
        .then(response => response.json())
        .then(JSONContent => {
          const members = JSONContent.filter((obj: any) => {
            return this.isValidMember(obj);;
          }) as Member[];

          const membersWanted = members.filter((obj: any) => {
            const totalName = obj.firstname.toLowerCase() + ' ' + obj.lastname.toLowerCase();
            return membersNameLower.includes(totalName)
          })

          const membersImage = membersWanted.map(obj => ({student: obj.firstname + ' ' + obj.lastname, image: obj.photo}))
          observer.next(membersImage)
          observer.complete()
        })
        .catch(error => {
          console.error('An error occurred while retrieving the team json file:', error);
          observer.error(error);
        });
    })
  }

  private isValidMember(obj: any): boolean {
    const isValid = typeof obj.lastname === 'string' &&
      typeof obj.firstname === 'string' &&
      typeof obj.project === 'string' &&
      Array.isArray(obj.direction) &&
      obj.direction.every((element: any) => typeof element === 'string') &&
      typeof obj.photo === 'string' &&
      typeof obj.currentPosition === 'string' &&
      typeof obj.isAlumni === 'boolean' &&
      typeof obj.date === 'string';
    if (!isValid) {
      console.warn('Among the list of team members, it seems that a member object has the wrong format and is therefore not displayed in the list.');
    }
    return isValid;
  }
}


