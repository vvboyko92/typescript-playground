import settings from "../../settings.json";

class Canvas {
    private static instance: Canvas;

    private canvas?: HTMLCanvasElement;

    private constructor () {
        this.setCanvas();
    }

    public static getInstance(): Canvas {
        if (!Canvas.instance) {
            Canvas.instance = new Canvas();
        }

        return Canvas.instance;
    }

    private setCanvas(): void {
        this.canvas = <HTMLCanvasElement|null>document.getElementById(`${settings.canvasId}`);

        if (!this.canvas) {
            throw new Error(`Couldn't find canvas with id #${settings.canvasId}`)
        }
    }

    public getCanvas(): HTMLCanvasElement | undefined {
        return this.canvas
    }
}

export default Canvas;