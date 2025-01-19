import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-confirmation-alert',
  templateUrl: './confirmation-alert.component.html',
  styleUrls: ['./confirmation-alert.component.css']
})
export class ConfirmationAlertComponent {
  @Output() confirmAction = new EventEmitter<boolean>(); // Emit true for confirm, false for cancel
  message: string = '';
  showAlert: boolean = false;


  // To display the alert with a message
  showAlertMessage(message: string): void {
    this.message = message;
    this.showAlert = true;

  }

  // Close the alert (cancel action)
  onClose(): void {
    this.showAlert = false;
    this.confirmAction.emit(false);  // Emit false to indicate cancellation
  }

  // Confirm the action
  onConfirm(): void {
    this.showAlert = false;
    this.confirmAction.emit(true);  // Emit true to confirm the action
  }

  isShown() {
    return this.showAlert;
  }
}
