import { Component, Input, DynamicComponentLoader, Injector, OnInit } from '@angular/core';

@Component({
	selector: 'st-renderer',
	template: '<span id="st-render-outlet"></span>',
})
export class ComponentRenderer implements OnInit {
	@Input() component: any;

	constructor(private renderer: DynamicComponentLoader
			, private injector: Injector) { }

	ngOnInit(): void {
		this.renderer.loadAsRoot(this.component, '#st-render-outlet', this.injector);
	}
}
