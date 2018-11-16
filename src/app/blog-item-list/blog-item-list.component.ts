import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BlogService} from '../services/blog.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-item-list',
  templateUrl: './blog-item-list.component.html',
  styleUrls: ['./blog-item-list.component.css']
})
export class BlogItemListComponent implements OnInit, OnDestroy {

  @Input() filterText: string;
  public blogItemList;

  @Output() name = new EventEmitter<string>();
  constructor(private rest: BlogService, private router: Router, private route: ActivatedRoute) {
  }

  sendFilter() {
    this.name.emit(this.filterText);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['title'];
    });

    this.getAllBlogItem();
  }

  getAllBlogItem() {
    this.rest.getAll().subscribe((data: {}) => {
      this.blogItemList = data;
    });
  }

  onChange(): void {
    this.router.navigate(['blog'],
      {queryParams: {title: this.filterText}});
  }

  ngOnDestroy(): void {
  }

}
