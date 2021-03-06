//! Provides a safe wrapper around Cuda.

pub use self::error::Error;

#[derive(Debug, Copy, Clone)]
/// Defines the Cuda API.
pub struct API;

mod error;
mod context;
mod device;
mod memory;
mod ffi;
pub mod types;
