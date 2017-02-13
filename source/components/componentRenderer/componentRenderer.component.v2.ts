import { Component, Input, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
	selector: 'st-renderer-2',
	template: '',
})
export class ComponentRendererV2 implements OnInit {
	@Input() component: any;

	constructor(private factory: ComponentFactoryResolver
			, private container: ViewContainerRef) { }

	ngOnInit(): void {
		this.container.createComponent(this.factory.resolveComponentFactory(this.component));
	}
}
