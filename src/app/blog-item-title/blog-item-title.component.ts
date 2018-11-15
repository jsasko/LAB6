import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-item-title',
  templateUrl: './blog-item-title.component.html',
  styleUrls: ['./blog-item-title.component.css']
})
export class BlogItemTitleComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {

  }

}
