/** @typedef {typeof __propDef.props}  GlitchProps */
/** @typedef {typeof __propDef.events}  GlitchEvents */
/** @typedef {typeof __propDef.slots}  GlitchSlots */
export default class Glitch extends SvelteComponent<{
    angle?: any;
    debug?: boolean;
    amount?: number;
    seedX?: any;
    seedY?: any;
    distortionX?: any;
    distortionY?: any;
    columns?: number;
    wild?: boolean;
}, {
    render: CustomEvent<any>;
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GlitchProps = typeof __propDef.props;
export type GlitchEvents = typeof __propDef.events;
export type GlitchSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        angle?: any;
        debug?: boolean;
        amount?: number;
        seedX?: any;
        seedY?: any;
        distortionX?: any;
        distortionY?: any;
        columns?: number;
        wild?: boolean;
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
