import { Component } from '@angular/core';

@Component({
	selector: 'st-test',
	template: '<h1>Test succeeded!</h1>',
})
export class TestComponent {
	constructor() {
		console.log('Constructed test component');
	}

	ngOnInit(): void {
		console.log('Initialzed test component');
	}
}
