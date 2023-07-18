import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input()
  member!: Member;

  imagePath!: string;

  isCosupervised : boolean = true;
  isAlumni : boolean = true;

  ngOnInit(): void {
    if (this.member.photo === "") {
      this.imagePath = "assets/images/team/no_photo.jpg"
    }
    else {
      this.imagePath = "assets/images/team/" + this.member.photo
    }

    if (this.member.direction.length === 0) {
      this.isCosupervised = false
    }

    if (this.member.currentPosition === "" || this.member.cursus !== "Graduate") {
      this.isAlumni = false
    }
  }
}
