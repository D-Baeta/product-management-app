import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-properties-editor',
  templateUrl: './custom-properties-editor.component.html',
  styleUrls: ['./custom-properties-editor.component.css']
})
export class CustomPropertiesEditorComponent {
  @Input() customProperties: { [key: string]: string } = {};
  @Output() propertiesChange = new EventEmitter<{ [key: string]: string }>();

  newKey: string = '';
  newValue: string = '';

  get keys(): string[] {
    return Object.keys(this.customProperties);
  }

  // Update value handler with null check
  updateValue(key: string, event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      const value = target.value;
      this.customProperties = { ...this.customProperties, [key]: value };
      this.propertiesChange.emit(this.customProperties);
    }
  }

  deleteProperty(key: string) {
    const { [key]: _, ...updatedProperties } = this.customProperties;
    this.customProperties = updatedProperties;
    this.propertiesChange.emit(this.customProperties);
  }

  addProperty() {
    if (this.newKey && this.newValue) {
      this.customProperties = {
        ...this.customProperties,
        [this.newKey]: this.newValue
      };
      this.propertiesChange.emit(this.customProperties);

      // Reset inputs
      this.newKey = '';
      this.newValue = '';
    }
  }
}
