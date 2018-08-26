export abstract class Sprite {
    constructor(
        public game: any,
        public x: number,
        public y: number,
        public dx: number,
        public dy: number,
        public image: HTMLImageElement,
        public color: string,
        public width: number,
        public height: number,
        public type: string,
        public ttl: number = Infinity
    ) {
    }
    public id: number = new Date().getUTCMilliseconds();
}