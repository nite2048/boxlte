/** @typedef {typeof __propDef.props}  BoxProps */
/** @typedef {typeof __propDef.events}  BoxEvents */
/** @typedef {typeof __propDef.slots}  BoxSlots */
export default class Box extends SvelteComponent<{
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
export type BoxProps = typeof __propDef.props;
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
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
