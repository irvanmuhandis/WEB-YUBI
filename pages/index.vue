<script lang="ts" setup>
import { useMyInitStore } from "~/stores/init";
const myInitStore = useMyInitStore();
const { name } = storeToRefs(myInitStore);
</script>

<template>
	<div>
		Haloo {{ name }}\
		<div class="text-center">
			<v-chip class="ma-2" label>
				Label
			</v-chip>

			<v-chip class="ma-2" color="pink" label>
				<v-icon icon="mdi-label" start></v-icon>
				Tags
			</v-chip>

			<v-chip class="ma-2" color="primary" label>
				<v-icon icon="mdi-account-circle-outline" start></v-icon>
				John Leider
			</v-chip>

			<v-chip class="ma-2" color="cyan" closable label>
				<v-icon icon="mdi-twitter" start></v-icon>
				New Tweets
			</v-chip>
		</div>
	</div>
</template>

<style></style>
