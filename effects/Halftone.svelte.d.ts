/** @typedef {typeof __propDef.props}  HalftoneProps */
/** @typedef {typeof __propDef.events}  HalftoneEvents */
/** @typedef {typeof __propDef.slots}  HalftoneSlots */
export default class Halftone extends SvelteComponent<{
    blending?: number;
    radius?: number;
    debug?: boolean;
    grayscale?: boolean;
    disable?: boolean;
    shape?: number;
    rotationR?: number;
    rotationG?: number;
    rotationB?: number;
    scatter?: number;
    blendingMode?: number;
}, {
    render: CustomEvent<any>;
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HalftoneProps = typeof __propDef.props;
export type HalftoneEvents = typeof __propDef.events;
export type HalftoneSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        blending?: number;
        radius?: number;
        debug?: boolean;
        grayscale?: boolean;
        disable?: boolean;
        shape?: number;
        rotationR?: number;
        rotationG?: number;
        rotationB?: number;
        scatter?: number;
        blendingMode?: number;
    };
    events: {
        render: CustomEvent<any>;
        start: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
