import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSettingsComponentComponent } from './sidebar-settings-component';

describe('SidebarSettingsComponentComponent', () => {
  let component: SidebarSettingsComponentComponent;
  let fixture: ComponentFixture<SidebarSettingsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSettingsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSettingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
