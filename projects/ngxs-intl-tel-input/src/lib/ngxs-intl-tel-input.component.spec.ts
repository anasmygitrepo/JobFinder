import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsIntlTelInputComponent } from './ngxs-intl-tel-input.component';

describe('NgxsIntlTelInputComponent', () => {
	let component: NgxsIntlTelInputComponent;
	let fixture: ComponentFixture<NgxsIntlTelInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxsIntlTelInputComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxsIntlTelInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
