import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  currentMembers: Member[] = [];
  alumniMembers: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getAllMembers().subscribe({
      next: ({ currentMembers, alumniMembers }) => {
        this.currentMembers = currentMembers;
        this.alumniMembers = alumniMembers;
      },
      error: error => {
        console.error('An error occurred:', error);
      }
    });
  }
}
