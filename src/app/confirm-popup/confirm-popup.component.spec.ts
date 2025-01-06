import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmPopupComponent } from './confirm-popup.component';
import { By } from '@angular/platform-browser';

describe('ConfirmPopupComponent', () => {
  let component: ConfirmPopupComponent;
  let fixture: ComponentFixture<ConfirmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmPopupComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the default message', () => {
    const messageElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(messageElement.textContent).toContain('Are you sure?');
  });

  it('should display custom button text', () => {
    component.confirmButtonText = 'Yes';
    component.cancelButtonText = 'No';
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[0].nativeElement.textContent).toBe('Yes');
    expect(buttons[1].nativeElement.textContent).toBe('No');
  });

  it('should emit confirm event when confirm button is clicked', () => {
    spyOn(component.confirm, 'emit');
    const confirmButton = fixture.debugElement.query(By.css('button')).nativeElement;
    confirmButton.click();
    expect(component.confirm.emit).toHaveBeenCalled();
  });

  it('should emit cancel event when cancel button is clicked', () => {
    spyOn(component.cancel, 'emit');
    const cancelButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    cancelButton.click();
    expect(component.cancel.emit).toHaveBeenCalled();
  });
});
