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
                vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
            },
            uniformLocations: {
                projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
                modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            },
        };

        const buffers = Buffers.initBuffers(gl);

        let squareRotation = 0.0;
        let then = 0;

        const render = (now: number) => {
            now *= 0.001;  // convert to seconds
            const deltaTime = now - then;
            then = now;
            squareRotation += deltaTime;
            Scene.drawScene(gl, programInfo, buffers, squareRotation);

            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
    }
};