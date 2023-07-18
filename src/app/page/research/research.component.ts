import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  projects!: Project[]

  projectsFile: string = 'assets/content/projects.json'

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe({
      next: (projects) => this.projects = projects,
      error: error => {
        console.error('An error occurred:', error);
      }
    })
  }
}
