const goWasm = new Go()

WebAssembly.instantiateStreaming(fetch("test.wasm"), goWasm.importObject)
  .then((result) => {
    goWasm.run(result.instance)
  })
