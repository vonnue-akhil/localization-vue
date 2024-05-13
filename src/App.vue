<script setup>
	import { ref } from "vue";

	const appleCount = ref(0);
	const newCategory = ref("default");
</script>

<template>
	<div>
		<p v-t="{ path: 'message.hi', args: { name: 'Akhil' } }"></p>
		{{ newCategory }}
		<select class="form-select form-control" v-model="newCategory">
			<option value="default">Please Select</option>
			<option value="en">en</option>
			<option value="ja">ja</option>
		</select>
		<h1>Hello World</h1>
		<p v-t="{ path: 'message.apple', plural: appleCount }"></p>
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
