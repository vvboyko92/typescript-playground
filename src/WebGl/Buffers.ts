import IBuffer from "./IBuffer"
import store from "../ReactJs/store";

class Buffers {
    public static initBuffers(gl: WebGLRenderingContext): IBuffer {
        const webGlParams = <any>store.getState().webGlParams;
        const colors = webGlParams.colors;

        const colorBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW)

        const positions = [
            -1.0,  1.0,
            1.0,  1.0,
            -1.0, -1.0,
            1.0, -1.0,
        ];

        const positionBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        return {
            position: positionBuffer,
            color: colorBuffer
        };
    }
}

export default Buffers;