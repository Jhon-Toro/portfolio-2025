import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUserComponentComponent } from './sidebar-user-component';

describe('SidebarUserComponentComponent', () => {
  let component: SidebarUserComponentComponent;
  let fixture: ComponentFixture<SidebarUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarUserComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
