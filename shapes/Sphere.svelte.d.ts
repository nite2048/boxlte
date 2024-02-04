/** @typedef {typeof __propDef.props}  SphereProps */
/** @typedef {typeof __propDef.events}  SphereEvents */
/** @typedef {typeof __propDef.slots}  SphereSlots */
export default class Sphere extends SvelteComponent<{
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
        z: number;
        all: number;
    };
    material?: three.MeshStandardMaterial;
    color?: three.Color;
    radius?: number;
    noShadowCast?: boolean;
    noShadowReceive?: boolean;
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
export type SphereProps = typeof __propDef.props;
export type SphereEvents = typeof __propDef.events;
export type SphereSlots = typeof __propDef.slots;
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
            z: number;
            all: number;
        };
        material?: three.MeshStandardMaterial;
        color?: three.Color;
        radius?: number;
        noShadowCast?: boolean;
        noShadowReceive?: boolean;
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
