/** @typedef {typeof __propDef.props}  CustomProps */
/** @typedef {typeof __propDef.events}  CustomEvents */
/** @typedef {typeof __propDef.slots}  CustomSlots */
export default class Custom extends SvelteComponent<{
    path: any;
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
}, {
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
export type CustomProps = typeof __propDef.props;
export type CustomEvents = typeof __propDef.events;
export type CustomSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        path: any;
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
    };
    events: {
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
