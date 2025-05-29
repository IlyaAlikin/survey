import { createApp } from 'vue';
import WidgetApp from './components/WidgetApp.vue';

window.mountSurvey = function () {
	let el = document.getElementById('fpSurveyNps');
	if (!el) {
		el = document.createElement('div');
		el.id = 'fpSurveyNps';
		document.body.appendChild(el);
	}

	createApp(WidgetApp).mount(el);
};
