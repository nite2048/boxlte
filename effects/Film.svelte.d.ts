/** @typedef {typeof __propDef.props}  FilmProps */
/** @typedef {typeof __propDef.events}  FilmEvents */
/** @typedef {typeof __propDef.slots}  FilmSlots */
export default class Film extends SvelteComponent<{
    intensity?: number;
    debug?: boolean;
    grayscale?: boolean;
}, {
    render: CustomEvent<any>;
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FilmProps = typeof __propDef.props;
export type FilmEvents = typeof __propDef.events;
export type FilmSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        intensity?: number;
        debug?: boolean;
        grayscale?: boolean;
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
