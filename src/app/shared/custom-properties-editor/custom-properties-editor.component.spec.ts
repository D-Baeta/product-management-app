import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertiesEditorComponent } from './custom-properties-editor.component';

describe('CustomPropertiesEditorComponent', () => {
  let component: CustomPropertiesEditorComponent;
  let fixture: ComponentFixture<CustomPropertiesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPropertiesEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPropertiesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
