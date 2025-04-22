import { Texture } from "three";

export type TRing = {
    innerRadius: number;
    outerRadius: number;
    tilt: number;
}

export type TMoon = {
    name: string;
    radius: number;
    distance: number;
    speed: number;
    texture: Texture;
}

export type TPlanet = {
    name: string;
    radius: number;
    distance: number;
    speed: number;
    ring?: TRing | null;
    moons?: TMoon[];
    texture: Texture
}

export type TStar = {
    name: string;
    radius: number;
    rotationSpeed: number;
    texture: Texture;
}