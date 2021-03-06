//! Provides the generic functionality of a hardware supporting frameworks such as native CPU, OpenCL,
//! CUDA, etc..
//! [hardware]: ../hardware/index.html
//!
//! The default Framework would be plain host CPU for common computation. To make use of other
//! computation hardwares such as GPUs you would choose other computation Frameworks such as OpenCL
//! or CUDA, which provide the access to those hardwares for computation.
//!
//! To start backend-agnostic and highly parallel computation, you start by initializing on of the
//! Framework implementations, resulting in an initialized Framework, that contains among
//! other things, a list of all available hardwares through that framework.
//!
//! ## Examples
//!
//! ```
//! // Initializing a Framework
//! // let framework: Framework = OpenCL::new();
//! // let backend: Backend = framework.create_backend();
//! ```

use hardware::IHardware;
use device::{IDevice, DeviceType};
use binary::IBinary;
use frameworks::opencl::Error as OpenCLError;
use std::error;
use std::fmt;

/// Defines a Framework.
pub trait IFramework {
    /// The Hardware representation for this Framework.
    type H: IHardware;
    /// The Device representation for this Framework.
    type D: IDevice + Clone;
    /// The Binary representation for this Framework.
    type B: IBinary + Clone;

    /// Defines the Framework by a Name.
    ///
    /// For convention, let the ID be uppercase.<br/>
    /// EXAMPLE: OPENCL
    const ID: &'static str;

    /// Initializes a new Framework.
    ///
    /// Loads all the available hardwares
    fn new() -> Self where Self: Sized;

    /// Initializes all the available hardwares.
    fn load_hardwares() -> Result<Vec<Self::H>, Error>;

    /// Returns the cached and available hardwares.
    fn hardwares(&self) -> Vec<Self::H>;

    /// Returns the initialized binary.
    fn binary(&self) -> Self::B;

    /// Initializes a new Device from the provided hardwares.
    fn new_device(&self, Vec<Self::H>) -> Result<DeviceType, Error>;
}

#[derive(Debug)]
/// Defines a generic set of Framework Errors.
pub enum Error {
    /// Failures related to the OpenCL framework implementation.
    OpenCL(OpenCLError),
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            Error::OpenCL(ref err) => write!(f, "OpenCL error: {}", err),
        }
    }
}

impl error::Error for Error {
    fn description(&self) -> &str {
        match *self {
            Error::OpenCL(ref err) => err.description(),
        }
    }

    fn cause(&self) -> Option<&error::Error> {
        match *self {
            Error::OpenCL(ref err) => Some(err),
        }
    }
}

impl From<OpenCLError> for Error {
    fn from(err: OpenCLError) -> Error {
        Error::OpenCL(err)
    }
}

impl From<Error> for ::error::Error {
    fn from(err: Error) -> ::error::Error {
        ::error::Error::Framework(err)
    }
}
