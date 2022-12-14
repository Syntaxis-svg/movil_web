
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { ResetpassPage } from './resetpass.page';

describe('ResetpassPage', () => {
  let component: ResetpassPage;
  let fixture: ComponentFixture<ResetpassPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpassPage ],
      imports: [IonicModule.forRoot(), FormsModule, NgForm]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
