// src/widget.js
import { createApp } from 'vue';
// import WidgetApp from './components/WidgetApp.vue';
import WidgetApp from './components/WidgetApp.vue';
function mountWidget() {
	let el = document.getElementById('fpSurveyNps');
	if (!el) {
		el = document.createElement('div');
		el.id = 'fpSurveyNps';
		document.body.appendChild(el);
	}

	createApp(WidgetApp).mount(el);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', mountWidget);
} else {
	mountWidget();
}
