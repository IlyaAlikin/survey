<!-- src/WidgetApp.vue -->
<script setup>
import HelloWorld from './HelloWorld.vue';
</script>

<template>
	<div
		style="
			all: initial;
			font-family: sans-serif;
			padding: 1em;
			border: 1px solid #ccc;
			background: white;
		"
	>
		<h3>Опросник</h3>
		<HelloWorld msg="Виджет опроса внутри другого сайта" />
	</div>
</template>
