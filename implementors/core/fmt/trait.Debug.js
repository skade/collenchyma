(function() {var implementors = {};
implementors['byteorder'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='byteorder/enum.Error.html' title='byteorder::Error'>Error</a>",];implementors['libc'] = [];implementors['rustc_serialize'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/base64/enum.FromBase64Error.html' title='rustc_serialize::base64::FromBase64Error'>FromBase64Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/hex/enum.FromHexError.html' title='rustc_serialize::hex::FromHexError'>FromHexError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.Json.html' title='rustc_serialize::json::Json'>Json</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.ParserError.html' title='rustc_serialize::json::ParserError'>ParserError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.DecoderError.html' title='rustc_serialize::json::DecoderError'>DecoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.EncoderError.html' title='rustc_serialize::json::EncoderError'>EncoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.ErrorCode.html' title='rustc_serialize::json::ErrorCode'>ErrorCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.JsonEvent.html' title='rustc_serialize::json::JsonEvent'>JsonEvent</a>","impl&lt;'l&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.StackElement.html' title='rustc_serialize::json::StackElement'>StackElement</a>&lt;'l&gt;",];implementors['num'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='num/bigint/enum.Sign.html' title='num::bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='num/bigint/enum.ParseBigIntError.html' title='num::bigint::ParseBigIntError'>ParseBigIntError</a>","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/complex/struct.Complex.html' title='num::complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/rational/struct.ParseRatioError.html' title='num::rational::ParseRatioError'>ParseRatioError</a>",];implementors['enum_primitive'] = [];implementors['rblas'] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='rblas/math/mat/struct.Mat.html' title='rblas::math::mat::Mat'>Mat</a>&lt;T&gt;",];implementors['collenchyma'] = ["impl&lt;F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/framework/trait.IFramework.html' title='collenchyma::framework::IFramework'>IFramework</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/backend/struct.Backend.html' title='collenchyma::backend::Backend'>Backend</a>&lt;F&gt;","impl&lt;F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/framework/trait.IFramework.html' title='collenchyma::framework::IFramework'>IFramework</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/backend/struct.BackendConfig.html' title='collenchyma::backend::BackendConfig'>BackendConfig</a>&lt;F&gt; <span class='where'>where F::H: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/device/enum.DeviceType.html' title='collenchyma::device::DeviceType'>DeviceType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/hardware/enum.HardwareType.html' title='collenchyma::hardware::HardwareType'>HardwareType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/framework/enum.Error.html' title='collenchyma::framework::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/device/struct.Cpu.html' title='collenchyma::frameworks::native::device::Cpu'>Cpu</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/flatbox/struct.FlatBox.html' title='collenchyma::frameworks::native::flatbox::FlatBox'>FlatBox</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/hardware/struct.Hardware.html' title='collenchyma::frameworks::native::hardware::Hardware'>Hardware</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/function/struct.Function.html' title='collenchyma::frameworks::native::function::Function'>Function</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/binary/struct.Binary.html' title='collenchyma::frameworks::native::binary::Binary'>Binary</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/struct.Native.html' title='collenchyma::frameworks::native::Native'>Native</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/device/struct.Device.html' title='collenchyma::frameworks::opencl::device::Device'>Device</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/device/struct.DeviceInfo.html' title='collenchyma::frameworks::opencl::device::DeviceInfo'>DeviceInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/platform/struct.Platform.html' title='collenchyma::frameworks::opencl::platform::Platform'>Platform</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/context/struct.Context.html' title='collenchyma::frameworks::opencl::context::Context'>Context</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/memory/struct.Memory.html' title='collenchyma::frameworks::opencl::memory::Memory'>Memory</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/memory/struct.MemoryFlags.html' title='collenchyma::frameworks::opencl::memory::MemoryFlags'>MemoryFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/queue/struct.Queue.html' title='collenchyma::frameworks::opencl::queue::Queue'>Queue</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/kernel/struct.Kernel.html' title='collenchyma::frameworks::opencl::kernel::Kernel'>Kernel</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/program/struct.Program.html' title='collenchyma::frameworks::opencl::program::Program'>Program</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/frameworks/opencl/enum.Error.html' title='collenchyma::frameworks::opencl::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/struct.API.html' title='collenchyma::frameworks::opencl::API'>API</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/opencl/struct.OpenCL.html' title='collenchyma::frameworks::opencl::OpenCL'>OpenCL</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/device/struct.Device.html' title='collenchyma::frameworks::cuda::device::Device'>Device</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/device/struct.DeviceInfo.html' title='collenchyma::frameworks::cuda::device::DeviceInfo'>DeviceInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/context/struct.Context.html' title='collenchyma::frameworks::cuda::context::Context'>Context</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/function/struct.Function.html' title='collenchyma::frameworks::cuda::function::Function'>Function</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/memory/struct.Memory.html' title='collenchyma::frameworks::cuda::memory::Memory'>Memory</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/memory/struct.MemoryFlags.html' title='collenchyma::frameworks::cuda::memory::MemoryFlags'>MemoryFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/module/struct.Module.html' title='collenchyma::frameworks::cuda::module::Module'>Module</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/frameworks/cuda/enum.Error.html' title='collenchyma::frameworks::cuda::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/struct.API.html' title='collenchyma::frameworks::cuda::API'>API</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/cuda/struct.Cuda.html' title='collenchyma::frameworks::cuda::Cuda'>Cuda</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/memory/enum.MemoryType.html' title='collenchyma::memory::MemoryType'>MemoryType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/libraries/blas/enum.Error.html' title='collenchyma::libraries::blas::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/libraries/enum.Error.html' title='collenchyma::libraries::Error'>Error</a>","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/shared_memory/struct.SharedMemory.html' title='collenchyma::shared_memory::SharedMemory'>SharedMemory</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/shared_memory/enum.Error.html' title='collenchyma::shared_memory::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/error/enum.Error.html' title='collenchyma::error::Error'>Error</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
