import { defineStore } from "pinia";

export const useMyHeaderStore = defineStore({
	id: "myHeaderStore",
	state: () => ({
		items: {
			itemSoftware: [
				{
					title: "Easy Series",
					children: [
						{ title: "Easy-POS" },
						{ title: "Easy-A" },
						{ title: "Easy-H" },
						{ title: "Easy-AI" },
					],
				},
				{ title: "ERP Series", children: [{ title: "S-ERP" }, { title: "D-ERP" }] },
				{ title: "Groupware" },
			],
			itemHardware: [
				{
					title: "CCTV & Akses Kontrol",
					link: "",
				},
				{
					title: "Instalasi Jaringan & Telepon PABX",
					link: "",
				},
				{
					title: "Instalasi Server",
					link: "",
				},
			],
			itemOther: [
				{
					title: "Informasi Perusahaan",
					link: "",
				},
				{
					title: "FAQ",
					link: "",
				},
			],
		},
		triggers: {
			slideX: "" as any,
			slideY: "" as any,
			scale: "" as any,
		},
	}),
	actions: {},
});
