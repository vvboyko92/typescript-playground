import {Canvas, Scene, ShaderProgram, Buffers} from "./WebGl/index";

window.onload = (): void => {
    const canvas = Canvas.getInstance().getCanvas();
    if (canvas) {
        const gl = <WebGLRenderingContext|null>canvas.getContext("webgl");

        // Only continue if WebGL is available and working
        if (gl === null) {
            throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
        }

        Scene.clearScene(gl);

        // Initialize a shader program; this is where all the lighting
        // for the vertices and so forth is established.
        const vsSource = ShaderProgram.createVertexShaderProgram();
        const fsSource = ShaderProgram.createFragmentShaderProgram();
        const shaderProgram = ShaderProgram.initShaderProgram(gl, vsSource, fsSource);

        const programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            },
            uniformLocations: {
                projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
                modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            },
        };

        const buffers = Buffers.initBuffers(gl);

        Scene.drawScene(gl, programInfo, buffers);
    }
};