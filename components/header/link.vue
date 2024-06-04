<script setup lang="ts">
const variable = defineProps({
	items: [] as array,
	title: "",
});
</script>

<template>
	<v-menu
		open-on-hover
		:close-on-content-click="false"
		transition="scale-transition"
	>
		<template #activator="{ props,isActive }">
			<v-btn
				color="primary"
				dark
				v-bind="props"
				:append-icon="isActive ? 'mdi-chevron-up' : 'mdi-chevron-down'"
			>
				{{ variable.title }}
			</v-btn>
		</template>

		<v-list>
			<v-list-item
				:prepend-icon="item.icon"
				style="width: 100%; padding: 0 !important; margin: 0 !important;"
				v-for="(item, i) in variable.items"
				:key="i"
			>
				<v-menu
					v-if="!!item.children"
					style="width: 100% !important;"
					open-on-hover
					class="w-full"
					location="end"
				>
					<template v-slot:activator="{ props, isActive }">
						<v-btn
						variant="flat"
							dark
							width="100%"
							class="text-start justify-between"
							v-bind="props"
							:append-icon="isActive ? 'mdi-chevron-left' : 'mdi-chevron-right'"
						>
							<span>{{ item.title }}</span>
						</v-btn>
					</template>
					<v-list class="m-0 p-0">
						<v-list-item v-for="(item2, index) in item.children" :key="index">
							<v-list-item-title
								><v-btn
								variant="flat"
								dark
									v-bind="props"
								>
									{{ item2.title }}
								</v-btn></v-list-item-title
							>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-list-item-title v-else
					><v-btn
					variant="flat"
						dark
						v-bind="props"
					>
						{{ item.title }}
					</v-btn></v-list-item-title
				>
			</v-list-item>
		</v-list>
	</v-menu>
</template>
