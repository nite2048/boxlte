/** @typedef {typeof __propDef.props}  WorldProps */
/** @typedef {typeof __propDef.events}  WorldEvents */
/** @typedef {typeof __propDef.slots}  WorldSlots */
export default class World extends SvelteComponent<{
    scene: any;
    composer: any;
    camera: any;
    renderer: any;
    rendererSettings: any;
    focus?: any;
    cameraSettings?: {
        fov: number;
        near: number;
        far: number;
    };
    cameraPosition?: {
        x: number;
        y: number;
        z: number;
    };
    cameraRotation?: {
        x: number;
        y: number;
        z: number;
        all: number;
        bind: boolean;
    };
    noShadows?: boolean;
    noAntialias?: boolean;
    noAmbience?: boolean;
    centerFocus?: boolean;
    ambientLightColor?: string;
    ambientLightIntensity?: number;
}, {
    start: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        scene: any;
        camera: any;
        renderer: any;
    };
}> {
}
export type WorldProps = typeof __propDef.props;
export type WorldEvents = typeof __propDef.events;
export type WorldSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        scene: any;
        composer: any;
        camera: any;
        renderer: any;
        rendererSettings: any;
        focus?: any;
        cameraSettings?: {
            fov: number;
            near: number;
            far: number;
        };
        cameraPosition?: {
            x: number;
            y: number;
            z: number;
        };
        cameraRotation?: {
            x: number;
            y: number;
            z: number;
            all: number;
            bind: boolean;
        };
        noShadows?: boolean;
        noAntialias?: boolean;
        noAmbience?: boolean;
        centerFocus?: boolean;
        ambientLightColor?: string;
        ambientLightIntensity?: number;
    };
    events: {
        start: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            scene: any;
            camera: any;
            renderer: any;
        };
    };
};
export {};
