import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInCategoryComponent } from './item-in-category.component';

describe('ItemInCategoryComponent', () => {
  let component: ItemInCategoryComponent;
  let fixture: ComponentFixture<ItemInCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
