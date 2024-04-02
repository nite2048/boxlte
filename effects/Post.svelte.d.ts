/** @typedef {typeof __propDef.props}  PostProps */
/** @typedef {typeof __propDef.events}  PostEvents */
/** @typedef {typeof __propDef.slots}  PostSlots */
export default class Post extends SvelteComponent<{
    debug?: boolean;
    amount?: number;
    afterImage?: boolean;
    antialiasing?: boolean;
    gammaCorrection?: boolean;
    sepia?: boolean;
    vignette?: boolean;
    dampening?: number;
    darkness?: number;
    offset?: number;
}, {
    render: CustomEvent<any>;
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PostProps = typeof __propDef.props;
export type PostEvents = typeof __propDef.events;
export type PostSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        debug?: boolean;
        amount?: number;
        afterImage?: boolean;
        antialiasing?: boolean;
        gammaCorrection?: boolean;
        sepia?: boolean;
        vignette?: boolean;
        dampening?: number;
        darkness?: number;
        offset?: number;
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
