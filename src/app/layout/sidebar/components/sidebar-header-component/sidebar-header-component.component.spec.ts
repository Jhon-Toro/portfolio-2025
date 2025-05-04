import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHeaderComponentComponent } from './sidebar-header-component.component';

describe('SidebarHeaderComponentComponent', () => {
  let component: SidebarHeaderComponentComponent;
  let fixture: ComponentFixture<SidebarHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarHeaderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
