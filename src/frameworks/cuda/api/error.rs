//! Provides Rust Errors for OpenCL's status.

use std::{fmt, error};

#[derive(Debug)]
/// Defines OpenCL errors.
pub enum Error {
    /// Failure with provided platform.
    InvalidPlatform(String),
    /// Failure with provided device param.
    InvalidDevice(String),
    /// Failure with provided platform.
    InvalidDeviceType(String),
    /// Failure with provided context.
    InvalidContext(String),
    /// Failure with provided memory object.
    InvalidMemObject(String),
    /// Failure with provided command queue.
    InvalidCommandQueue(String),
    /// Failure with provided event list.
    InvalidEventWaitList(String),
    /// Failure with provided param(s).
    InvalidValue(String),
    /// Failure with provided property param.
    InvalidProperty(String),
    /// Failure with provided operation param.
    InvalidOperation(String),
    /// Failure with provided buffer size.
    InvalidBufferSize(String),
    /// Failure with provided host pointer.
    InvalidHostPtr(String),
    /// Failure with device availability.
    DeviceNotFound(String),
    /// Failure with device availability.
    DeviceNotAvailable(String),
    /// Failure to allocate memory.
    MemObjectAllocationFailure(String),
    /// Failure with sub buffer offset.
    MisalignedSubBufferOffset(String),
    /// Failure with events in wait list.
    ExecStatusErrorForEventsInWaitList(String),
    /// Failure to allocate resources on the device.
    OutOfResources(String),
    /// Failure to allocate resources on the host.
    OutOfHostMemory(String),
    /// Failure not closer defined.
    Other(String),
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            Error::InvalidPlatform(ref err) => write!(f, "{:?}", err),
            Error::InvalidDevice(ref err) => write!(f, "{:?}", err),
            Error::InvalidDeviceType(ref err) => write!(f, "{:?}", err),
            Error::InvalidContext(ref err) => write!(f, "{:?}", err),
            Error::InvalidMemObject(ref err) => write!(f, "{:?}", err),
            Error::InvalidCommandQueue(ref err) => write!(f, "{:?}", err),
            Error::InvalidEventWaitList(ref err) => write!(f, "{:?}", err),
            Error::InvalidValue(ref err) => write!(f, "{:?}", err),
            Error::InvalidProperty(ref err) => write!(f, "{:?}", err),
            Error::InvalidOperation(ref err) => write!(f, "{:?}", err),
            Error::InvalidBufferSize(ref err) => write!(f, "{:?}", err),
            Error::InvalidHostPtr(ref err) => write!(f, "{:?}", err),
            Error::DeviceNotFound(ref err) => write!(f, "{:?}", err),
            Error::DeviceNotAvailable(ref err) => write!(f, "{:?}", err),
            Error::MemObjectAllocationFailure(ref err) => write!(f, "{:?}", err),
            Error::MisalignedSubBufferOffset(ref err) => write!(f, "{:?}", err),
            Error::ExecStatusErrorForEventsInWaitList(ref err) => write!(f, "{:?}", err),
            Error::OutOfResources(ref err) => write!(f, "{:?}", err),
            Error::OutOfHostMemory(ref err) => write!(f, "{:?}", err),
            Error::Other(ref err) => write!(f, "{:?}", err),
        }
    }
}

impl error::Error for Error {
    fn description(&self) -> &str {
        match *self {
            Error::InvalidPlatform(ref err) => err,
            Error::InvalidDevice(ref err) => err,
            Error::InvalidDeviceType(ref err) => err,
            Error::InvalidContext(ref err) => err,
            Error::InvalidMemObject(ref err) => err,
            Error::InvalidCommandQueue(ref err) => err,
            Error::InvalidEventWaitList(ref err) => err,
            Error::InvalidValue(ref err) => err,
            Error::InvalidProperty(ref err) => err,
            Error::InvalidOperation(ref err) => err,
            Error::InvalidBufferSize(ref err) => err,
            Error::InvalidHostPtr(ref err) => err,
            Error::DeviceNotFound(ref err) => err,
            Error::DeviceNotAvailable(ref err) => err,
            Error::MemObjectAllocationFailure(ref err) => err,
            Error::MisalignedSubBufferOffset(ref err) => err,
            Error::ExecStatusErrorForEventsInWaitList(ref err) => err,
            Error::OutOfResources(ref err) => err,
            Error::OutOfHostMemory(ref err) => err,
            Error::Other(ref err) => err,
        }
    }

    fn cause(&self) -> Option<&error::Error> {
        match *self {
            Error::InvalidPlatform(_) => None,
            Error::InvalidDevice(_) => None,
            Error::InvalidDeviceType(_) => None,
            Error::InvalidContext(_) => None,
            Error::InvalidMemObject(_) => None,
            Error::InvalidCommandQueue(_) => None,
            Error::InvalidEventWaitList(_) => None,
            Error::InvalidValue(_) => None,
            Error::InvalidProperty(_) => None,
            Error::InvalidOperation(_) => None,
            Error::InvalidBufferSize(_) => None,
            Error::InvalidHostPtr(_) => None,
            Error::DeviceNotFound(_) => None,
            Error::DeviceNotAvailable(_) => None,
            Error::MemObjectAllocationFailure(_) => None,
            Error::MisalignedSubBufferOffset(_) => None,
            Error::ExecStatusErrorForEventsInWaitList(_) => None,
            Error::OutOfResources(_) => None,
            Error::OutOfHostMemory(_) => None,
            Error::Other(_) => None,
        }
    }
}
