import { defineCustomElement } from 'vue';
import Widget from './App.vue';

// создаём Web Component
const WidgetElement = defineCustomElement(Widget);

// регистрируем его
customElements.define('my-widget', WidgetElement);
