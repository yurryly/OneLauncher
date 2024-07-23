fn main() {
	tauri_build::try_build(
		tauri_build::Attributes::new()
			.codegen(tauri_build::CodegenContext::new())
			.plugin(
				"onelauncher",
				tauri_build::InlinedPlugin::new().commands(&[
					"begin_msa",
					"finish_msa",
					"get_users",
					"get_user",
					"remove_user",
					"launch_cluster",
					"create_cluster",
                    "remove_cluster",
					"get_clusters",
					"get_cluster",
					"get_manifest",
					"get_settings",
					"set_settings",
					"get_program_info",
                    "get_minecraft_versions"
				]),
			),
	)
	.expect("failed to run tauri-build")
}
