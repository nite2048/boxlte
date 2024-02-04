/** @typedef {typeof __propDef.props}  PlaneProps */
/** @typedef {typeof __propDef.events}  PlaneEvents */
/** @typedef {typeof __propDef.slots}  PlaneSlots */
export default class Plane extends SvelteComponent<{
    position?: {
        x: number;
        y: number;
        z: number;
    };
    rotation?: {
        x: number;
        y: number;
        z: number;
        all: number;
    };
    scale?: {
        x: number;
        y: number;
        all: number;
    };
    material?: three.MeshStandardMaterial;
    color?: three.Color;
    radius?: number;
    noShadowCast?: boolean;
    noShadowReceive?: boolean;
    segments?: number;
    theta?: number;
    alignHorizontal?: boolean;
    alignVertical?: boolean;
    alignSideways?: boolean;
    rounded?: boolean;
}, {
    render: CustomEvent<any>;
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        rotation: {
            x: number;
            y: number;
            z: number;
            all: number;
        };
    };
}> {
}
export type PlaneProps = typeof __propDef.props;
export type PlaneEvents = typeof __propDef.events;
export type PlaneSlots = typeof __propDef.slots;
import * as three from 'three';
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        position?: {
            x: number;
            y: number;
            z: number;
        };
        rotation?: {
            x: number;
            y: number;
            z: number;
            all: number;
        };
        scale?: {
            x: number;
            y: number;
            all: number;
        };
        material?: three.MeshStandardMaterial;
        color?: three.Color;
        radius?: number;
        noShadowCast?: boolean;
        noShadowReceive?: boolean;
        segments?: number;
        theta?: number;
        alignHorizontal?: boolean;
        alignVertical?: boolean;
        alignSideways?: boolean;
        rounded?: boolean;
    };
    events: {
        render: CustomEvent<any>;
        start: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            rotation: {
                x: number;
                y: number;
                z: number;
                all: number;
            };
        };
    };
};
export {};
