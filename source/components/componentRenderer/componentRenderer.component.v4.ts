import { Component, Input, ViewContainerRef, ComponentResolver, OnInit } from '@angular/core';

@Component({
	selector: 'st-renderer-4',
	template: '',
})
export class ComponentRendererV4 implements OnInit {
	@Input() component: any;

	constructor(private resolver: ComponentResolver
			, private container: ViewContainerRef) { }

	ngOnInit(): void {
		this.resolver.resolveComponent(this.component).then(component => {
			this.container.createComponent(component);
		});
	}
}
