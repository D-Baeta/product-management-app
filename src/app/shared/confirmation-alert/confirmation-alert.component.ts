import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-confirmation-alert',
  templateUrl: './confirmation-alert.component.html',
  styleUrls: ['./confirmation-alert.component.css']
})
export class ConfirmationAlertComponent {
  @Output() confirmAction = new EventEmitter<boolean>();
  message: string = '';
  showAlert: boolean = false;

  showAlertMessage(message: string): void {
    this.message = message;
    this.showAlert = true;

  }

  onClose(): void {
    this.showAlert = false;
    this.confirmAction.emit(false);
  }

  onConfirm(): void {
    this.showAlert = false;
    this.confirmAction.emit(true);
  }

  isShown() {
    return this.showAlert;
  }
}
