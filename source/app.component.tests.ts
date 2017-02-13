import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let app: AppComponent;

	beforeEach(() => {
		app = new AppComponent();
	});

	it('should be true', () => {
		expect(app.trueProp).to.be.true;
	});
});
