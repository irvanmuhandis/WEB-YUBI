<script lang="ts" setup>
import { useMyHeaderStore } from "~/stores/header";
const headerStore = useMyHeaderStore();
const { items, triggers } = storeToRefs(headerStore);
</script>
<template>
	oo
	<v-app-bar scroll-behavior="elevate" scroll-threshold="0" density="compact">
		<div class="d-flex justify-center">
			<!-- Logo -->

			
			<v-btn variant="flat" dark>
				Beranda
			</v-btn>
			<HeaderLink :items="items.itemSoftware" title="Software" />
			<HeaderLink :items="items.itemHardware" title="Hardware" />
			<HeaderLink :items="items.itemOther" title="Lainnya" />

			<!-- ID -->
			<!-- <v-menu open-on-hover transition="scale-transition">
				<template #activator="{ props }">
					<v-btn color="primary" v-bind="props">
						Software
					</v-btn>
				</template>

				<v-list>
					<v-list-item v-for="(item, i) in itemCountry" :key="i">
						<v-menu v-if="!!item.children" open-on-hover location="end">
							<template v-slot:activator="{ props }">
								<v-btn color="primary" dark v-bind="props">
									{{ item.title }}
								</v-btn>
							</template>

							<v-list>
								<v-list-item v-for="(item2, index) in item.children" :key="index">
									<v-list-item-title>{{ item2.title }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
						<v-list-item-title v-else>{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu> -->
		</div>
	</v-app-bar>
	<slot />
</template>

<style></style>
