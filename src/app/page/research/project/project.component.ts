import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.models';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  project!: Project;

  images: string[] = [];
  fundingImage: string[] = [];
  membersImage: {student: string, image: string}[] = [];

  textHoverStudent: string = '';
  projectId!: string

  private pathProject: string = 'assets/images/project/';
  private pathFunding: string = 'assets/images/funding/';
  private pathMember: string = 'assets/images/team/'

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    for (let image of this.project.image) {
      this.images.push(this.pathProject + image)
    }
    this.projectId = this.project.id
    for (let funding of this.project.funding) {
      this.fundingImage.push(this.pathFunding + funding)
    }

    this.memberService.getImageMembers(this.project.students).subscribe({
      next: (membersImage) => {
        this.membersImage = []
        for (let memberImage of membersImage) {
          memberImage.image= memberImage.image === '' ? (this.pathMember + 'no_photo.jpg') : (this.pathMember + memberImage)
          this.membersImage.push(memberImage)
        }
        if (this.membersImage.length !== this.project.students.length) {
          console.warn("There is at least one student in the list of " + this.project.id + " project members who is not in the list of laboratory members, so this member is not displayed in the list of project participants.")
        }
      },
      error: error => {
        console.error('An error occurred while retrieving images of the memebr of the project:', error);
      }
    });
  }
}
