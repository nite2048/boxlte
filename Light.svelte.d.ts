/** @typedef {typeof __propDef.props}  LightProps */
/** @typedef {typeof __propDef.events}  LightEvents */
/** @typedef {typeof __propDef.slots}  LightSlots */
export default class Light extends SvelteComponent<{
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
    color?: string;
    near?: number;
    far?: number;
    intensity?: number;
    distance?: number;
    angle?: number;
    decay?: number;
    penumbra?: number;
    directional?: boolean;
    spot?: boolean;
    point?: boolean;
    noCastShadow?: boolean;
    mapSize?: {
        width: number;
        height: number;
    };
}, {
    render: CustomEvent<any>;
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        light: three.SpotLight | three.PointLight | three.DirectionalLight;
    };
}> {
}
export type LightProps = typeof __propDef.props;
export type LightEvents = typeof __propDef.events;
export type LightSlots = typeof __propDef.slots;
import * as three from "three";
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
        color?: string;
        near?: number;
        far?: number;
        intensity?: number;
        distance?: number;
        angle?: number;
        decay?: number;
        penumbra?: number;
        directional?: boolean;
        spot?: boolean;
        point?: boolean;
        noCastShadow?: boolean;
        mapSize?: {
            width: number;
            height: number;
        };
    };
    events: {
        render: CustomEvent<any>;
        start: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            light: three.SpotLight | three.PointLight | three.DirectionalLight;
        };
    };
};
export {};
