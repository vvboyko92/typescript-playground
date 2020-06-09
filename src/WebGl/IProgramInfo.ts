interface IAttribLocations {
    vertexPosition: number;
    vertexColor?: number;
}

interface IUniformLocations {
    projectionMatrix: WebGLUniformLocation;
    modelViewMatrix: WebGLUniformLocation;
}
export default interface IProgramInfo {
    program: WebGLProgram;
    attribLocations: IAttribLocations;
    uniformLocations: IUniformLocations;
}