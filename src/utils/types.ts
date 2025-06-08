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
    atmosphere?: TAtmosphere | null;
    ring?: TRing | null;
    moons?: TMoon[];
}

export type TStar = {
    name: string;
    radius: number;
    rotationSpeed: number;
    texture: Texture;
}

export type TPlanetsResponse = {
    data : {
        content : TPlanet[];
    };
}