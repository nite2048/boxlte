/** @typedef {typeof __propDef.props}  EmptyProps */
/** @typedef {typeof __propDef.events}  EmptyEvents */
/** @typedef {typeof __propDef.slots}  EmptySlots */
export default class Empty extends SvelteComponent<{
    [x: string]: never;
}, {
    render: CustomEvent<any>;
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EmptyProps = typeof __propDef.props;
export type EmptyEvents = typeof __propDef.events;
export type EmptySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
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
