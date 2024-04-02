/** @typedef {typeof __propDef.props}  BloomProps */
/** @typedef {typeof __propDef.events}  BloomEvents */
/** @typedef {typeof __propDef.slots}  BloomSlots */
export default class Bloom extends SvelteComponent<{
    radius?: number;
    renderer?: any;
    debug?: boolean;
    strength?: number;
    threshold?: number;
    exposure?: number;
}, {
    render: CustomEvent<any>;
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BloomProps = typeof __propDef.props;
export type BloomEvents = typeof __propDef.events;
export type BloomSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        radius?: number;
        renderer?: any;
        debug?: boolean;
        strength?: number;
        threshold?: number;
        exposure?: number;
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
