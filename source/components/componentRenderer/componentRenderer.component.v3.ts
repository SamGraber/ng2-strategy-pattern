import { Component, Input, ViewContainerRef, Compiler, OnInit } from '@angular/core';

@Component({
	selector: 'st-renderer-3',
	template: '',
})
export class ComponentRendererV3 implements OnInit {
	@Input() component: any;

	constructor(private compiler: Compiler
			, private container: ViewContainerRef) { }

	ngOnInit(): void {
		this.compiler.compileComponentAsync(this.component).then(factory => {
			this.container.createComponent(factory);
		});
	}
}
