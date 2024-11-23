// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

/** user-defined commands */

/** tauri-specta globals */

import type { WebviewWindow as __WebviewWindow__ } from '@tauri-apps/api/webviewWindow';
import {
	invoke as TAURI_INVOKE,
} from '@tauri-apps/api/core';
import * as TAURI_API_EVENT from '@tauri-apps/api/event';

export const commands = {
	async authLogin(): Promise<Result<MinecraftCredentials | null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('auth_login') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getUsers(): Promise<Result<MinecraftCredentials[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_users') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getUser(uuid: string): Promise<Result<MinecraftCredentials, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_user', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getDefaultUser(fallback: boolean | null): Promise<Result<MinecraftCredentials | null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_default_user', { fallback }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async setDefaultUser(uuid: string | null): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('set_default_user', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async removeUser(uuid: string): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('remove_user', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async createCluster(props: CreateCluster): Promise<Result<string, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('create_cluster', { props }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	/**
	 * Updates the cluster with the given UUID. The cluster only updates game setting fields
	 */
	async editGameSettings(uuid: string, newCluster: Cluster): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('edit_game_settings', { uuid, newCluster }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async editClusterMeta(uuid: string, name: string | null, iconPath: string | null): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('edit_cluster_meta', { uuid, name, iconPath }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async removeCluster(uuid: string): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('remove_cluster', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getCluster(uuid: string): Promise<Result<Cluster, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_cluster', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getClusters(): Promise<Result<Cluster[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_clusters') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getClustersGrouped(): Promise<Result<{ [key in string]: Cluster[] }, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_clusters_grouped') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async runCluster(uuid: string): Promise<Result<DetailedProcess, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('run_cluster', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getClusterLogs(uuid: string): Promise<Result<string[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_cluster_logs', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getClusterLog(uuid: string, logName: string): Promise<Result<string, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_cluster_log', { uuid, logName }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async uploadLog(uuid: string, logName: string): Promise<Result<string, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('upload_log', { uuid, logName }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getScreenshots(uuid: string): Promise<Result<string[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_screenshots', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getWorlds(uuid: string): Promise<Result<string[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_worlds', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getRunningClusters(): Promise<Result<Cluster[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_running_clusters') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProcessesByPath(path: ClusterPath): Promise<Result<string[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_processes_by_path', { path }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async killProcess(uuid: string): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('kill_process', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async isClusterRunning(uuid: string): Promise<Result<boolean, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('is_cluster_running', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getPidByUuid(uuid: string): Promise<Result<number, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_pid_by_uuid', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getUserByProcess(uuid: string): Promise<Result<string | null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_user_by_process', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProcessStartedAt(uuid: string): Promise<Result<string, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_process_started_at', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProcessesDetailedByPath(path: ClusterPath): Promise<Result<DetailedProcess[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_processes_detailed_by_path', { path }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProcessDetailedById(uuid: string): Promise<Result<DetailedProcess, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_process_detailed_by_id', { uuid }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getSettings(): Promise<Result<Settings, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_settings') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async setSettings(settings: Settings): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('set_settings', { settings }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getMinecraftVersions(): Promise<Result<Version[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_minecraft_versions') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getLauncherInstances(launcher: ImportType, path: string | null): Promise<Result<[string, string[]], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_launcher_instances', { launcher, path }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async importInstances(launcher: ImportType, basePath: string, instances: string[]): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('import_instances', { launcher, basePath, instances }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProviderPackage(provider: Providers, projectId: string): Promise<Result<ManagedPackage, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_provider_package', { provider, projectId }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProviderPackages(provider: Providers, projectIds: string[]): Promise<Result<ManagedPackage[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_provider_packages', { provider, projectIds }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getAllProviderPackageVersions(provider: Providers, projectId: string, gameVersions: string[] | null, loaders: Loader[] | null, page: number | null, pageSize: number | null): Promise<Result<[ManagedVersion[], Pagination], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_all_provider_package_versions', { provider, projectId, gameVersions, loaders, page, pageSize }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProviderPackageVersions(provider: Providers, versions: string[]): Promise<Result<ManagedVersion[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_provider_package_versions', { provider, versions }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async searchProviderPackages(provider: Providers, query: ProviderSearchQuery): Promise<Result<ProviderSearchResults, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('search_provider_packages', { provider, query }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProviderAuthors(provider: Providers, author: Author): Promise<Result<ManagedUser[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_provider_authors', { provider, author }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getPackageBody(provider: Providers, body: PackageBody): Promise<Result<string, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_package_body', { provider, body }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async downloadProviderPackage(provider: Providers, packageId: string, clusterId: string, gameVersion: string | null, loader: Loader | null, packageVersion: string | null): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('download_provider_package', { provider, packageId, clusterId, gameVersion, loader, packageVersion }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getClusterPackage(clusterPath: ClusterPath, packagePath: PackagePath, packageType: PackageType): Promise<Result<Package, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_cluster_package', { clusterPath, packagePath, packageType }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getClusterPackages(clusterPath: ClusterPath, packageType: PackageType): Promise<Result<Package[], string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_cluster_packages', { clusterPath, packageType }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async addClusterPackage(clusterPath: ClusterPath, packagePath: PackagePath, pkg: Package, packageType: PackageType | null): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('add_cluster_package', { clusterPath, packagePath, pkg, packageType }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async removeClusterPackage(clusterPath: ClusterPath, packagePath: PackagePath, packageType: PackageType): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('remove_cluster_package', { clusterPath, packagePath, packageType }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async syncClusterPackages(clusterPath: ClusterPath): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('sync_cluster_packages', { clusterPath }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async syncClusterPackagesByType(clusterPath: ClusterPath, packageType: PackageType, clear: boolean | null): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('sync_cluster_packages_by_type', { clusterPath, packageType, clear }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async checkForUpdate(): Promise<Result<Update | null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('check_for_update') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async installUpdate(): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('install_update') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async setWindowStyle(custom: boolean): Promise<Result<null, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('set_window_style', { custom }) };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
	async getProgramInfo(): Promise<Result<ProgramInfo, string>> {
		try {
			return { status: 'ok', data: await TAURI_INVOKE('get_program_info') };
		}
		catch (e) {
			if (e instanceof Error)
				throw e;
			else return { status: 'error', error: e as any };
		}
	},
};

/** user-defined events */

export const events = __makeEvents__<{
	clusterPayload: ClusterPayload;
	ingressPayload: IngressPayload;
	internetPayload: InternetPayload;
	messagePayload: MessagePayload;
	offlinePayload: OfflinePayload;
	processPayload: ProcessPayload;
}>({
	clusterPayload: 'cluster-payload',
	ingressPayload: 'ingress-payload',
	internetPayload: 'internet-payload',
	messagePayload: 'message-payload',
	offlinePayload: 'offline-payload',
	processPayload: 'process-payload',
});

/** user-defined constants */

/** user-defined types */

export type Author = { Team: { team: string; organization: string | null } } | { Users: ManagedUser[] };
/**
 * `OneLauncher` browser list type.
 */
export type BrowserListView = 'grid' | 'list';
/**
 * Represents a single Instance and installation of Minecraft
 * Contains settings and identifiers on a per-Cluster basis, falling back to default settings for Options<>
 */
export interface Cluster {
/**
 * The Uuid of a specific cluster.
 */
	uuid: string;
	/**
	 * The download stage that of a cluster.
	 */
	stage?: ClusterStage;
	/**
	 * The core path of the cluster.
	 */
	path?: string;
	/**
	 * The associated cluster metadata.
	 */
	meta: ClusterMeta;
	/**
	 * The per-cluster JVM memory allocation options.
	 */
	memory?: Memory | null;
	/**
	 * The per-cluster JVM options.
	 */
	java?: JavaOptions | null;
	/**
	 * The per-cluster Minecraft window default resolution.
	 */
	resolution?: Resolution | null;
	/**
	 * The per-cluster Minecraft window fullscreen status.
	 */
	force_fullscreen: boolean | null;
	init_hooks?: InitHooks | null;
};
/**
 * Represents core Cluster metadata ([`Cluster#meta`]).
 */
export interface ClusterMeta {
/**
 * The user-facing name of the cluster stored as a string.
 */
	name: string;
	/**
	 * The user-facing group of the cluster stored as a string.
	 */
	group?: string | null;
	/**
	 * The associated Minecraft version of the cluster as last updated.
	 */
	mc_version: string;
	/**
	 * The associated mod [`Loader`] as specified in the cluster.
	 */
	loader?: Loader;
	/**
	 * The associated mod [`LoaderVersion`] if available.
	 */
	loader_version?: LoaderVersion | null;
	/**
	 * The time that the cluster was created in [`DateTime<Utc>`].
	 */
	created_at?: string;
	/**
	 * The time the cluster was last modified in [`DateTime<Utc>`].
	 */
	modified_at?: string;
	/**
	 * The last time the cluster was played in [`DateTime<Utc>`].
	 * (Defaults to None if the cluster has never been played)
	 */
	played_at?: string | null;
	/**
	 * The overall time played in seconds stored as a [`u64`].
	 */
	overall_played?: bigint;
	/**
	 * The recent time played stored as a [`u64`].
	 */
	recently_played?: bigint;
	/**
	 * The associated [`PackageData`] and modpack data for the cluster.
	 */
	package_data?: PackageData | null;
	/**
	 * The user-facing cluster icon as a [`PathBuf`].
	 */
	icon?: string | null;
	/**
	 * The user-facing cluster icon as a URL string.
	 */
	icon_url?: string | null;
};
/**
 * Relative Path wrapper to be used as an identifer for a cluster path.
 */
export type ClusterPath = string;
export interface ClusterPayload { uuid: string; cluster_path: ClusterPath; path: string; name: string; event: ClusterPayloadType };
export type ClusterPayloadType = 'created' | 'inserted' | 'synced' | 'edited' | 'deleted';
/**
 * Core Cluster stages used in package logic.
 */
export type ClusterStage =
/**
 * Installed with no downloads left.
 */
	'installed' |
/**
 * Downloading any sort of core metadata or mod file.
 */
	'downloading' |
/**
 * Downloading a full pack file, which is granted lower priority due to the high network demand.
 */
	'pack_downloading' |
/**
 * Not installed at all.
 */
	'not_installed';
export interface CreateCluster { name: string; mc_version: string; mod_loader: Loader; loader_version: string | null; icon: string | null; icon_url: string | null; package_data: PackageData | null; skip: boolean | null; skip_watch: boolean | null };
export interface DetailedProcess { uuid: string; user: string | null; started_at: string; pid: number };
/**
 * List of launcher types we support importing from.
 */
export type ImportType =
/**
 * `MultiMC` based launchers
 */
	'MultiMC' |
/**
 * Prism Launcher has its own category because it has different logic (also is objectively better than mmc)
 */
	'PrismLauncher' |
/**
 * `GDLauncher`
 */
	'GDLauncher' |
/**
 * Curseforge's launcher
 */
	'Curseforge' |
/**
 * `ATLauncher`
 */
	'ATLauncher' |
/**
 * Modrinth app.
 */
	'Modrinth' |
/**
 * `TLauncher`
 */
	'TLauncher' |
/**
 * FTB Launcher
 */
	'FTBLauncher' |
/**
 * Technic
 */
	'Technic' |
/**
 * Unknown import option (not widely adopted -> probably a custom launcher with a similar file structure to the above)
 */
	'Unknown';
export interface IngressPayload { event: IngressType; ingress_uuid: string; fraction: number | null; message: string };
export type IngressType = { type: 'initialize' } | { type: 'download_java'; version: number } | { type: 'download_loader'; cluster_path: string; cluster_name: string } | { type: 'sync_cluster'; cluster_path: string; cluster_name: string } | { type: 'copy_cluster'; import: string; cluster_name: string } | { type: 'sync_config'; new_path: string } | { type: 'archival'; cluster_path: string; cluster_name: string } | { type: 'download_package'; cluster_path: string; package_name: string; icon: string | null; package_id: string | null; package_version: string | null } | { type: 'download_pack'; cluster_path: string; package_name: string; icon: string | null; package_version: string };
/**
 * Global initialization hooks for all Minecraft clusters.
 */
export interface InitHooks {
/**
 * Pre-launch hook.
 */
	pre?: string | null;
	/**
	 * Wrapper hook for the runtime of the game instance.
	 */
	wrapper?: string | null;
	/**
	 * Post-launch hook.
	 */
	post?: string | null;
};
export type InternetPayload = { event: 'InstallPackage'; id: string } | { event: 'InstallPack'; id: string } | { event: 'InstallPath'; path: string };
/**
 * Custom Java arguments on a per-cluster basis.
 */
export interface JavaOptions {
/**
 * A custom java version from the global java store, if specified.
 */
	custom_version?: JavaVersion | null;
	/**
	 * Custom runtime arguments when running the cluster.
	 */
	custom_arguments?: string[] | null;
	/**
	 * Custom environment variables when running the cluster.
	 */
	custom_env_arguments?: ([string, string])[] | null;
};
/**
 * A struct representing a single version of the Java Runtime Environment.
 * Use [`locate_java`] to get an array of all located java instances on the machine.
 *
 * common java paths from <https://github.com/PrismLauncher/PrismLauncher/blob/develop/launcher/java/JavaUtils.cpp> under GPL 3.0
 *
 * java check functionality from <https://github.com/modrinth/theseus/blob/master/theseus/src/util/jre.rs> under MIT
 */
export interface JavaVersion { version: string; arch: string; path: string };
/**
 * A `HashMap` of all located and installed available Java versions
 */
export type JavaVersions = { [key in string]: JavaVersion };
export interface License { id?: string; name?: string; url?: string | null };
/**
 * Available mod loaders to be used for a cluster.
 */
export type Loader =
/**
 * The default vanilla loader, no modding supported.
 */
	'vanilla' |
/**
 * The `MinecraftForge` Minecraft mod loader.
 */
	'forge' |
/**
 * The `FabircMC` Minecraft mod loader.
 */
	'fabric' |
/**
 * The `NeoForge` Minecraft mod loader.
 */
	'neoforge' |
/**
 * The Quilt Minecraft mod loader.
 */
	'quilt' |
/**
 * The Legacy Fabric port mod loader.
 */
	'legacyfabric';
/**
 * A version of a Minecraft mod loader
 */
export interface LoaderVersion {
/**
 * The version ID of the loader
 */
	id: string;
	/**
	 * The URL of the version's manifest
	 */
	url: string;
	/**
	 * Whether the loader is stable or not
	 */
	stable: boolean;
};
/**
 * Universal interface for managed package dependencies.
 */
export interface ManagedDependency { version_id: string | null; package_id: string | null; file_name: string | null; dependency_type: PackageDependency };
/**
 * Universal metadata for any managed package from a Mod distribution platform.
 */
export interface ManagedPackage { provider: Providers; id: string; package_type: PackageType; title: string; description: string; body: PackageBody; main: string; versions: string[]; game_versions: string[]; loaders: Loader[]; icon_url: string | null; created: string; updated: string; client: PackageSide; server: PackageSide; downloads: bigint; followers: number; categories: string[]; optional_categories: string[] | null; license: License | null; author: Author; is_archived: boolean };
/**
 * Universal metadata for any managed user from a Mod distribution platform.
 */
export interface ManagedUser { id: string; username: string; url?: string | null; avatar_url?: string | null; bio?: string | null; is_organization_user?: boolean; role?: string | null };
/**
 * Universal managed package version of a package.
 */
export interface ManagedVersion { id: string; package_id: string; author: string; name: string; featured: boolean; version_display: string; changelog: string; changelog_url: string | null; published: string; downloads: number; version_type: ManagedVersionReleaseType; files: ManagedVersionFile[]; is_available: boolean; deps: ManagedDependency[]; game_versions: string[]; loaders: Loader[] };
/**
 * Universal interface for managed package files.
 */
export interface ManagedVersionFile { url: string; file_name: string; primary: boolean; size: bigint; file_type: PackageFile | null; hashes: { [key in string]: string } };
/**
 * Universal version release type
 */
export type ManagedVersionReleaseType = 'Release' | 'Alpha' | 'Beta' | 'Snapshot';
/**
 * Global memory settings across all clusters.
 */
export interface Memory {
/**
 * Maximum amount of Java memory available globally.
 */
	maximum: number;
	/**
	 * Minimum amount of Java memory available globally.
	 */
	minimum: number;
};
export interface MessagePayload { message: string };
/**
 * A structure of all needed Minecraft credentials for logging in and account management.
 */
export interface MinecraftCredentials {
/**
 * The uuid of the credentials.
 */
	id: string;
	/**
	 * The username of the Minecraft account.
	 */
	username: string;
	/**
	 * The access token as a String.
	 */
	access_token: string;
	/**
	 * The refresh token as a string for [`MinecraftState#refresh`].
	 */
	refresh_token: string;
	/**
	 * The time that the access token expires as a [`DateTime<Utc>`].
	 */
	expires: string;
};
export interface OfflinePayload { offline: boolean };
/**
 * A struct that represents a Package.
 */
export interface Package { sha1: string; meta: PackageMetadata; file_name: string; disabled: boolean };
export type PackageBody = { Url: string } | { Markdown: string };
/**
 * Optional data used to link a specific cluster to a package project.
 */
export interface PackageData {
/**
 * The package ID as a String.
 */
	package_id: string | null;
	/**
	 * The version of the package as a String.
	 */
	version_id: string | null;
	/**
	 * Whether or not the current package is locked (for legacy modpack support).
	 */
	locked?: boolean | null;
};
/**
 * The type of a [`ManagedDependency`].
 */
export type PackageDependency = 'Required' | 'Optional' | 'Incompatible' | 'Embedded';
/**
 * The file type of a [`Package`].
 */
export type PackageFile = 'required_pack' | 'optional_pack' | 'unknown';
/**
 * Metadata that represents a [`Package`].
 */
export type PackageMetadata = { type: 'managed'; package_id: string; provider: Providers; package_type: PackageType; title: string; version_id: string; version_formatted: string; mc_versions?: string[] | null; icon_url?: string | null } | { type: 'unknown' };
/**
 * Relative [`PathBuf`] for a specific [`Package`] of a [`Cluster`].
 */
export type PackagePath = string;
/**
 * The Client/Server side type of a [`Package`].
 */
export type PackageSide = 'required' | 'optional' | 'unsupported' | 'unknown';
/**
 * Represents types of packages handled by the launcher.
 */
export type PackageType =
/**
 * Represents a mod jarfile
 */
	'mod' |
/**
 * Represents a datapack file
 */
	'datapack' |
/**
 * Represents a resourcepack file
 */
	'resourcepack' |
/**
 * Represents a shaderpack file
 */
	'shaderpack' |
/**
 * Represents a modpack file
 */
	'modpack';
export interface Pagination { index: number; pageSize: number; resultCount: number; totalCount: number };
export interface ProcessPayload { uuid: string; pid: number; event: ProcessPayloadType; message: string };
export type ProcessPayloadType = 'started' | 'modified' | 'finished' | 'logging';
export interface ProgramInfo { launcher_version: string; webview_version: string; tauri_version: string; dev_build: boolean; platform: string; arch: string };
export interface ProviderSearchQuery { query: string | null; limit: number | null; offset: number | null; game_versions: string[] | null; categories: string[] | null; loaders: Loader[] | null; package_types: PackageType[] | null; open_source: boolean | null };
export interface ProviderSearchResults { provider: Providers; results: SearchResult[]; total: number };
/**
 * Providers for content packages
 */
export type Providers = 'Modrinth' | 'Curseforge';
/**
 * Global Minecraft resolution.
 */
export type Resolution = [number, number];
export interface SearchResult { slug: string; title: string; description: string; categories?: string[]; client_side: PackageSide; server_side: PackageSide; project_type: PackageType; downloads: bigint; icon_url?: string; project_id: string; author: string; display_categories?: string[]; versions: string[]; follows: number; date_created: string; date_modified: string };
/**
 * A global settings state for the launcher.
 */
export interface Settings {
/**
 * A `OneLauncher` [`Theme`] managed by the core GUI.
 */
	theme: Theme;
	/**
	 * A global browser list view for the `OneLauncher` GUI.
	 */
	browser_list_view?: BrowserListView;
	/**
	 * Does not ask for confirmation when closing the `OneLauncher` GUI
	 */
	hide_close_prompt?: boolean;
	/**
	 * Disables animations in the `OneLauncher` GUI
	 */
	disable_animations?: boolean;
	/**
	 * A global fullscreen Minecraft state.
	 */
	force_fullscreen?: boolean;
	/**
	 * Whether to allow launching the same cluster under the same account.
	 */
	allow_parallel_running_clusters?: boolean;
	/**
	 * Whether to launch Feral Gamemode on Linux systems.
	 */
	enable_gamemode?: boolean;
	/**
	 * A global default [`Resolution`] for Minecraft.
	 */
	resolution: Resolution;
	/**
	 * A global [`JavaVersions`] list and default version.
	 */
	java_versions: JavaVersions;
	/**
	 * A global [`Memory`] settings store for Java memory settings.
	 */
	memory: Memory;
	/**
	 * Global and default initialization hooks .
	 */
	init_hooks: InitHooks;
	/**
	 * Global and default custom Java arguments.
	 */
	custom_java_args: string[];
	/**
	 * Global and default custom environment variables.
	 */
	custom_env_args: ([string, string])[];
	/**
	 * Global and default maximum [`Semaphore`] I/O operations.
	 */
	max_async_io_operations: bigint;
	/**
	 * Global and default maximum [`Semaphore`] HTTP operations.
	 */
	max_async_fetches: bigint;
	/**
	 * The [`CURRENT_FORMAT_VERSION`] of this settings file.
	 */
	version: number;
	/**
	 * Whether or not to disable Discord IPC.
	 */
	disable_discord?: boolean;
	/**
	 * Whether or not to enable a debug mode in the launcher.
	 */
	debug_mode?: boolean;
	/**
	 * Whether or not to disable Plausible and Sentry analytics.
	 */
	disable_analytics?: boolean;
	/**
	 * The core global config directory stored as a [`PathBuf`].
	 */
	config_dir?: string | null;
	/**
	 * Whether or not to minimize the launcher upon a game launch.
	 */
	hide_on_launch?: boolean;
	/**
	 * Enable/disable custom window decorations.
	 */
	custom_frame?: boolean;
	/**
	 * Completed onboarding.
	 */
	onboarding_completed?: boolean;
};
/**
 * A `OneLauncher` theme managed by the GUI.
 */
export type Theme =
/**
 * A default Dark theme.
 */
	'dark' |
/**
 * A default Light theme.
 */
	'light' |
/**
 * OLED Dark Theme.
 */
	'oled' |
/**
 * Cute and colorful theme.
 */
	'cat';
export interface Update { version: string };
/**
 * A game version of Minecraft
 */
export interface Version {
/**
 * A unique identifier of the version
 */
	id: string;
	/**
	 * The release type of the version
	 */
	type: VersionType;
	/**
	 * A link to additional information about the version
	 */
	url: string;
	/**
	 * The latest time a file in this version was updated
	 */
	time: string;
	/**
	 * The time this version was released
	 */
	releaseTime: string;
	/**
	 * The SHA1 hash of the additional information about the version
	 */
	sha1: string;
	/**
	 * Whether the version supports the latest player safety features
	 */
	complianceLevel: number;
	/**
	 * The SHA1 hash of the original unmodified Minecraft version's JSON
	 * This is only available when using the Pulseflow mirror
	 */
	originalSha1?: string | null;
};
/**
 * The version type of Minecraft
 */
export type VersionType =
/**
 * A major version, which is stable for all players to use
 */
	'release' |
/**
 * An experimental version, which is unstable and used for feature previews and beta testing
 */
	'snapshot' |
/**
 * The oldest versions before the game was released
 */
	'old_alpha' |
/**
 * Early versions of the game
 */
	'old_beta';

interface __EventObj__<T> {
	listen: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
	once: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
	emit: null extends T
		? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
		: (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
}

export type Result<T, E> =
	| { status: 'ok'; data: T }
	| { status: 'error'; error: E };

function __makeEvents__<T extends Record<string, any>>(
	mappings: Record<keyof T, string>,
) {
	return new Proxy(
		{} as unknown as {
			[K in keyof T]: __EventObj__<T[K]> & {
				(handle: __WebviewWindow__): __EventObj__<T[K]>;
			};
		},
		{
			get: (_, event) => {
				const name = mappings[event as keyof T];

				return new Proxy((() => {}) as any, {
					apply: (_, __, [window]: [__WebviewWindow__]) => ({
						listen: (arg: any) => window.listen(name, arg),
						once: (arg: any) => window.once(name, arg),
						emit: (arg: any) => window.emit(name, arg),
					}),
					get: (_, command: keyof __EventObj__<any>) => {
						switch (command) {
							case 'listen':
								return (arg: any) => TAURI_API_EVENT.listen(name, arg);
							case 'once':
								return (arg: any) => TAURI_API_EVENT.once(name, arg);
							case 'emit':
								return (arg: any) => TAURI_API_EVENT.emit(name, arg);
						}
					},
				});
			},
		},
	);
}
