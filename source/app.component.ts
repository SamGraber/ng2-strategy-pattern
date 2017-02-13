import { Component } from '@angular/core';

import { TestComponent } from './components/test/test.component';

@Component({
	selector: 'st-app',
	template: `
		<st-renderer [component]="testComponent"></st-renderer>
		<st-renderer-3 [component]="testComponent"></st-renderer-3>
		<st-renderer-4 [component]="testComponent"></st-renderer-4>
	`
})
export class AppComponent {
	testComponent = TestComponent;
}
