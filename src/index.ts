import {Canvas} from "./WebGl/index";

window.onload = (): void => {
    const canvas = Canvas.getInstance().getCanvas();
    if (canvas) {
        const gl = <WebGLRenderingContext|null>canvas.getContext("webgl");

        // Only continue if WebGL is available and working
        if (gl === null) {
            throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
        }

        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
};