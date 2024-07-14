//! **OneLauncher Constants**
//!
//! Public constant variables and strings that are used throughout the launcher.
//! Can be shared publically, any encrypted secrets should be stored in [`crate::store::credentials`].

// Basic Metadata
pub const NAME: &str = "OneLauncher";
pub const VERSION: &str = "0.1.0";

// Authentication and HTTP (TODO: env?)
pub const APP_CONFIG_DIR: &str = "org.polyfrost.launcher";
pub const DISCORD_RPC_CLIENT_ID: &str = "1234567890000000";

// Microsoft Authentication
pub const CLIENT_ID: &str = "9419b7ee-1448-4d1b-b52a-550d8f36ab56";
pub const MICROSOFT_CLIENT_ID: &str = "";

// OS constants which match Minecraft's/Mojang's scheme
#[cfg(target_os = "windows")]
pub const TARGET_OS: &str = "windows";

#[cfg(target_os = "macos")]
pub const TARGET_OS: &str = "osx";

#[cfg(target_os = "linux")]
pub const TARGET_OS: &str = "linux";

#[cfg(target_arch = "x86")]
pub const NATIVE_ARCH: &str = "32";

#[cfg(target_arch = "x86_64")]
pub const NATIVE_ARCH: &str = "64";

// TODO: Add more architectures
#[cfg(all(not(target_arch = "x86_64"), not(target_arch = "x86")))]
pub const NATIVE_ARCH: &str = "64";

// Minecraft library splitter
#[cfg(target_os = "windows")]
pub const LIBRARY_SPLITTER: &str = ";";

#[cfg(not(target_os = "windows"))]
pub const LIBRARY_SPLITTER: &str = ":";