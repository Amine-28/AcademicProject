import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = {
    nom : 'Mohamed',
    email : 'amine.chagour28@ieee.org',
    tel : '28086908'
  };

  comments = [];
  comment = {
    id: 0,
    message: ''
  }

  newComment = false;
  addComment() {
    // tslint:disable-next-line:triple-equals
    if(this.comment.message != '') {
      this.comment.id = this.comments.length + 1;
      this.comments.push({
        id : this.comment.id,
        message : this.comment.message
      });
      this.comment.message = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
