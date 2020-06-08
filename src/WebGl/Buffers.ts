import IPositionBuffer from "./IPositionBuffer"

class Buffers {
    public static initBuffers(gl: WebGLRenderingContext): IPositionBuffer {
        const positionBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        const positions = [
            -1.0,  1.0,
            1.0,  1.0,
            -1.0, -1.0,
            1.0, -1.0,
        ];

        gl.bufferData(gl.ARRAY_BUFFER,
            new Float32Array(positions),
            gl.STATIC_DRAW);

        return {
            position: positionBuffer,
        };
    }
}

export default Buffers;