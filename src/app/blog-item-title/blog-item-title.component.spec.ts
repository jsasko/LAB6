import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemTitleComponent } from './blog-item-title.component';

describe('BlogItemTitleComponent', () => {
  let component: BlogItemTitleComponent;
  let fixture: ComponentFixture<BlogItemTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
