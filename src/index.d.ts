export class SnowFlake {
    constructor(datacenter: number);

    newoid(prefix: string): string;
}