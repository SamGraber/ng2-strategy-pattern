import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TestComponent }  from './components/test/test.component';
import { ComponentRenderer }  from './components/componentRenderer/componentRenderer.component';
import { ComponentRendererV2 }  from './components/componentRenderer/componentRenderer.component.v2';
import { ComponentRendererV3 }  from './components/componentRenderer/componentRenderer.component.v3';
import { ComponentRendererV4 }  from './components/componentRenderer/componentRenderer.component.v4';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		TestComponent,
		ComponentRenderer,
		ComponentRendererV2,
		ComponentRendererV3,
		ComponentRendererV4,
	],
	// entryComponents: [TestComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
