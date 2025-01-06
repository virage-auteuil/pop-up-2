import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closePopup() {
    const popup = document.querySelector('.popup-container');
    if (popup) {
      popup.classList.add('fade-out');
      setTimeout(() => popup.classList.add('hidden'), 500);
    }
  }
}
