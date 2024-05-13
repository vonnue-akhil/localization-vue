<script setup>
	import { ref } from "vue";

	const appleCount = ref(0);
</script>

<template>
	<div>
		<p v-t="{ path: 'hi', args: { name: 'Akhil' } }"></p>
		selected language: {{ $i18n.locale }}
		<select v-model="$i18n.locale">
			<option
				v-for="locale in $i18n.availableLocales"
				:key="`locale-${locale}`"
				:value="locale"
			>
				{{ locale }}
			</option>
		</select>
		<h1>Hello World</h1>
		<p v-t="{ path: 'apple', plural: appleCount }"></p>
		<div class="button-container">
			<button
				type="button"
				@click="
					() => {
						appleCount++;
					}
				"
			>
				add apple
			</button>
			<button
				type="button"
				@click="
					() => {
						appleCount = 0;
					}
				"
			>
				reset apple count
			</button>
		</div>
	</div>
</template>

<style scoped>
	.button-container {
		display: flex;
		gap: 20px;
	}
</style>
