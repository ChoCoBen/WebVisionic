import { Injectable } from '@angular/core'
import { Project } from '../models/project.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectFile = 'assets/content/projects.json'

  getAllProjects(): Observable<Project[]> {
    return new Observable<Project[]> (observer => {
      fetch(this.projectFile)
      .then(response => response.json())
      .then(JSONContent => {
        const projects = JSONContent.filter((obj:any) => {
          return this.isValidProject(obj);
        }) as Project[];

        observer.next(projects);
        observer.complete();
      })
      .catch(erreur => {
        console.error('An error occurred while retrieving the json file :', erreur);
      });
    });
  }

  private isValidProject(obj: any): boolean {
    let isValid: boolean = (
      typeof obj.title === 'string' &&
      Array.isArray(obj.image) &&
      obj.keywords.every((element: any) => typeof element === 'string') &&
      typeof obj.desc === 'string' &&
      Array.isArray(obj.keywords) &&
      obj.keywords.every((element: any) => typeof element === 'string') &&
      Array.isArray(obj.students) &&
      obj.students.every((element: any) => typeof element === 'string') &&
      Array.isArray(obj.funding) &&
      obj.funding.every((element: any) => typeof element === 'string') &&
      Array.isArray(obj.institution) &&
      obj.institution.every((element: any) => typeof element === 'string') &&
      Array.isArray(obj.collaborators) &&
      obj.collaborators.every((element: any) => typeof element === 'string') &&
      typeof obj.id === 'string'
    );
    if (!isValid) {
      console.warn('Among the list of projects, it seems that a project object has the wrong format and is therefore not displayed in the list.')
    }
    return isValid;
  }
}
