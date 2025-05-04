import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavComponentComponent } from './sidebar-nav-component.component';

describe('SidebarNavComponentComponent', () => {
  let component: SidebarNavComponentComponent;
  let fixture: ComponentFixture<SidebarNavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
