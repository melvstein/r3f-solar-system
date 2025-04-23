import { Texture } from "three";

export type TRing = {
    color: number | string;
    innerRadius: number;
    outerRadius: number;
    tilt: number;
    opacity: number;
}

export type TMoon = {
    name: string;
    radius: number;
    distance: number;
    speed: number;
    texture: Texture;
}

export type TAtmosphere = {
    radius: number;
    color: number | string;
    opacity: number;
    emissive: number | string;
    emissiveIntensity: number;
}

export type TPlanet = {
    name: string;
    radius: number;
    distance: number;
    speed: number;
    ring?: TRing | null;
    atmosphere?: TAtmosphere;
    moons?: TMoon[];
    texture: Texture
}

export type TStar = {
    name: string;
    radius: number;
    rotationSpeed: number;
    texture: Texture;
}