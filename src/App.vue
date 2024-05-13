<script setup>
	import { ref } from "vue";

	const appleCount = ref(0);
	const languageCodes = ["en", "ja", "de", "nl","ml"];
</script>

<template>
	<div>
		<p>{{ $t("hi", { name: "Akhil" }) }}</p>
		selected language: {{ $i18n.locale }}
		<select v-model="$i18n.locale">
			<option
				v-for="locale in languageCodes"
				:key="`locale-${locale}`"
				:value="locale"
			>
				{{ locale }}
			</option>
		</select>
		<h1>Hello World</h1>
		<p>{{ $t("apple", appleCount) }}</p>
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
		{{ $t("bye") }}
	</div>
</template>

<style scoped>
	.button-container {
		display: flex;
		gap: 20px;
	}
</style>
