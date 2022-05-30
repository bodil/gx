
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Adw-1
 */

import type * as Gjs from './Gjs.js';
import type Gtk from './Gtk-4.0.js';
import type Gsk from './Gsk-4.0.js';
import type Graphene from './Graphene-1.0.js';
import type GObject from './GObject-2.0.js';
import type GLib from './GLib-2.0.js';
import type Gdk from './Gdk-4.0.js';
import type cairo from './cairo-1.0.js';
import type PangoCairo from './PangoCairo-1.0.js';
import type Pango from './Pango-1.0.js';
import type HarfBuzz from './HarfBuzz-0.0.js';
import type freetype2 from './freetype2-2.0.js';
import type Gio from './Gio-2.0.js';
import type GdkPixbuf from './GdkPixbuf-2.0.js';
import type GModule from './GModule-2.0.js';

export namespace Adw {

/**
 * Describes the possible states of an [class`Animation]`.
 * 
 * The state can be controlled with [method`Animation`.play],
 * [method`Animation`.pause], [method`Animation`.resume],
 * [method`Animation`.reset] and [method`Animation`.skip].
 */
enum AnimationState {
    /**
     * The animation hasn't started yet.
     */
    IDLE,
    /**
     * The animation has been paused.
     */
    PAUSED,
    /**
     * The animation is currently playing.
     */
    PLAYING,
    /**
     * The animation has finished.
     */
    FINISHED,
}
/**
 * Describes title centering behavior of a [class`HeaderBar]` widget.
 */
enum CenteringPolicy {
    /**
     * Keep the title centered when possible
     */
    LOOSE,
    /**
     * Keep the title centered at all cost
     */
    STRICT,
}
/**
 * Application color schemes for [property`StyleManager:`color-scheme].
 */
enum ColorScheme {
    /**
     * Inherit the parent color-scheme. When set on the
     *   `AdwStyleManager` returned by [func`StyleManager`.get_default], it's
     *   equivalent to `ADW_COLOR_SCHEME_PREFER_LIGHT`.
     */
    DEFAULT,
    /**
     * Always use light appearance.
     */
    FORCE_LIGHT,
    /**
     * Use light appearance unless the system
     *   prefers dark colors.
     */
    PREFER_LIGHT,
    /**
     * Use dark appearance unless the system prefers
     *   prefers light colors.
     */
    PREFER_DARK,
    /**
     * Always use dark appearance.
     */
    FORCE_DARK,
}
/**
 * Describes the available easing functions for use with
 * [class`TimedAnimation]`.
 * 
 * New values may be added to this enumeration over time.
 */
enum Easing {
    /**
     * Linear tweening.
     */
    LINEAR,
    /**
     * Quadratic tweening.
     */
    EASE_IN_QUAD,
    /**
     * Quadratic tweening, inverse of `ADW_EASE_IN_QUAD`.
     */
    EASE_OUT_QUAD,
    /**
     * Quadratic tweening, combining `ADW_EASE_IN_QUAD` and
     *   `ADW_EASE_OUT_QUAD`.
     */
    EASE_IN_OUT_QUAD,
    /**
     * Cubic tweening.
     */
    EASE_IN_CUBIC,
    /**
     * Cubic tweening, inverse of `ADW_EASE_IN_CUBIC`.
     */
    EASE_OUT_CUBIC,
    /**
     * Cubic tweening, combining `ADW_EASE_IN_CUBIC` and
     *   `ADW_EASE_OUT_CUBIC`.
     */
    EASE_IN_OUT_CUBIC,
    /**
     * Quartic tweening.
     */
    EASE_IN_QUART,
    /**
     * Quartic tweening, inverse of `ADW_EASE_IN_QUART`.
     */
    EASE_OUT_QUART,
    /**
     * Quartic tweening, combining `ADW_EASE_IN_QUART` and
     *   `ADW_EASE_OUT_QUART`.
     */
    EASE_IN_OUT_QUART,
    /**
     * Quintic tweening.
     */
    EASE_IN_QUINT,
    /**
     * Quintic tweening, inverse of `ADW_EASE_IN_QUINT`.
     */
    EASE_OUT_QUINT,
    /**
     * Quintic tweening, combining `ADW_EASE_IN_QUINT` and
     *   `ADW_EASE_OUT_QUINT`.
     */
    EASE_IN_OUT_QUINT,
    /**
     * Sine wave tweening.
     */
    EASE_IN_SINE,
    /**
     * Sine wave tweening, inverse of `ADW_EASE_IN_SINE`.
     */
    EASE_OUT_SINE,
    /**
     * Sine wave tweening, combining `ADW_EASE_IN_SINE` and
     *   `ADW_EASE_OUT_SINE`.
     */
    EASE_IN_OUT_SINE,
    /**
     * Exponential tweening.
     */
    EASE_IN_EXPO,
    /**
     * Exponential tweening, inverse of `ADW_EASE_IN_EXPO`.
     */
    EASE_OUT_EXPO,
    /**
     * Exponential tweening, combining `ADW_EASE_IN_EXPO` and
     *   `ADW_EASE_OUT_EXPO`.
     */
    EASE_IN_OUT_EXPO,
    /**
     * Circular tweening.
     */
    EASE_IN_CIRC,
    /**
     * Circular tweening, inverse of `ADW_EASE_IN_CIRC`.
     */
    EASE_OUT_CIRC,
    /**
     * Circular tweening, combining `ADW_EASE_IN_CIRC` and
     *   `ADW_EASE_OUT_CIRC`.
     */
    EASE_IN_OUT_CIRC,
    /**
     * Elastic tweening, with offshoot on start.
     */
    EASE_IN_ELASTIC,
    /**
     * Elastic tweening, with offshoot on end, inverse of
     *   `ADW_EASE_IN_ELASTIC`.
     */
    EASE_OUT_ELASTIC,
    /**
     * Elastic tweening, with offshoot on both ends,
     *   combining `ADW_EASE_IN_ELASTIC` and `ADW_EASE_OUT_ELASTIC`.
     */
    EASE_IN_OUT_ELASTIC,
    /**
     * Overshooting cubic tweening, with backtracking on start.
     */
    EASE_IN_BACK,
    /**
     * Overshooting cubic tweening, with backtracking on end,
     *   inverse of `ADW_EASE_IN_BACK`.
     */
    EASE_OUT_BACK,
    /**
     * Overshooting cubic tweening, with backtracking on both
     *   ends, combining `ADW_EASE_IN_BACK` and `ADW_EASE_OUT_BACK`.
     */
    EASE_IN_OUT_BACK,
    /**
     * Exponentially decaying parabolic (bounce) tweening,
     *   on start.
     */
    EASE_IN_BOUNCE,
    /**
     * Exponentially decaying parabolic (bounce) tweening,
     *   with bounce on end, inverse of `ADW_EASE_IN_BOUNCE`.
     */
    EASE_OUT_BOUNCE,
    /**
     * Exponentially decaying parabolic (bounce) tweening,
     *   with bounce on both ends, combining `ADW_EASE_IN_BOUNCE` and
     *   `ADW_EASE_OUT_BOUNCE`.
     */
    EASE_IN_OUT_BOUNCE,
}
/**
 * Describes the possible folding behavior of a [class`Flap]` widget.
 */
enum FlapFoldPolicy {
    /**
     * Disable folding, the flap cannot reach narrow
     *   sizes.
     */
    NEVER,
    /**
     * Keep the flap always folded.
     */
    ALWAYS,
    /**
     * Fold and unfold the flap based on available
     *   space.
     */
    AUTO,
}
/**
 * Describes transitions types of a [class`Flap]` widget.
 * 
 * It determines the type of animation when transitioning between children in a
 * [class`Flap]` widget, as well as which areas can be swiped via
 * [property`Flap:`swipe-to-open] and [property`Flap:`swipe-to-close].
 * 
 * New values may be added to this enum over time.
 */
enum FlapTransitionType {
    /**
     * The flap slides over the content, which is
     *   dimmed. When folded, only the flap can be swiped.
     */
    OVER,
    /**
     * The content slides over the flap. Only the
     *   content can be swiped.
     */
    UNDER,
    /**
     * The flap slides offscreen when hidden,
     *   neither the flap nor content overlap each other. Both widgets can be
     *   swiped.
     */
    SLIDE,
}
/**
 * Determines when [class`Flap]` and [class`Leaflet]` will fold.
 */
enum FoldThresholdPolicy {
    /**
     * Folding is based on the minimum size
     */
    MINIMUM,
    /**
     * Folding is based on the natural size
     */
    NATURAL,
}
/**
 * Describes the possible transitions in a [class`Leaflet]` widget.
 * 
 * New values may be added to this enumeration over time.
 */
enum LeafletTransitionType {
    /**
     * Cover the old page or uncover the new page, sliding from or towards the end according to orientation, text direction and children order
     */
    OVER,
    /**
     * Uncover the new page or cover the old page, sliding from or towards the start according to orientation, text direction and children order
     */
    UNDER,
    /**
     * Slide from left, right, up or down according to the orientation, text direction and the children order
     */
    SLIDE,
}
/**
 * Describes the direction of a swipe navigation gesture.
 */
enum NavigationDirection {
    /**
     * Corresponds to start or top, depending on orientation and text direction
     */
    BACK,
    /**
     * Corresponds to end or bottom, depending on orientation and text direction
     */
    FORWARD,
}
/**
 * Describes the possible transitions in a [class`Squeezer]` widget.
 */
enum SqueezerTransitionType {
    /**
     * No transition
     */
    NONE,
    /**
     * A cross-fade
     */
    CROSSFADE,
}
/**
 * [class`Toast]` behavior when another toast is already displayed.
 */
enum ToastPriority {
    /**
     * the toast will be queued if another toast is
     *   already displayed.
     */
    NORMAL,
    /**
     * the toast will be displayed immediately, pushing
     *   the previous toast into the queue instead.
     */
    HIGH,
}
/**
 * Describes the adaptive modes of [class`ViewSwitcher]`.
 */
enum ViewSwitcherPolicy {
    /**
     * Force the narrow mode
     */
    NARROW,
    /**
     * Force the wide mode
     */
    WIDE,
}
/**
 * Indicates an [class`Animation]` with an infinite duration.
 * 
 * This value is mostly used internally.
 */
const DURATION_INFINITE: number
/**
 * Adwaita major version component (e.g. 1 if the version is 1.2.3).
 */
const MAJOR_VERSION: number
/**
 * Adwaita micro version component (e.g. 3 if the version is 1.2.3).
 */
const MICRO_VERSION: number
/**
 * Adwaita minor version component (e.g. 2 if the version is 1.2.3).
 */
const MINOR_VERSION: number
/**
 * Adwaita version, encoded as a string, useful for printing and
 * concatenation.
 */
const VERSION_S: string
/**
 * Computes easing with `easing` for `value`.
 * 
 * `value` should generally be in the [0, 1] range.
 * @param self an easing value
 * @param value a value to ease
 */
function easing_ease(self: Easing, value: number): number
/**
 * Checks whether animations are enabled for `widget`.
 * 
 * This should be used when implementing an animated widget to know whether to
 * animate it or not.
 * @param widget a `GtkWidget`
 */
function get_enable_animations(widget: Gtk.Widget): boolean
/**
 * Returns the major version number of the Adwaita library.
 * 
 * For example, in libadwaita version 1.2.3 this is 1.
 * 
 * This function is in the library, so it represents the libadwaita library your
 * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
 * which represents the major version of the libadwaita headers you have
 * included when compiling your code.
 */
function get_major_version(): number
/**
 * Returns the micro version number of the Adwaita library.
 * 
 * For example, in libadwaita version 1.2.3 this is 3.
 * 
 * This function is in the library, so it represents the libadwaita library your
 * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
 * which represents the micro version of the libadwaita headers you have
 * included when compiling your code.
 */
function get_micro_version(): number
/**
 * Returns the minor version number of the Adwaita library.
 * 
 * For example, in libadwaita version 1.2.3 this is 2.
 * 
 * This function is in the library, so it represents the libadwaita library your
 * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
 * which represents the minor version of the libadwaita headers you have
 * included when compiling your code.
 */
function get_minor_version(): number
/**
 * Initializes Libadwaita.
 * 
 * This function can be used instead of [func`Gtk`.init] as it initializes GTK
 * implicitly.
 * 
 * There's no need to call this function if you're using [class`Application]`.
 * 
 * If Libadwaita has already been initialized, the function will simply return.
 * 
 * This makes sure translations, types, themes, and icons for the Adwaita
 * library are set up properly.
 */
function init(): void
/**
 * Use this function to check if libadwaita has been initialized with
 * [func`init]`.
 */
function is_initialized(): boolean
/**
 * Computes the linear interpolation between `a` and `b` for `t`.
 * @param a the start
 * @param b the end
 * @param t the interpolation rate
 */
function lerp(a: number, b: number, t: number): number
/**
 * Prototype for animation targets based on user callbacks.
 * @callback 
 * @param value The animation value
 */
interface AnimationTargetFunc {
    (value: number): void
}
module Swipeable {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Swipeable extends Gtk.Widget {

    // Owm methods of Adw-1.Adw.Swipeable

    /**
     * Gets the progress `self` will snap back to after the gesture is canceled.
     */
    get_cancel_progress(): number
    /**
     * Gets the swipe distance of `self`.
     * 
     * This corresponds to how many pixels 1 unit represents.
     */
    get_distance(): number
    /**
     * Gets the current progress of `self`.
     */
    get_progress(): number
    /**
     * Gets the snap points of `self`.
     * 
     * Each snap point represents a progress value that is considered acceptable to
     * end the swipe on.
     */
    get_snap_points(): number[]
    /**
     * Gets the area `self` can start a swipe from for the given direction and
     * gesture type.
     * 
     * This can be used to restrict swipes to only be possible from a certain area,
     * for example, to only allow edge swipes, or to have a draggable element and
     * ignore swipes elsewhere.
     * 
     * If not implemented, the default implementation returns the allocation of
     * `self,` allowing swipes from anywhere.
     * @param navigation_direction the direction of the swipe
     * @param is_drag whether the swipe is caused by a dragging gesture
     */
    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): /* rect */ Gdk.Rectangle

    // Own virtual methods of Adw-1.Adw.Swipeable

    /**
     * Gets the progress `self` will snap back to after the gesture is canceled.
     * @virtual 
     */
    vfunc_get_cancel_progress(): number
    /**
     * Gets the swipe distance of `self`.
     * 
     * This corresponds to how many pixels 1 unit represents.
     * @virtual 
     */
    vfunc_get_distance(): number
    /**
     * Gets the current progress of `self`.
     * @virtual 
     */
    vfunc_get_progress(): number
    /**
     * Gets the snap points of `self`.
     * 
     * Each snap point represents a progress value that is considered acceptable to
     * end the swipe on.
     * @virtual 
     */
    vfunc_get_snap_points(): number[]
    /**
     * Gets the area `self` can start a swipe from for the given direction and
     * gesture type.
     * 
     * This can be used to restrict swipes to only be possible from a certain area,
     * for example, to only allow edge swipes, or to have a draggable element and
     * ignore swipes elsewhere.
     * 
     * If not implemented, the default implementation returns the allocation of
     * `self,` allowing swipes from anywhere.
     * @virtual 
     * @param navigation_direction the direction of the swipe
     * @param is_drag whether the swipe is caused by a dragging gesture
     */
    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): /* rect */ Gdk.Rectangle

    // Class property signals of Adw-1.Adw.Swipeable

    connect(sigName: "notify::can-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Swipeable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An interface for swipeable widgets.
 * 
 * The `AdwSwipeable` interface is implemented by all swipeable widgets.
 * 
 * See [class`SwipeTracker]` for details about implementing it.
 * @interface 
 */
class Swipeable extends GObject.Object {

    // Own properties of Adw-1.Adw.Swipeable

    static name: string
    static $gtype: GObject.GType<Swipeable>

    // Constructors of Adw-1.Adw.Swipeable

    constructor(config?: Swipeable.ConstructorProperties) 
    _init(config?: Swipeable.ConstructorProperties): void
}

module ActionRow {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    interface ActivatedSignalCallback {
        ($obj: ActionRow): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, PreferencesRow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ActionRow

        /**
         * The widget to activate when the row is activated.
         * 
         * The row can be activated either by clicking on it, calling
         * [method`ActionRow`.activate], or via mnemonics in the title or the subtitle.
         * See the [property`PreferencesRow:`use-underline] property to enable
         * mnemonics.
         * 
         * The target widget will be activated by emitting the
         * [signal`Gtk`.Widget::mnemonic-activate] signal on it.
         */
        activatable_widget?: Gtk.Widget | null
        /**
         * The icon name for this row.
         */
        icon_name?: string | null
        /**
         * The subtitle for this row.
         */
        subtitle?: string | null
        /**
         * The number of lines at the end of which the subtitle label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         */
        subtitle_lines?: number | null
        /**
         * The number of lines at the end of which the title label will be ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         */
        title_lines?: number | null
    }

}

interface ActionRow extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ActionRow

    /**
     * The widget to activate when the row is activated.
     * 
     * The row can be activated either by clicking on it, calling
     * [method`ActionRow`.activate], or via mnemonics in the title or the subtitle.
     * See the [property`PreferencesRow:`use-underline] property to enable
     * mnemonics.
     * 
     * The target widget will be activated by emitting the
     * [signal`Gtk`.Widget::mnemonic-activate] signal on it.
     */
    activatable_widget: Gtk.Widget
    /**
     * The icon name for this row.
     */
    icon_name: string
    /**
     * The subtitle for this row.
     */
    subtitle: string
    /**
     * The number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    subtitle_lines: number
    /**
     * The number of lines at the end of which the title label will be ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    title_lines: number

    // Own fields of Adw-1.Adw.ActionRow

    parent_instance: PreferencesRow & Gtk.ListBoxRow & Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.ActionRow

    /**
     * Activates `self`.
     */
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Adds a prefix widget to `self`.
     * @param widget a widget
     */
    add_prefix(widget: Gtk.Widget): void
    /**
     * Adds a suffix widget to `self`.
     * @param widget a widget
     */
    add_suffix(widget: Gtk.Widget): void
    /**
     * Gets the widget activated when `self` is activated.
     */
    get_activatable_widget(): Gtk.Widget | null
    /**
     * Gets the icon name for `self`.
     */
    get_icon_name(): string | null
    /**
     * Gets the subtitle for `self`.
     */
    get_subtitle(): string | null
    /**
     * Gets the number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    get_subtitle_lines(): number
    /**
     * Gets the number of lines at the end of which the title label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    get_title_lines(): number
    /**
     * Removes a child from `self`.
     * @param widget the child to be removed
     */
    remove(widget: Gtk.Widget): void
    /**
     * Sets the widget to activate when `self` is activated.
     * @param widget the target widget
     */
    set_activatable_widget(widget: Gtk.Widget | null): void
    /**
     * Sets the icon name for `self`.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the subtitle for `self`.
     * @param subtitle the subtitle
     */
    set_subtitle(subtitle: string): void
    /**
     * Sets the number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     * @param subtitle_lines the number of lines at the end of which the subtitle label will be ellipsized
     */
    set_subtitle_lines(subtitle_lines: number): void
    /**
     * Sets the number of lines at the end of which the title label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     * @param title_lines the number of lines at the end of which the title label will be ellipsized
     */
    set_title_lines(title_lines: number): void

    // Own virtual methods of Adw-1.Adw.ActionRow

    /**
     * Activates `self`.
     * @virtual 
     */
    vfunc_activate(): void

    // Own signals of Adw-1.Adw.ActionRow

    connect(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Adw-1.Adw.ActionRow

    connect(sigName: "notify::activatable-widget", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable-widget", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable-widget", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::subtitle-lines", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-lines", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-lines", ...args: any[]): void
    connect(sigName: "notify::title-lines", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-lines", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-lines", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-selectable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-selectable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-selectable", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ActionRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to present actions.
 * 
 * <picture>
 *   <source srcset="action-row-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="action-row.png" alt="action-row">
 * </picture>
 * 
 * The `AdwActionRow` widget can have a title, a subtitle and an icon. The row
 * can receive additional widgets at its end, or prefix widgets at its start.
 * 
 * It is convenient to present a preference and its related actions.
 * 
 * `AdwActionRow` is unactivatable by default, giving it an activatable widget
 * will automatically make it activatable, but unsetting it won't change the
 * row's activatability.
 * 
 * ## AdwActionRow as GtkBuildable
 * 
 * The `AdwActionRow` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding a child at its end by specifying “suffix” or omitting the
 * “type” attribute of a <child> element.
 * 
 * It also supports adding a child as a prefix widget by specifying “prefix” as
 * the “type” attribute of a <child> element.
 * 
 * ## CSS nodes
 * 
 * `AdwActionRow` has a main CSS node with name `row`.
 * 
 * It contains the subnode `box.header` for its main horizontal box, and
 * `box.title` for the vertical box containing the title and subtitle labels.
 * 
 * It contains subnodes `label.title` and `label.subtitle` representing
 * respectively the title label and subtitle label.
 * @class 
 */
class ActionRow extends PreferencesRow {

    // Own properties of Adw-1.Adw.ActionRow

    static name: string
    static $gtype: GObject.GType<ActionRow>

    // Constructors of Adw-1.Adw.ActionRow

    constructor(config?: ActionRow.ConstructorProperties) 
    /**
     * Creates a new `AdwActionRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwActionRow`.
     * @constructor 
     */
    static new(): ActionRow
    _init(config?: ActionRow.ConstructorProperties): void
}

module Animation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    interface DoneSignalCallback {
        ($obj: Animation): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Animation

        /**
         * The target to animate.
         */
        target?: AnimationTarget | null
        /**
         * The animation widget.
         * 
         * It provides the frame clock for the animation. It's not strictly necessary
         * for this widget to be same as the one being animated.
         * 
         * The widget must be mapped in order for the animation to work. If it's not
         * mapped, or if it gets unmapped during an ongoing animation, the animation
         * will be automatically skipped.
         */
        widget?: Gtk.Widget | null
    }

}

interface Animation {

    // Own properties of Adw-1.Adw.Animation

    /**
     * The animation state.
     * 
     * The state indicates whether the animation is currently playing, paused,
     * finished or hasn't been started yet.
     */
    readonly state: AnimationState
    /**
     * The target to animate.
     */
    target: AnimationTarget
    /**
     * The current value of the animation.
     */
    readonly value: number
    /**
     * The animation widget.
     * 
     * It provides the frame clock for the animation. It's not strictly necessary
     * for this widget to be same as the one being animated.
     * 
     * The widget must be mapped in order for the animation to work. If it's not
     * mapped, or if it gets unmapped during an ongoing animation, the animation
     * will be automatically skipped.
     */
    readonly widget: Gtk.Widget

    // Own fields of Adw-1.Adw.Animation

    parent_instance: GObject.Object

    // Owm methods of Adw-1.Adw.Animation

    /**
     * Gets the current value of `self`.
     * 
     * The state indicates whether `self` is currently playing, paused, finished or
     * hasn't been started yet.
     */
    get_state(): AnimationState
    /**
     * Gets the target `self` animates.
     */
    get_target(): AnimationTarget
    /**
     * Gets the current value of `self`.
     */
    get_value(): number
    /**
     * Gets the widget `self` was created for.
     */
    get_widget(): Gtk.Widget
    /**
     * Pauses a playing animation for `self`.
     * 
     * Does nothing if the current state of `self` isn't `ADW_ANIMATION_PLAYING`.
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_PAUSED`.
     */
    pause(): void
    /**
     * Starts the animation for `self`.
     * 
     * If the animation is playing, paused or has been completed, restarts it from
     * the beginning. This allows to easily play an animation regardless of whether
     * it's already playing or not.
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_PLAYING`.
     * 
     * The animation will be automatically skipped if [property`Animation:`widget] is
     * unmapped, or if [property`Gtk`.Settings:gtk-enable-animations] is `FALSE`.
     * 
     * As such, it's not guaranteed that the animation will actually run. For
     * example, when using [func`GLib`.idle_add] and starting an animation
     * immediately afterwards, it's entirely possible that the idle callback will
     * run after the animation has already finished, and not while it's playing.
     */
    play(): void
    /**
     * Resets the animation for `self`.
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_IDLE`.
     */
    reset(): void
    /**
     * Resumes a paused animation for `self`.
     * 
     * This function must only be used if the animation has been paused with
     * [method`Animation`.pause].
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_PLAYING`.
     */
    resume(): void
    /**
     * Skips the animation for `self`.
     * 
     * If the animation hasn't been started yet, is playing, or is paused, instantly
     * skips the animation to the end and causes [signal`Animation:`:done] to be
     * emitted.
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_FINISHED`.
     */
    skip(): void

    // Own signals of Adw-1.Adw.Animation

    connect(sigName: "done", callback: Animation.DoneSignalCallback): number
    connect_after(sigName: "done", callback: Animation.DoneSignalCallback): number
    emit(sigName: "done", ...args: any[]): void

    // Class property signals of Adw-1.Adw.Animation

    connect(sigName: "notify::state", callback: (($obj: Animation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Animation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: Animation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: Animation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Animation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Animation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::widget", callback: (($obj: Animation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: Animation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A base class for animations.
 * 
 * `AdwAnimation` represents an animation on a widget. It has a target that
 * provides a value to animate, and a state indicating whether the
 * animation hasn't been started yet, is playing, paused or finished.
 * 
 * Currently there are two concrete animation types:
 * [class`TimedAnimation]` and [class`SpringAnimation]`.
 * 
 * `AdwAnimation` will automatically skip the animation if
 * [property`Animation:`widget] is unmapped, or if
 * [property`Gtk`.Settings:gtk-enable-animations] is `FALSE`.
 * 
 * The [signal`Animation:`:done] signal can be used to perform an action after
 * the animation ends, for example hiding a widget after animating its
 * [property`Gtk`.Widget:opacity] to 0.
 * 
 * `AdwAnimation` will be kept alive while the animation is playing. As such,
 * it's safe to create an animation, start it and immediately unref it:
 * A fire-and-forget animation:
 * 
 * ```c
 * static void
 * animation_cb (double    value,
 *               MyObject *self)
 * {
 *   // Do something with `value`
 * }
 * 
 * static void
 * my_object_animate (MyObject *self)
 * {
 *   AdwAnimationTarget *target =
 *     adw_callback_animation_target_new ((AdwAnimationTargetFunc) animation_cb,
 *                                        self, NULL);
 *   g_autoptr (AdwAnimation) animation =
 *     adw_timed_animation_new (widget, 0, 1, 250, target);
 * 
 *   adw_animation_play (animation);
 * }
 * ```
 * 
 * If there's a chance the previous animation for the same target hasn't yet
 * finished, the previous animation should be stopped first, or the existing
 * `AdwAnimation` object can be reused.
 * @class 
 */
class Animation extends GObject.Object {

    // Own properties of Adw-1.Adw.Animation

    static name: string
    static $gtype: GObject.GType<Animation>

    // Constructors of Adw-1.Adw.Animation

    constructor(config?: Animation.ConstructorProperties) 
    _init(config?: Animation.ConstructorProperties): void
}

module AnimationTarget {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AnimationTarget {

    // Class property signals of Adw-1.Adw.AnimationTarget

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a value [class`Animation]` can animate.
 * 
 * Currently the only implementation is [class`CallbackAnimationTarget]`.
 * @class 
 */
class AnimationTarget extends GObject.Object {

    // Own properties of Adw-1.Adw.AnimationTarget

    static name: string
    static $gtype: GObject.GType<AnimationTarget>

    // Constructors of Adw-1.Adw.AnimationTarget

    constructor(config?: AnimationTarget.ConstructorProperties) 
    _init(config?: AnimationTarget.ConstructorProperties): void
}

module Application {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Application.ConstructorProperties {
    }

}

interface Application extends Gio.ActionGroup, Gio.ActionMap {

    // Own properties of Adw-1.Adw.Application

    /**
     * The style manager for this application.
     * 
     * This is a convenience property allowing to access `AdwStyleManager` through
     * property bindings or expressions.
     */
    readonly style_manager: StyleManager

    // Own fields of Adw-1.Adw.Application

    parent_instance: Gtk.Application & Gio.Application

    // Owm methods of Adw-1.Adw.Application

    /**
     * Gets the style manager for `self`.
     */
    get_style_manager(): StyleManager

    // Class property signals of Adw-1.Adw.Application

    connect(sigName: "notify::style-manager", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-manager", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-manager", ...args: any[]): void
    connect(sigName: "notify::active-window", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-window", ...args: any[]): void
    connect(sigName: "notify::menubar", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menubar", ...args: any[]): void
    connect(sigName: "notify::register-session", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::register-session", ...args: any[]): void
    connect(sigName: "notify::screensaver-active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screensaver-active", ...args: any[]): void
    connect(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactivity-timeout", ...args: any[]): void
    connect(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-busy", ...args: any[]): void
    connect(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-registered", ...args: any[]): void
    connect(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-remote", ...args: any[]): void
    connect(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A base class for Adwaita applications.
 * 
 * `AdwApplication` handles library initialization by calling [func`init]` in the
 * default [signal`Gio`.Application::startup] signal handler, in turn chaining up
 * as required by [class`Gtk`.Application]. Therefore, any subclass of
 * `AdwApplication` should always chain up its `startup` handler before using
 * any Adwaita or GTK API.
 * 
 * ## Automatic Resources
 * 
 * `AdwApplication` will automatically load stylesheets located in the
 * application's resource base path (see
 * [method`Gio`.Application.set_resource_base_path], if they're present.
 * 
 * They can be used to add custom styles to the application, as follows:
 * 
 * - `style.css` contains styles that are always present.
 * 
 * - `style-dark.css` contains styles only used when
 * [property`StyleManager:`dark] is `TRUE`.
 * 
 * - `style-hc.css` contains styles used when the system high contrast
 *   preference is enabled.
 * 
 * - `style-hc-dark.css` contains styles used when the system high contrast
 *   preference is enabled and [property`StyleManager:`dark] is `TRUE`.
 * @class 
 */
class Application extends Gtk.Application {

    // Own properties of Adw-1.Adw.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Adw-1.Adw.Application

    constructor(config?: Application.ConstructorProperties) 
    /**
     * Creates a new `AdwApplication`.
     * 
     * If `application_id` is not `NULL`, then it must be valid. See
     * [func`Gio`.Application.id_is_valid].
     * 
     * If no application ID is given then some features (most notably application
     * uniqueness) will be disabled.
     * @constructor 
     * @param application_id The application ID
     * @param flags The application flags
     */
    constructor(application_id: string | null, flags: Gio.ApplicationFlags) 
    /**
     * Creates a new `AdwApplication`.
     * 
     * If `application_id` is not `NULL`, then it must be valid. See
     * [func`Gio`.Application.id_is_valid].
     * 
     * If no application ID is given then some features (most notably application
     * uniqueness) will be disabled.
     * @constructor 
     * @param application_id The application ID
     * @param flags The application flags
     */
    static new(application_id: string | null, flags: Gio.ApplicationFlags): Application

    // Overloads of new

    /**
     * Creates a new `GtkApplication` instance.
     * 
     * When using `GtkApplication`, it is not necessary to call [func`Gtk`.init]
     * manually. It is called as soon as the application gets registered as
     * the primary instance.
     * 
     * Concretely, [func`Gtk`.init] is called in the default handler for the
     * `GApplication::startup` signal. Therefore, `GtkApplication` subclasses should
     * always chain up in their `GApplication::startup` handler before using any GTK
     * API.
     * 
     * Note that commandline arguments are not passed to [func`Gtk`.init].
     * 
     * If `application_id` is not %NULL, then it must be valid. See
     * `g_application_id_is_valid()`.
     * 
     * If no application ID is given then some features (most notably application
     * uniqueness) will be disabled.
     * @constructor 
     * @param application_id The application ID
     * @param flags the application flags
     */
    static new(application_id: string | null, flags: Gio.ApplicationFlags): Gtk.Application
    /**
     * Creates a new #GApplication instance.
     * 
     * If non-%NULL, the application id must be valid.  See
     * g_application_id_is_valid().
     * 
     * If no application ID is given then some features of #GApplication
     * (most notably application uniqueness) will be disabled.
     * @constructor 
     * @param application_id the application id
     * @param flags the application flags
     */
    static new(application_id: string | null, flags: Gio.ApplicationFlags): Gio.Application
    _init(config?: Application.ConstructorProperties): void
}

module ApplicationWindow {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Native.ConstructorProperties, Gtk.Root.ConstructorProperties, Gtk.ShortcutManager.ConstructorProperties, Gtk.ApplicationWindow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ApplicationWindow

        /**
         * The content widget.
         */
        content?: Gtk.Widget | null
    }

}

interface ApplicationWindow extends Gio.ActionGroup, Gio.ActionMap, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {

    // Own properties of Adw-1.Adw.ApplicationWindow

    /**
     * The content widget.
     */
    content: Gtk.Widget

    // Own fields of Adw-1.Adw.ApplicationWindow

    parent_instance: Gtk.ApplicationWindow & Gtk.Window & Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.ApplicationWindow

    /**
     * Gets the content widget of `self`.
     * 
     * This method should always be used instead of [method`Gtk`.Window.get_child].
     */
    get_content(): Gtk.Widget | null
    /**
     * Sets the content widget of `self`.
     * 
     * This method should always be used instead of [method`Gtk`.Window.set_child].
     * @param content the content widget
     */
    set_content(content: Gtk.Widget | null): void

    // Conflicting methods

    /**
     * Activate the named action within `action_group`.
     * 
     * If the action is expecting a parameter, then the correct type of
     * parameter must be given as `parameter`.  If the action is expecting no
     * parameters then `parameter` must be %NULL.  See
     * g_action_group_get_action_parameter_type().
     * 
     * If the #GActionGroup implementation supports asynchronous remote
     * activation over D-Bus, this call may return before the relevant
     * D-Bus traffic has been sent, or any replies have been received. In
     * order to block on such asynchronous activation calls,
     * g_dbus_connection_flush() should be called prior to the code, which
     * depends on the result of the action activation. Without flushing
     * the D-Bus connection, there is no guarantee that the action would
     * have been activated.
     * 
     * The following code which runs in a remote app instance, shows an
     * example of a "quit" action being activated on the primary app
     * instance over D-Bus. Here g_dbus_connection_flush() is called
     * before `exit()`. Without g_dbus_connection_flush(), the "quit" action
     * may fail to be activated on the primary instance.
     * 
     * 
     * ```c
     * // call "quit" action on primary instance
     * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
     * 
     * // make sure the action is activated now
     * g_dbus_connection_flush (...);
     * 
     * g_debug ("application has been terminated. exiting.");
     * 
     * exit (0);
     * ```
     * 
     * @param action_name the name of the action to activate
     * @param parameter parameters to the activation
     */
    activate_action(action_name: string, parameter: GLib.Variant | null): void
    /**
     * Looks up the action in the action groups associated with
     * `widget` and its ancestors, and activates it.
     * 
     * If the action is in an action group added with
     * [method`Gtk`.Widget.insert_action_group], the `name` is expected
     * to be prefixed with the prefix that was used when the group was
     * inserted.
     * 
     * The arguments must match the actions expected parameter type,
     * as returned by `g_action_get_parameter_type()`.
     * @param name the name of the action to activate
     * @param args parameters to use
     */
    activate_action(name: string, args: GLib.Variant | null): boolean

    // Class property signals of Adw-1.Adw.ApplicationWindow

    connect(sigName: "notify::content", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::show-menubar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-menubar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-menubar", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-widget", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-widget", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::focus-widget", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-widget", ...args: any[]): void
    connect(sigName: "notify::fullscreened", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreened", ...args: any[]): void
    connect(sigName: "notify::handle-menubar-accel", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-menubar-accel", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-menubar-accel", ...args: any[]): void
    connect(sigName: "notify::hide-on-close", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-on-close", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::maximized", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::titlebar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::titlebar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::titlebar", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A freeform application window.
 * 
 * <picture>
 *   <source srcset="application-window-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="application-window.png" alt="application-window">
 * </picture>
 * 
 * `AdwApplicationWindow` is a [class`Gtk`.ApplicationWindow] subclass providing
 * the same features as [class`Window]`.
 * 
 * See [class`Window]` for details.
 * 
 * Using [property`Gtk`.Application:menubar] is not supported and may result in
 * visual glitches.
 * @class 
 */
class ApplicationWindow extends Gtk.ApplicationWindow {

    // Own properties of Adw-1.Adw.ApplicationWindow

    static name: string
    static $gtype: GObject.GType<ApplicationWindow>

    // Constructors of Adw-1.Adw.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    /**
     * Creates a new `AdwApplicationWindow` for `app`.
     * @constructor 
     * @param app an application instance
     */
    constructor(app: Gtk.Application) 
    /**
     * Creates a new `AdwApplicationWindow` for `app`.
     * @constructor 
     * @param app an application instance
     */
    static new(app: Gtk.Application): ApplicationWindow

    // Overloads of new

    /**
     * Creates a new `GtkApplicationWindow`.
     * @constructor 
     * @param application a `GtkApplication`
     */
    static new(application: Gtk.Application): Gtk.ApplicationWindow
    /**
     * Creates a new `GtkWindow`.
     * 
     * To get an undecorated window (no window borders), use
     * [method`Gtk`.Window.set_decorated].
     * 
     * All top-level windows created by gtk_window_new() are stored
     * in an internal top-level window list. This list can be obtained
     * from [func`Gtk`.Window.list_toplevels]. Due to GTK keeping a
     * reference to the window internally, gtk_window_new() does not
     * return a reference to the caller.
     * 
     * To delete a `GtkWindow`, call [method`Gtk`.Window.destroy].
     * @constructor 
     */
    static new(): Gtk.Window
    _init(config?: ApplicationWindow.ConstructorProperties): void
}

module Avatar {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Avatar

        /**
         * A custom image to use instead of initials or icon.
         */
        custom_image?: Gdk.Paintable | null
        /**
         * The name of an icon to use as a fallback.
         * 
         * If no name is set, `avatar-default-symbolic` will be used.
         */
        icon_name?: string | null
        /**
         * Whether initials are used instead of an icon on the fallback avatar.
         * 
         * See [property`Avatar:`icon-name] for how to change the fallback icon.
         */
        show_initials?: boolean | null
        /**
         * The size of the avatar.
         */
        size?: number | null
        /**
         * Sets the text used to generate the fallback initials and color.
         * 
         * It's only used to generate the color if [property`Avatar:`show-initials] is
         * `FALSE`.
         */
        text?: string | null
    }

}

interface Avatar extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.Avatar

    /**
     * A custom image to use instead of initials or icon.
     */
    custom_image: Gdk.Paintable
    /**
     * The name of an icon to use as a fallback.
     * 
     * If no name is set, `avatar-default-symbolic` will be used.
     */
    icon_name: string
    /**
     * Whether initials are used instead of an icon on the fallback avatar.
     * 
     * See [property`Avatar:`icon-name] for how to change the fallback icon.
     */
    show_initials: boolean
    /**
     * The size of the avatar.
     */
    size: number
    /**
     * Sets the text used to generate the fallback initials and color.
     * 
     * It's only used to generate the color if [property`Avatar:`show-initials] is
     * `FALSE`.
     */
    text: string

    // Owm methods of Adw-1.Adw.Avatar

    /**
     * Renders `self` into a [class`Gdk`.Texture] at `scale_factor`.
     * 
     * This can be used to export the fallback avatar.
     * @param scale_factor The scale factor
     */
    draw_to_texture(scale_factor: number): Gdk.Texture
    /**
     * Gets the custom image paintable.
     */
    get_custom_image(): Gdk.Paintable | null
    /**
     * Gets the name of an icon to use as a fallback.
     */
    get_icon_name(): string | null
    /**
     * Gets whether initials are used instead of an icon on the fallback avatar.
     */
    get_show_initials(): boolean
    /**
     * Gets the size of the avatar.
     */
    get_size(): number

    // Overloads of get_size

    /**
     * Returns the content width or height of the widget.
     * 
     * Which dimension is returned depends on `orientation`.
     * 
     * This is equivalent to calling [method`Gtk`.Widget.get_width]
     * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
     * for %GTK_ORIENTATION_VERTICAL, but can be used when
     * writing orientation-independent code, such as when
     * implementing [iface`Gtk`.Orientable] widgets.
     * @param orientation the orientation to query
     */
    get_size(orientation: Gtk.Orientation): number
    /**
     * Gets the text used to generate the fallback initials and color.
     */
    get_text(): string | null
    /**
     * Sets the custom image paintable.
     * @param custom_image a custom image
     */
    set_custom_image(custom_image: Gdk.Paintable | null): void
    /**
     * Sets the name of an icon to use as a fallback.
     * 
     * If no name is set, `avatar-default-symbolic` will be used.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets whether to use initials instead of an icon on the fallback avatar.
     * @param show_initials whether to use initials instead of an icon as fallback
     */
    set_show_initials(show_initials: boolean): void
    /**
     * Sets the size of the avatar.
     * @param size The size of the avatar
     */
    set_size(size: number): void
    /**
     * Sets the text used to generate the fallback initials and color.
     * @param text the text used to get the initials and color
     */
    set_text(text: string | null): void

    // Class property signals of Adw-1.Adw.Avatar

    connect(sigName: "notify::custom-image", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-image", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-image", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::show-initials", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-initials", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-initials", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Avatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget displaying an image, with a generated fallback.
 * 
 * <picture>
 *   <source srcset="avatar-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="avatar.png" alt="avatar">
 * </picture>
 * 
 * `AdwAvatar` is a widget that shows a round avatar.
 * 
 * `AdwAvatar` generates an avatar with the initials of  the
 * [property`Avatar:`text] on top of a colored background.
 * 
 * The color is picked based on the hash of the [property`Avatar:`text].
 * 
 * If [property`Avatar:`show-initials] is set to `FALSE`,
 * [property`Avatar:`icon-name] or `avatar-default-symbolic` is shown instead of
 * the initials.
 * 
 * Use [property`Avatar:`custom-image] to set a custom image.
 * 
 * ## CSS nodes
 * 
 * `AdwAvatar` has a single CSS node with name `avatar`.
 * @class 
 */
class Avatar extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Avatar

    static name: string
    static $gtype: GObject.GType<Avatar>

    // Constructors of Adw-1.Adw.Avatar

    constructor(config?: Avatar.ConstructorProperties) 
    /**
     * Creates a new `AdwAvatar`.
     * @constructor 
     * @param size The size of the avatar
     * @param text the text used to get the initials and color
     * @param show_initials whether to use initials instead of an icon as fallback
     */
    constructor(size: number, text: string | null, show_initials: boolean) 
    /**
     * Creates a new `AdwAvatar`.
     * @constructor 
     * @param size The size of the avatar
     * @param text the text used to get the initials and color
     * @param show_initials whether to use initials instead of an icon as fallback
     */
    static new(size: number, text: string | null, show_initials: boolean): Avatar
    _init(config?: Avatar.ConstructorProperties): void
}

module Bin {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Bin

        /**
         * The child widget of the `AdwBin`.
         */
        child?: Gtk.Widget | null
    }

}

interface Bin extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.Bin

    /**
     * The child widget of the `AdwBin`.
     */
    child: Gtk.Widget

    // Own fields of Adw-1.Adw.Bin

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.Bin

    /**
     * Gets the child widget of `self`.
     */
    get_child(): Gtk.Widget | null
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    set_child(child: Gtk.Widget | null): void

    // Class property signals of Adw-1.Adw.Bin

    connect(sigName: "notify::child", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget with one child.
 * 
 * <picture>
 *   <source srcset="bin-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="bin.png" alt="bin">
 * </picture>
 * 
 * The `AdwBin` widget has only one child, set with the [property`Bin:`child]
 * property.
 * 
 * It is useful for deriving subclasses, since it provides common code needed
 * for handling a single child widget.
 * @class 
 */
class Bin extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Bin

    static name: string
    static $gtype: GObject.GType<Bin>

    // Constructors of Adw-1.Adw.Bin

    constructor(config?: Bin.ConstructorProperties) 
    /**
     * Creates a new `AdwBin`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwBin`.
     * @constructor 
     */
    static new(): Bin
    _init(config?: Bin.ConstructorProperties): void
}

module ButtonContent {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ButtonContent

        /**
         * The name of the displayed icon.
         * 
         * If empty, the icon is not shown.
         */
        icon_name?: string | null
        /**
         * The displayed label.
         */
        label?: string | null
        /**
         * Whether an underline in the text indicates a mnemonic.
         * 
         * The mnemonic can be used to activate the parent button.
         * 
         * See [property`ButtonContent:`label].
         */
        use_underline?: boolean | null
    }

}

interface ButtonContent extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ButtonContent

    /**
     * The name of the displayed icon.
     * 
     * If empty, the icon is not shown.
     */
    icon_name: string
    /**
     * The displayed label.
     */
    label: string
    /**
     * Whether an underline in the text indicates a mnemonic.
     * 
     * The mnemonic can be used to activate the parent button.
     * 
     * See [property`ButtonContent:`label].
     */
    use_underline: boolean

    // Owm methods of Adw-1.Adw.ButtonContent

    /**
     * Gets the name of the displayed icon.
     */
    get_icon_name(): string
    /**
     * Gets the displayed label.
     */
    get_label(): string
    /**
     * Gets whether an underline in the text indicates a mnemonic.
     */
    get_use_underline(): boolean
    /**
     * Sets the name of the displayed icon.
     * @param icon_name the new icon name
     */
    set_icon_name(icon_name: string): void
    /**
     * Sets the displayed label.
     * @param label the new label
     */
    set_label(label: string): void
    /**
     * Sets whether an underline in the text indicates a mnemonic.
     * @param use_underline whether an underline in the text indicates a mnemonic
     */
    set_use_underline(use_underline: boolean): void

    // Class property signals of Adw-1.Adw.ButtonContent

    connect(sigName: "notify::icon-name", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ButtonContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A helper widget for creating buttons.
 * 
 * <picture>
 *   <source srcset="button-content-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="button-content.png" alt="button-content">
 * </picture>
 * 
 * `AdwButtonContent` is a box-like widget with an icon and a label.
 * 
 * It's intended to be used as a direct child of [class`Gtk`.Button],
 * [class`Gtk`.MenuButton] or [class`SplitButton]`, when they need to have both an
 * icon and a label, as follows:
 * 
 * ```xml
 * <object class="GtkButton">
 *   <property name="child">
 *     <object class="AdwButtonContent">
 *       <property name="icon-name">document-open-symbolic</property>
 *       <property name="label" translatable="yes">_Open</property>
 *       <property name="use-underline">True</property>
 *     </object>
 *   </property>
 * </object>
 * ```
 * 
 * `AdwButtonContent` handles style classes and connecting the mnemonic to the
 * button automatically.
 * 
 * ## CSS nodes
 * 
 * ```
 * buttoncontent
 * ├── image
 * ╰── label
 * ```
 * 
 * `AdwButtonContent`'s CSS node is called `buttoncontent`. It contains the
 * subnodes `image` and `label`.
 * 
 * When inside a `GtkButton` or `AdwSplitButton`, the button will receive the
 * `.image-text-button` style class. When inside a `GtkMenuButton`, the
 * internal `GtkButton` will receive it instead.
 * 
 * ## Accessibility
 * 
 * `AdwButtonContent` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
class ButtonContent extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ButtonContent

    static name: string
    static $gtype: GObject.GType<ButtonContent>

    // Constructors of Adw-1.Adw.ButtonContent

    constructor(config?: ButtonContent.ConstructorProperties) 
    /**
     * Creates a new `AdwButtonContent`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwButtonContent`.
     * @constructor 
     */
    static new(): ButtonContent
    _init(config?: ButtonContent.ConstructorProperties): void
}

module CallbackAnimationTarget {

    // Constructor properties interface

    interface ConstructorProperties extends AnimationTarget.ConstructorProperties {
    }

}

interface CallbackAnimationTarget {

    // Class property signals of Adw-1.Adw.CallbackAnimationTarget

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An [class`AnimationTarget]` that calls a given callback during the
 * animation.
 * @class 
 */
class CallbackAnimationTarget extends AnimationTarget {

    // Own properties of Adw-1.Adw.CallbackAnimationTarget

    static name: string
    static $gtype: GObject.GType<CallbackAnimationTarget>

    // Constructors of Adw-1.Adw.CallbackAnimationTarget

    constructor(config?: CallbackAnimationTarget.ConstructorProperties) 
    /**
     * Creates a new `AdwAnimationTarget` that calls the given `callback` during
     * the animation.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwAnimationTarget` that calls the given `callback` during
     * the animation.
     * @constructor 
     */
    static new(): CallbackAnimationTarget
    _init(config?: CallbackAnimationTarget.ConstructorProperties): void
}

module Carousel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `page-changed`
     */
    interface PageChangedSignalCallback {
        ($obj: Carousel, index: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Swipeable.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Carousel

        /**
         * Whether to allow swiping for more than one page at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent pages.
         */
        allow_long_swipes?: boolean | null
        /**
         * Sets whether the `AdwCarousel` can be dragged with mouse pointer.
         * 
         * If the value is `FALSE`, dragging is only available on touch.
         */
        allow_mouse_drag?: boolean | null
        /**
         * Whether the widget will respond to scroll wheel events.
         * 
         * If the value is `FALSE`, wheel events will be ignored.
         */
        allow_scroll_wheel?: boolean | null
        /**
         * Whether the carousel can be navigated.
         * 
         * This can be used to temporarily disable a `AdwCarousel` to only allow
         * navigating it in a certain state.
         */
        interactive?: boolean | null
        /**
         * Page reveal duration, in milliseconds.
         */
        reveal_duration?: number | null
        /**
         * Scroll animation spring parameters.
         * 
         * The default value is equivalent to:
         * 
         * ```c
         * adw_spring_params_new (1, 0.5, 500)
         * ```
         */
        scroll_params?: SpringParams | null
        /**
         * Spacing between pages in pixels.
         */
        spacing?: number | null
    }

}

interface Carousel extends Swipeable, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Carousel

    /**
     * Whether to allow swiping for more than one page at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent pages.
     */
    allow_long_swipes: boolean
    /**
     * Sets whether the `AdwCarousel` can be dragged with mouse pointer.
     * 
     * If the value is `FALSE`, dragging is only available on touch.
     */
    allow_mouse_drag: boolean
    /**
     * Whether the widget will respond to scroll wheel events.
     * 
     * If the value is `FALSE`, wheel events will be ignored.
     */
    allow_scroll_wheel: boolean
    /**
     * Whether the carousel can be navigated.
     * 
     * This can be used to temporarily disable a `AdwCarousel` to only allow
     * navigating it in a certain state.
     */
    interactive: boolean
    /**
     * The number of pages in a `AdwCarousel`.
     */
    readonly n_pages: number
    /**
     * Current scrolling position, unitless.
     * 
     * 1 matches 1 page. Use [method`Carousel`.scroll_to] for changing it.
     */
    readonly position: number
    /**
     * Page reveal duration, in milliseconds.
     */
    reveal_duration: number
    /**
     * Scroll animation spring parameters.
     * 
     * The default value is equivalent to:
     * 
     * ```c
     * adw_spring_params_new (1, 0.5, 500)
     * ```
     */
    scroll_params: SpringParams
    /**
     * Spacing between pages in pixels.
     */
    spacing: number

    // Owm methods of Adw-1.Adw.Carousel

    /**
     * Appends `child` to `self`.
     * @param child a widget to add
     */
    append(child: Gtk.Widget): void
    /**
     * Gets whether to allow swiping for more than one page at a time.
     */
    get_allow_long_swipes(): boolean
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     */
    get_allow_mouse_drag(): boolean
    /**
     * Gets whether `self` will respond to scroll wheel events.
     */
    get_allow_scroll_wheel(): boolean
    /**
     * Gets whether `self` can be navigated.
     */
    get_interactive(): boolean
    /**
     * Gets the number of pages in `self`.
     */
    get_n_pages(): number
    /**
     * Gets the page at position `n`.
     * @param n index of the page
     */
    get_nth_page(n: number): Gtk.Widget
    /**
     * Gets current scroll position in `self`.
     * 
     * It's unitless, 1 matches 1 page.
     */
    get_position(): number
    /**
     * Gets duration of the animation used when adding or removing pages.
     */
    get_reveal_duration(): number
    /**
     * Gets the scroll animation spring parameters for `self`.
     */
    get_scroll_params(): SpringParams
    /**
     * Gets spacing between pages in pixels.
     */
    get_spacing(): number
    /**
     * Inserts `child` into `self` at position `position`.
     * 
     * If position is -1, or larger than the number of pages,
     * `child` will be appended to the end.
     * @param child a widget to add
     * @param position the position to insert `child` at
     */
    insert(child: Gtk.Widget, position: number): void
    /**
     * Prepends `child` to `self`.
     * @param child a widget to add
     */
    prepend(child: Gtk.Widget): void
    /**
     * Removes `child` from `self`.
     * @param child a widget to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Moves `child` into position `position`.
     * 
     * If position is -1, or larger than the number of pages, `child` will be moved
     * at the end.
     * @param child a widget to add
     * @param position the position to move `child` to
     */
    reorder(child: Gtk.Widget, position: number): void
    /**
     * Scrolls to `widget`.
     * 
     * If `animate` is `TRUE`, the transition will be animated.
     * @param widget a child of `self`
     * @param animate whether to animate the transition
     */
    scroll_to(widget: Gtk.Widget, animate: boolean): void
    /**
     * Sets whether to allow swiping for more than one page at a time.
     * @param allow_long_swipes whether to allow long swipes
     */
    set_allow_long_swipes(allow_long_swipes: boolean): void
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     * @param allow_mouse_drag whether `self` can be dragged with mouse pointer
     */
    set_allow_mouse_drag(allow_mouse_drag: boolean): void
    /**
     * Sets whether `self` will respond to scroll wheel events.
     * @param allow_scroll_wheel whether `self` will respond to scroll wheel events
     */
    set_allow_scroll_wheel(allow_scroll_wheel: boolean): void
    /**
     * Sets whether `self` can be navigated.
     * @param interactive whether `self` can be navigated
     */
    set_interactive(interactive: boolean): void
    /**
     * Sets duration of the animation used when adding or removing pages.
     * @param reveal_duration the new reveal duration value
     */
    set_reveal_duration(reveal_duration: number): void
    /**
     * Sets the scroll animation spring parameters for `self`.
     * @param params the new parameters
     */
    set_scroll_params(params: SpringParams): void
    /**
     * Sets spacing between pages in pixels.
     * @param spacing the new spacing value
     */
    set_spacing(spacing: number): void

    // Own signals of Adw-1.Adw.Carousel

    connect(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    connect_after(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    emit(sigName: "page-changed", index: number, ...args: any[]): void

    // Class property signals of Adw-1.Adw.Carousel

    connect(sigName: "notify::allow-long-swipes", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-long-swipes", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-long-swipes", ...args: any[]): void
    connect(sigName: "notify::allow-mouse-drag", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-mouse-drag", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-mouse-drag", ...args: any[]): void
    connect(sigName: "notify::allow-scroll-wheel", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-scroll-wheel", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-scroll-wheel", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::n-pages", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-pages", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reveal-duration", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-duration", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-duration", ...args: any[]): void
    connect(sigName: "notify::scroll-params", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-params", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-params", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Carousel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A paginated scrolling widget.
 * 
 * <picture>
 *   <source srcset="carousel-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="carousel.png" alt="carousel">
 * </picture>
 * 
 * The `AdwCarousel` widget can be used to display a set of pages with
 * swipe-based navigation between them.
 * 
 * [class`CarouselIndicatorDots]` and [class`CarouselIndicatorLines]` can be used
 * to provide page indicators for `AdwCarousel`.
 * 
 * ## CSS nodes
 * 
 * `AdwCarousel` has a single CSS node with name `carousel`.
 * @class 
 */
class Carousel extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Carousel

    static name: string
    static $gtype: GObject.GType<Carousel>

    // Constructors of Adw-1.Adw.Carousel

    constructor(config?: Carousel.ConstructorProperties) 
    /**
     * Creates a new `AdwCarousel`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwCarousel`.
     * @constructor 
     */
    static new(): Carousel
    _init(config?: Carousel.ConstructorProperties): void
}

module CarouselIndicatorDots {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.CarouselIndicatorDots

        /**
         * The displayed carousel.
         */
        carousel?: Carousel | null
    }

}

interface CarouselIndicatorDots extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.CarouselIndicatorDots

    /**
     * The displayed carousel.
     */
    carousel: Carousel

    // Owm methods of Adw-1.Adw.CarouselIndicatorDots

    /**
     * Gets the displayed carousel.
     */
    get_carousel(): Carousel | null
    /**
     * Sets the displayed carousel.
     * @param carousel a carousel
     */
    set_carousel(carousel: Carousel | null): void

    // Class property signals of Adw-1.Adw.CarouselIndicatorDots

    connect(sigName: "notify::carousel", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carousel", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::carousel", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: CarouselIndicatorDots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A dots indicator for [class`Carousel]`.
 * 
 * <picture>
 *   <source srcset="carousel-indicator-dots-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="carousel-indicator-dots.png" alt="carousel-indicator-dots">
 * </picture>
 * 
 * The `AdwCarouselIndicatorDots` widget shows a set of dots for each page of a
 * given [class`Carousel]`. The dot representing the carousel's active page is
 * larger and more opaque than the others, the transition to the active and
 * inactive state is gradual to match the carousel's position.
 * 
 * See also [class`CarouselIndicatorLines]`.
 * 
 * ## CSS nodes
 * 
 * `AdwCarouselIndicatorDots` has a single CSS node with name
 * `carouselindicatordots`.
 * @class 
 */
class CarouselIndicatorDots extends Gtk.Widget {

    // Own properties of Adw-1.Adw.CarouselIndicatorDots

    static name: string
    static $gtype: GObject.GType<CarouselIndicatorDots>

    // Constructors of Adw-1.Adw.CarouselIndicatorDots

    constructor(config?: CarouselIndicatorDots.ConstructorProperties) 
    /**
     * Creates a new `AdwCarouselIndicatorDots`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwCarouselIndicatorDots`.
     * @constructor 
     */
    static new(): CarouselIndicatorDots
    _init(config?: CarouselIndicatorDots.ConstructorProperties): void
}

module CarouselIndicatorLines {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.CarouselIndicatorLines

        /**
         * The displayed carousel.
         */
        carousel?: Carousel | null
    }

}

interface CarouselIndicatorLines extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.CarouselIndicatorLines

    /**
     * The displayed carousel.
     */
    carousel: Carousel

    // Owm methods of Adw-1.Adw.CarouselIndicatorLines

    /**
     * Gets the displayed carousel.
     */
    get_carousel(): Carousel | null
    /**
     * Sets the displayed carousel.
     * @param carousel a carousel
     */
    set_carousel(carousel: Carousel | null): void

    // Class property signals of Adw-1.Adw.CarouselIndicatorLines

    connect(sigName: "notify::carousel", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carousel", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::carousel", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: CarouselIndicatorLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A lines indicator for [class`Carousel]`.
 * 
 * <picture>
 *   <source srcset="carousel-indicator-dots-lines.png" media="(prefers-color-scheme: dark)">
 *   <img src="carousel-indicator-lines.png" alt="carousel-indicator-lines">
 * </picture>
 * 
 * The `AdwCarouselIndicatorLines` widget shows a set of lines for each page of
 * a given [class`Carousel]`. The carousel's active page is shown as another line
 * that moves between them to match the carousel's position.
 * 
 * See also [class`CarouselIndicatorDots]`.
 * 
 * ## CSS nodes
 * 
 * `AdwCarouselIndicatorLines` has a single CSS node with name
 * `carouselindicatorlines`.
 * @class 
 */
class CarouselIndicatorLines extends Gtk.Widget {

    // Own properties of Adw-1.Adw.CarouselIndicatorLines

    static name: string
    static $gtype: GObject.GType<CarouselIndicatorLines>

    // Constructors of Adw-1.Adw.CarouselIndicatorLines

    constructor(config?: CarouselIndicatorLines.ConstructorProperties) 
    /**
     * Creates a new `AdwCarouselIndicatorLines`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwCarouselIndicatorLines`.
     * @constructor 
     */
    static new(): CarouselIndicatorLines
    _init(config?: CarouselIndicatorLines.ConstructorProperties): void
}

module Clamp {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Clamp

        /**
         * The child widget of the `AdwClamp`.
         */
        child?: Gtk.Widget | null
        /**
         * The maximum size allocated to the child.
         * 
         * It is the width if the clamp is horizontal, or the height if it is vertical.
         */
        maximum_size?: number | null
        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the clamp will tighten its grip on the child,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum size, the child
         * will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the child,
         * the child will be allocated all the size up to the maximum.
         * If the threshold is lower than the minimum size to allocate to the child,
         * that size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on the child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         */
        tightening_threshold?: number | null
    }

}

interface Clamp extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Clamp

    /**
     * The child widget of the `AdwClamp`.
     */
    child: Gtk.Widget
    /**
     * The maximum size allocated to the child.
     * 
     * It is the width if the clamp is horizontal, or the height if it is vertical.
     */
    maximum_size: number
    /**
     * The size above which the child is clamped.
     * 
     * Starting from this size, the clamp will tighten its grip on the child,
     * slowly allocating less and less of the available size up to the maximum
     * allocated size. Below that threshold and below the maximum size, the child
     * will be allocated all the available size.
     * 
     * If the threshold is greater than the maximum size to allocate to the child,
     * the child will be allocated all the size up to the maximum.
     * If the threshold is lower than the minimum size to allocate to the child,
     * that size will be used as the tightening threshold.
     * 
     * Effectively, tightening the grip on the child before it reaches its maximum
     * size makes transitions to and from the maximum size smoother when resizing.
     */
    tightening_threshold: number

    // Owm methods of Adw-1.Adw.Clamp

    /**
     * Gets the child widget of `self`.
     */
    get_child(): Gtk.Widget | null
    /**
     * Gets the maximum size allocated to the child.
     */
    get_maximum_size(): number
    /**
     * Gets the size above which the child is clamped.
     */
    get_tightening_threshold(): number
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    set_child(child: Gtk.Widget | null): void
    /**
     * Sets the maximum size allocated to the child.
     * @param maximum_size the maximum size
     */
    set_maximum_size(maximum_size: number): void
    /**
     * Sets the size above which the child is clamped.
     * @param tightening_threshold the tightening threshold
     */
    set_tightening_threshold(tightening_threshold: number): void

    // Class property signals of Adw-1.Adw.Clamp

    connect(sigName: "notify::child", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::maximum-size", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximum-size", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximum-size", ...args: any[]): void
    connect(sigName: "notify::tightening-threshold", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tightening-threshold", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tightening-threshold", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Clamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget constraining its child to a given size.
 * 
 * <picture>
 *   <source srcset="clamp-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="clamp-wide.png" alt="clamp-wide">
 * </picture>
 * <picture>
 *   <source srcset="clamp-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="clamp-narrow.png" alt="clamp-narrow">
 * </picture>
 * 
 * The `AdwClamp` widget constrains the size of the widget it contains to a
 * given maximum size. It will constrain the width if it is horizontal, or the
 * height if it is vertical. The expansion of the child from its minimum to its
 * maximum size is eased out for a smooth transition.
 * 
 * If the child requires more than the requested maximum size, it will be
 * allocated the minimum size it can fit in instead.
 * 
 * ## CSS nodes
 * 
 * `AdwClamp` has a single CSS node with name `clamp`.
 * 
 * Its children will receive the style classes `.large` when the child reached
 * its maximum size, `.small` when the clamp allocates its full size to the
 * child, `.medium` in-between, or none if it hasn't computed its size yet.
 * @class 
 */
class Clamp extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Clamp

    static name: string
    static $gtype: GObject.GType<Clamp>

    // Constructors of Adw-1.Adw.Clamp

    constructor(config?: Clamp.ConstructorProperties) 
    /**
     * Creates a new `AdwClamp`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwClamp`.
     * @constructor 
     */
    static new(): Clamp
    _init(config?: Clamp.ConstructorProperties): void
}

module ClampLayout {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Orientable.ConstructorProperties, Gtk.LayoutManager.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ClampLayout

        /**
         * The maximum size to allocate to the children.
         * 
         * It is the width if the layout is horizontal, or the height if it is
         * vertical.
         */
        maximum_size?: number | null
        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the layout will tighten its grip on the children,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum size, the
         * children will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the
         * children, they will be allocated the whole size up to the maximum. If the
         * threshold is lower than the minimum size to allocate to the children, that
         * size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on a child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         */
        tightening_threshold?: number | null
    }

}

interface ClampLayout extends Gtk.Orientable {

    // Own properties of Adw-1.Adw.ClampLayout

    /**
     * The maximum size to allocate to the children.
     * 
     * It is the width if the layout is horizontal, or the height if it is
     * vertical.
     */
    maximum_size: number
    /**
     * The size above which the child is clamped.
     * 
     * Starting from this size, the layout will tighten its grip on the children,
     * slowly allocating less and less of the available size up to the maximum
     * allocated size. Below that threshold and below the maximum size, the
     * children will be allocated all the available size.
     * 
     * If the threshold is greater than the maximum size to allocate to the
     * children, they will be allocated the whole size up to the maximum. If the
     * threshold is lower than the minimum size to allocate to the children, that
     * size will be used as the tightening threshold.
     * 
     * Effectively, tightening the grip on a child before it reaches its maximum
     * size makes transitions to and from the maximum size smoother when resizing.
     */
    tightening_threshold: number

    // Owm methods of Adw-1.Adw.ClampLayout

    /**
     * Gets the maximum size allocated to the children.
     */
    get_maximum_size(): number
    /**
     * Gets the size above which the children are clamped.
     */
    get_tightening_threshold(): number
    /**
     * Sets the maximum size allocated to the children.
     * @param maximum_size the maximum size
     */
    set_maximum_size(maximum_size: number): void
    /**
     * Sets the size above which the children are clamped.
     * @param tightening_threshold the tightening threshold
     */
    set_tightening_threshold(tightening_threshold: number): void

    // Class property signals of Adw-1.Adw.ClampLayout

    connect(sigName: "notify::maximum-size", callback: (($obj: ClampLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximum-size", callback: (($obj: ClampLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximum-size", ...args: any[]): void
    connect(sigName: "notify::tightening-threshold", callback: (($obj: ClampLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tightening-threshold", callback: (($obj: ClampLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tightening-threshold", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ClampLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ClampLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A layout manager constraining its children to a given size.
 * 
 * <picture>
 *   <source srcset="clamp-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="clamp-wide.png" alt="clamp-wide">
 * </picture>
 * <picture>
 *   <source srcset="clamp-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="clamp-narrow.png" alt="clamp-narrow">
 * </picture>
 * 
 * `AdwClampLayout` constraints the size of the widgets it contains to a given
 * maximum size. It will constrain the width if it is horizontal, or the height
 * if it is vertical. The expansion of the children from their minimum to their
 * maximum size is eased out for a smooth transition.
 * 
 * If a child requires more than the requested maximum size, it will be
 * allocated the minimum size it can fit in instead.
 * 
 * Each child will get the style  classes .large when it reached its maximum
 * size, .small when it's allocated the full size, .medium in-between, or none
 * if it hasn't been allocated yet.
 * @class 
 */
class ClampLayout extends Gtk.LayoutManager {

    // Own properties of Adw-1.Adw.ClampLayout

    static name: string
    static $gtype: GObject.GType<ClampLayout>

    // Constructors of Adw-1.Adw.ClampLayout

    constructor(config?: ClampLayout.ConstructorProperties) 
    /**
     * Creates a new `AdwClampLayout`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwClampLayout`.
     * @constructor 
     */
    static new(): ClampLayout
    _init(config?: ClampLayout.ConstructorProperties): void
}

module ClampScrollable {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ClampScrollable

        /**
         * The child widget of the `AdwClampScrollable`.
         */
        child?: Gtk.Widget | null
        /**
         * The maximum size allocated to the child.
         * 
         * It is the width if the clamp is horizontal, or the height if it is vertical.
         */
        maximum_size?: number | null
        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the clamp will tighten its grip on the child,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum width, the child
         * will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the child,
         * the child will be allocated all the width up to the maximum.
         * If the threshold is lower than the minimum size to allocate to the child,
         * that size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on the child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         */
        tightening_threshold?: number | null
    }

}

interface ClampScrollable extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable, Gtk.Scrollable {

    // Own properties of Adw-1.Adw.ClampScrollable

    /**
     * The child widget of the `AdwClampScrollable`.
     */
    child: Gtk.Widget
    /**
     * The maximum size allocated to the child.
     * 
     * It is the width if the clamp is horizontal, or the height if it is vertical.
     */
    maximum_size: number
    /**
     * The size above which the child is clamped.
     * 
     * Starting from this size, the clamp will tighten its grip on the child,
     * slowly allocating less and less of the available size up to the maximum
     * allocated size. Below that threshold and below the maximum width, the child
     * will be allocated all the available size.
     * 
     * If the threshold is greater than the maximum size to allocate to the child,
     * the child will be allocated all the width up to the maximum.
     * If the threshold is lower than the minimum size to allocate to the child,
     * that size will be used as the tightening threshold.
     * 
     * Effectively, tightening the grip on the child before it reaches its maximum
     * size makes transitions to and from the maximum size smoother when resizing.
     */
    tightening_threshold: number

    // Owm methods of Adw-1.Adw.ClampScrollable

    /**
     * Gets the child widget of `self`.
     */
    get_child(): Gtk.Widget | null
    /**
     * Gets the maximum size allocated to the child.
     */
    get_maximum_size(): number
    /**
     * Gets the size above which the child is clamped.
     */
    get_tightening_threshold(): number
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    set_child(child: Gtk.Widget | null): void
    /**
     * Sets the maximum size allocated to the child.
     * @param maximum_size the maximum size
     */
    set_maximum_size(maximum_size: number): void
    /**
     * Sets the size above which the child is clamped.
     * @param tightening_threshold the tightening threshold
     */
    set_tightening_threshold(tightening_threshold: number): void

    // Class property signals of Adw-1.Adw.ClampScrollable

    connect(sigName: "notify::child", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::maximum-size", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximum-size", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximum-size", ...args: any[]): void
    connect(sigName: "notify::tightening-threshold", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tightening-threshold", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tightening-threshold", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: ClampScrollable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A scrollable [class`Clamp]`.
 * 
 * `AdwClampScrollable` is a variant of [class`Clamp]` that implements the
 * [iface`Gtk`.Scrollable] interface.
 * 
 * The primary use case for `AdwClampScrollable` is clamping
 * [class`Gtk`.ListView].
 * @class 
 */
class ClampScrollable extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ClampScrollable

    static name: string
    static $gtype: GObject.GType<ClampScrollable>

    // Constructors of Adw-1.Adw.ClampScrollable

    constructor(config?: ClampScrollable.ConstructorProperties) 
    /**
     * Creates a new `AdwClampScrollable`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwClampScrollable`.
     * @constructor 
     */
    static new(): ClampScrollable
    _init(config?: ClampScrollable.ConstructorProperties): void
}

module ComboRow {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, ActionRow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ComboRow

        /**
         * An expression used to obtain strings from items.
         * 
         * It's used to bind strings to labels produced by the default factory.
         * 
         * If [property`ComboRow:`factory] is not set, the expression is also used to
         * bind strings to labels produced by a default factory.
         */
        expression?: Gtk.Expression | null
        /**
         * Factory for populating list items.
         * 
         * This factory is always used for the item in the row. It is also used for
         * items in the popup unless [property`ComboRow:`list-factory] is set.
         */
        factory?: Gtk.ListItemFactory | null
        /**
         * The factory for populating list items in the popup.
         * 
         * If this is not set, [property`ComboRow:`factory] is used.
         */
        list_factory?: Gtk.ListItemFactory | null
        /**
         * Model for the displayed items.
         */
        model?: Gio.ListModel | null
        /**
         * The position of the selected item.
         * 
         * If no item is selected, the property has the value
         * [const`Gtk`.INVALID_LIST_POSITION]
         */
        selected?: number | null
        /**
         * Whether to use the current value as the subtitle.
         * 
         * If you use a custom list item factory, you will need to give the row a
         * name conversion expression with [property`ComboRow:`expression].
         * 
         * If `TRUE`, you should not access [property`ActionRow:`subtitle].
         */
        use_subtitle?: boolean | null
    }

}

interface ComboRow extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ComboRow

    /**
     * An expression used to obtain strings from items.
     * 
     * It's used to bind strings to labels produced by the default factory.
     * 
     * If [property`ComboRow:`factory] is not set, the expression is also used to
     * bind strings to labels produced by a default factory.
     */
    expression: Gtk.Expression
    /**
     * Factory for populating list items.
     * 
     * This factory is always used for the item in the row. It is also used for
     * items in the popup unless [property`ComboRow:`list-factory] is set.
     */
    factory: Gtk.ListItemFactory
    /**
     * The factory for populating list items in the popup.
     * 
     * If this is not set, [property`ComboRow:`factory] is used.
     */
    list_factory: Gtk.ListItemFactory
    /**
     * Model for the displayed items.
     */
    model: Gio.ListModel
    /**
     * The position of the selected item.
     * 
     * If no item is selected, the property has the value
     * [const`Gtk`.INVALID_LIST_POSITION]
     */
    selected: number
    /**
     * The selected item.
     */
    readonly selected_item: GObject.Object
    /**
     * Whether to use the current value as the subtitle.
     * 
     * If you use a custom list item factory, you will need to give the row a
     * name conversion expression with [property`ComboRow:`expression].
     * 
     * If `TRUE`, you should not access [property`ActionRow:`subtitle].
     */
    use_subtitle: boolean

    // Own fields of Adw-1.Adw.ComboRow

    parent_instance: ActionRow & PreferencesRow & Gtk.ListBoxRow & Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.ComboRow

    /**
     * Gets the expression used to obtain strings from items.
     */
    get_expression(): Gtk.Expression | null
    /**
     * Gets the factory that's currently used to populate list items.
     */
    get_factory(): Gtk.ListItemFactory | null
    /**
     * Gets the factory that's currently used to populate list items in the popup.
     */
    get_list_factory(): Gtk.ListItemFactory | null
    /**
     * Gets the model that provides the displayed items.
     */
    get_model(): Gio.ListModel | null
    /**
     * Gets the position of the selected item.
     */
    get_selected(): number
    /**
     * Gets the selected item.
     */
    get_selected_item(): GObject.Object | null
    /**
     * Gets whether to use the current value as the subtitle.
     */
    get_use_subtitle(): boolean
    /**
     * Sets the expression used to obtain strings from items.
     * 
     * The expression must have a value type of `G_TYPE_STRING`.
     * @param expression an expression
     */
    set_expression(expression: Gtk.Expression | null): void
    /**
     * Sets the `GtkListItemFactory` to use for populating list items.
     * @param factory the factory to use
     */
    set_factory(factory: Gtk.ListItemFactory | null): void
    /**
     * Sets the `GtkListItemFactory` to use for populating list items in the popup.
     * @param factory the factory to use
     */
    set_list_factory(factory: Gtk.ListItemFactory | null): void
    /**
     * Sets the [iface`Gio`.ListModel] to use.
     * @param model the model to use
     */
    set_model(model: Gio.ListModel | null): void
    /**
     * Selects the item at the given position.
     * @param position the position of the item to select, or   [const`Gtk`.INVALID_LIST_POSITION]
     */
    set_selected(position: number): void
    /**
     * Sets whether to use the current value as the subtitle.
     * @param use_subtitle whether to use the current value as the subtitle
     */
    set_use_subtitle(use_subtitle: boolean): void

    // Conflicting methods

    /**
     * Activates `self`.
     */
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean

    // Class property signals of Adw-1.Adw.ComboRow

    connect(sigName: "notify::expression", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::factory", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::factory", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::list-factory", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list-factory", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::list-factory", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::selected-item", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-item", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected-item", ...args: any[]): void
    connect(sigName: "notify::use-subtitle", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-subtitle", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-subtitle", ...args: any[]): void
    connect(sigName: "notify::activatable-widget", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable-widget", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable-widget", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::subtitle-lines", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-lines", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-lines", ...args: any[]): void
    connect(sigName: "notify::title-lines", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-lines", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-lines", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-selectable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-selectable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-selectable", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ComboRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to choose from a list of items.
 * 
 * <picture>
 *   <source srcset="combo-row-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="combo-row.png" alt="combo-row">
 * </picture>
 * 
 * The `AdwComboRow` widget allows the user to choose from a list of valid
 * choices. The row displays the selected choice. When activated, the row
 * displays a popover which allows the user to make a new choice.
 * 
 * `AdwComboRow` mirrors [class`Gtk`.DropDown], see that widget for details.
 * 
 * `AdwComboRow` is [property`Gtk`.ListBoxRow:activatable] if a model is set.
 * 
 * ## CSS nodes
 * 
 * `AdwComboRow` has a main CSS node with name `row` and the `.combo` style
 * class.
 * 
 * Its popover has the node named `popover` with the `.menu` style class, it
 * contains a [class`Gtk`.ScrolledWindow], which in turn contains a
 * [class`Gtk`.ListView], both are accessible via their regular nodes.
 * 
 * ## Accessibility
 * 
 * `AdwComboRow` uses the `GTK_ACCESSIBLE_ROLE_COMBO_BOX` role.
 * @class 
 */
class ComboRow extends ActionRow {

    // Own properties of Adw-1.Adw.ComboRow

    static name: string
    static $gtype: GObject.GType<ComboRow>

    // Constructors of Adw-1.Adw.ComboRow

    constructor(config?: ComboRow.ConstructorProperties) 
    /**
     * Creates a new `AdwComboRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwComboRow`.
     * @constructor 
     */
    static new(): ComboRow
    _init(config?: ComboRow.ConstructorProperties): void
}

module EnumListItem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface EnumListItem {

    // Own properties of Adw-1.Adw.EnumListItem

    /**
     * The enum value name.
     */
    readonly name: string
    /**
     * The enum value nick.
     */
    readonly nick: string
    /**
     * The enum value.
     */
    readonly value: number

    // Owm methods of Adw-1.Adw.EnumListItem

    /**
     * Gets the enum value name.
     */
    get_name(): string
    /**
     * Gets the enum value nick.
     */
    get_nick(): string
    /**
     * Gets the enum value.
     */
    get_value(): number

    // Class property signals of Adw-1.Adw.EnumListItem

    connect(sigName: "notify::name", callback: (($obj: EnumListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EnumListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nick", callback: (($obj: EnumListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nick", callback: (($obj: EnumListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nick", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: EnumListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: EnumListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `AdwEnumListItem` is the type of items in a [class`EnumListModel]`.
 * @class 
 */
class EnumListItem extends GObject.Object {

    // Own properties of Adw-1.Adw.EnumListItem

    static name: string
    static $gtype: GObject.GType<EnumListItem>

    // Constructors of Adw-1.Adw.EnumListItem

    constructor(config?: EnumListItem.ConstructorProperties) 
    _init(config?: EnumListItem.ConstructorProperties): void
}

module EnumListModel {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.EnumListModel

        /**
         * The type of the enum represented by the model.
         */
        enum_type?: GObject.GType | null
    }

}

interface EnumListModel extends Gio.ListModel {

    // Own properties of Adw-1.Adw.EnumListModel

    /**
     * The type of the enum represented by the model.
     */
    readonly enum_type: GObject.GType

    // Owm methods of Adw-1.Adw.EnumListModel

    /**
     * Finds the position of a given enum value in `self`.
     * @param value an enum value
     */
    find_position(value: number): number
    /**
     * Gets the type of the enum represented by `self`.
     */
    get_enum_type(): GObject.GType

    // Class property signals of Adw-1.Adw.EnumListModel

    connect(sigName: "notify::enum-type", callback: (($obj: EnumListModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enum-type", callback: (($obj: EnumListModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enum-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [iface`Gio`.ListModel] representing values of a given enum.
 * 
 * `AdwEnumListModel` contains objects of type [class`EnumListItem]`.
 * @class 
 */
class EnumListModel extends GObject.Object {

    // Own properties of Adw-1.Adw.EnumListModel

    static name: string
    static $gtype: GObject.GType<EnumListModel>

    // Constructors of Adw-1.Adw.EnumListModel

    constructor(config?: EnumListModel.ConstructorProperties) 
    /**
     * Creates a new `AdwEnumListModel` for `enum_type`.
     * @constructor 
     * @param enum_type the type of the enum to construct the model from
     */
    constructor(enum_type: GObject.GType) 
    /**
     * Creates a new `AdwEnumListModel` for `enum_type`.
     * @constructor 
     * @param enum_type the type of the enum to construct the model from
     */
    static new(enum_type: GObject.GType): EnumListModel
    _init(config?: EnumListModel.ConstructorProperties): void
}

module ExpanderRow {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, PreferencesRow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ExpanderRow

        /**
         * Whether expansion is enabled.
         */
        enable_expansion?: boolean | null
        /**
         * Whether the row is expanded.
         */
        expanded?: boolean | null
        /**
         * The icon name for this row.
         */
        icon_name?: string | null
        /**
         * Whether the switch enabling the expansion is visible.
         */
        show_enable_switch?: boolean | null
        /**
         * The subtitle for this row.
         */
        subtitle?: string | null
    }

}

interface ExpanderRow extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ExpanderRow

    /**
     * Whether expansion is enabled.
     */
    enable_expansion: boolean
    /**
     * Whether the row is expanded.
     */
    expanded: boolean
    /**
     * The icon name for this row.
     */
    icon_name: string
    /**
     * Whether the switch enabling the expansion is visible.
     */
    show_enable_switch: boolean
    /**
     * The subtitle for this row.
     */
    subtitle: string

    // Own fields of Adw-1.Adw.ExpanderRow

    parent_instance: PreferencesRow & Gtk.ListBoxRow & Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.ExpanderRow

    /**
     * Adds an action widget to `self`.
     * @param widget a widget
     */
    add_action(widget: Gtk.Widget): void
    /**
     * Adds a prefix widget to `self`.
     * @param widget a widget
     */
    add_prefix(widget: Gtk.Widget): void
    /**
     * Adds a widget to `self`.
     * 
     * The widget will appear in the expanding list below `self`.
     * @param child a widget
     */
    add_row(child: Gtk.Widget): void
    /**
     * Gets whether the expansion of `self` is enabled.
     */
    get_enable_expansion(): boolean
    /**
     * Gets whether `self` is expanded.
     */
    get_expanded(): boolean
    /**
     * Gets the icon name for `self`.
     */
    get_icon_name(): string | null
    /**
     * Gets whether the switch enabling the expansion of `self` is visible.
     */
    get_show_enable_switch(): boolean
    /**
     * Gets the subtitle for `self`.
     */
    get_subtitle(): string
    remove(child: Gtk.Widget): void
    /**
     * Sets whether the expansion of `self` is enabled.
     * @param enable_expansion whether to enable the expansion
     */
    set_enable_expansion(enable_expansion: boolean): void
    /**
     * Sets whether `self` is expanded.
     * @param expanded whether to expand the row
     */
    set_expanded(expanded: boolean): void
    /**
     * Sets the icon name for `self`.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets whether the switch enabling the expansion of `self` is visible.
     * @param show_enable_switch whether to show the switch enabling the expansion
     */
    set_show_enable_switch(show_enable_switch: boolean): void
    /**
     * Sets the subtitle for `self`.
     * @param subtitle the subtitle
     */
    set_subtitle(subtitle: string): void

    // Class property signals of Adw-1.Adw.ExpanderRow

    connect(sigName: "notify::enable-expansion", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-expansion", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-expansion", ...args: any[]): void
    connect(sigName: "notify::expanded", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expanded", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expanded", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::show-enable-switch", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-enable-switch", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-enable-switch", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-selectable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-selectable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-selectable", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ExpanderRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to reveal widgets.
 * 
 * <picture>
 *   <source srcset="expander-row-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="expander-row.png" alt="expander-row">
 * </picture>
 * 
 * The `AdwExpanderRow` widget allows the user to reveal or hide widgets below
 * it. It also allows the user to enable the expansion of the row, allowing to
 * disable all that the row contains.
 * 
 * ## AdwExpanderRow as GtkBuildable
 * 
 * The `AdwExpanderRow` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding a child as an action widget by specifying “action” as the
 * “type” attribute of a <child> element.
 * 
 * It also supports adding it as a prefix widget by specifying “prefix” as the
 * “type” attribute of a <child> element.
 * 
 * ## CSS nodes
 * 
 * `AdwExpanderRow` has a main CSS node with name `row` and the `.expander`
 * style class. It has the `.empty` style class when it contains no children.
 * 
 * It contains the subnodes `row.header` for its main embedded row,
 * `list.nested` for the list it can expand, and `image.expander-row-arrow` for
 * its arrow.
 * @class 
 */
class ExpanderRow extends PreferencesRow {

    // Own properties of Adw-1.Adw.ExpanderRow

    static name: string
    static $gtype: GObject.GType<ExpanderRow>

    // Constructors of Adw-1.Adw.ExpanderRow

    constructor(config?: ExpanderRow.ConstructorProperties) 
    /**
     * Creates a new `AdwExpanderRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwExpanderRow`.
     * @constructor 
     */
    static new(): ExpanderRow
    _init(config?: ExpanderRow.ConstructorProperties): void
}

module Flap {

    // Constructor properties interface

    interface ConstructorProperties extends Swipeable.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Flap

        /**
         * The content widget.
         * 
         * It's always displayed when unfolded, and partially visible
         * when folded.
         */
        content?: Gtk.Widget | null
        /**
         * The flap widget.
         * 
         * It's only visible when [property`Flap:`reveal-progress] is greater than 0.
         */
        flap?: Gtk.Widget | null
        /**
         * The flap position.
         * 
         * If it's set to `GTK_PACK_START`, the flap is displayed before the content,
         * if `GTK_PACK_END`, it's displayed after the content.
         */
        flap_position?: Gtk.PackType | null
        /**
         * The fold transition animation duration, in milliseconds.
         */
        fold_duration?: number | null
        /**
         * The fold policy for the flap.
         */
        fold_policy?: FlapFoldPolicy | null
        /**
         * Determines when the flap will fold.
         * 
         * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, flap will only fold when
         * the children cannot fit anymore. With `ADW_FOLD_THRESHOLD_POLICY_NATURAL`,
         * it will fold as soon as children don't get their natural size.
         * 
         * This can be useful if you have a long ellipsizing label and want to let it
         * ellipsize instead of immediately folding.
         */
        fold_threshold_policy?: FoldThresholdPolicy | null
        /**
         * Whether the flap is locked.
         * 
         * If `FALSE`, folding when the flap is revealed automatically closes it, and
         * unfolding it when the flap is not revealed opens it. If `TRUE`,
         * [property`Flap:`reveal-flap] value never changes on its own.
         */
        locked?: boolean | null
        /**
         * Whether the flap is modal.
         * 
         * If `TRUE`, clicking the content widget while flap is revealed, as well as
         * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks
         * are passed through to the content widget.
         */
        modal?: boolean | null
        /**
         * Whether the flap widget is revealed.
         */
        reveal_flap?: boolean | null
        /**
         * The reveal animation spring parameters.
         * 
         * The default value is equivalent to:
         * 
         * ```c
         * adw_spring_params_new (1, 0.5, 500)
         * ```
         */
        reveal_params?: SpringParams | null
        /**
         * The separator widget.
         * 
         * It's displayed between content and flap when there's no shadow to display.
         * When exactly it's visible depends on the [property`Flap:`transition-type]
         * value.
         */
        separator?: Gtk.Widget | null
        /**
         * Whether the flap can be closed with a swipe gesture.
         * 
         * The area that can be swiped depends on the [property`Flap:`transition-type]
         * value.
         */
        swipe_to_close?: boolean | null
        /**
         * Whether the flap can be opened with a swipe gesture.
         * 
         * The area that can be swiped depends on the [property`Flap:`transition-type]
         * value.
         */
        swipe_to_open?: boolean | null
        /**
         * the type of animation used for reveal and fold transitions.
         * 
         * [property`Flap:`flap] is transparent by default, which means the content
         * will be seen through it with `ADW_FLAP_TRANSITION_TYPE_OVER` transitions;
         * add the [`.background`](style-classes.html#background) style class to it if
         * this is unwanted.
         */
        transition_type?: FlapTransitionType | null
    }

}

interface Flap extends Swipeable, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Flap

    /**
     * The content widget.
     * 
     * It's always displayed when unfolded, and partially visible
     * when folded.
     */
    content: Gtk.Widget
    /**
     * The flap widget.
     * 
     * It's only visible when [property`Flap:`reveal-progress] is greater than 0.
     */
    flap: Gtk.Widget
    /**
     * The flap position.
     * 
     * If it's set to `GTK_PACK_START`, the flap is displayed before the content,
     * if `GTK_PACK_END`, it's displayed after the content.
     */
    flap_position: Gtk.PackType
    /**
     * The fold transition animation duration, in milliseconds.
     */
    fold_duration: number
    /**
     * The fold policy for the flap.
     */
    fold_policy: FlapFoldPolicy
    /**
     * Determines when the flap will fold.
     * 
     * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, flap will only fold when
     * the children cannot fit anymore. With `ADW_FOLD_THRESHOLD_POLICY_NATURAL`,
     * it will fold as soon as children don't get their natural size.
     * 
     * This can be useful if you have a long ellipsizing label and want to let it
     * ellipsize instead of immediately folding.
     */
    fold_threshold_policy: FoldThresholdPolicy
    /**
     * Whether the flap is currently folded.
     * 
     * See [property`Flap:`fold-policy].
     */
    readonly folded: boolean
    /**
     * Whether the flap is locked.
     * 
     * If `FALSE`, folding when the flap is revealed automatically closes it, and
     * unfolding it when the flap is not revealed opens it. If `TRUE`,
     * [property`Flap:`reveal-flap] value never changes on its own.
     */
    locked: boolean
    /**
     * Whether the flap is modal.
     * 
     * If `TRUE`, clicking the content widget while flap is revealed, as well as
     * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks
     * are passed through to the content widget.
     */
    modal: boolean
    /**
     * Whether the flap widget is revealed.
     */
    reveal_flap: boolean
    /**
     * The reveal animation spring parameters.
     * 
     * The default value is equivalent to:
     * 
     * ```c
     * adw_spring_params_new (1, 0.5, 500)
     * ```
     */
    reveal_params: SpringParams
    /**
     * The current reveal transition progress.
     * 
     * 0 means fully hidden, 1 means fully revealed.
     * 
     * See [property`Flap:`reveal-flap].
     */
    readonly reveal_progress: number
    /**
     * The separator widget.
     * 
     * It's displayed between content and flap when there's no shadow to display.
     * When exactly it's visible depends on the [property`Flap:`transition-type]
     * value.
     */
    separator: Gtk.Widget
    /**
     * Whether the flap can be closed with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type]
     * value.
     */
    swipe_to_close: boolean
    /**
     * Whether the flap can be opened with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type]
     * value.
     */
    swipe_to_open: boolean
    /**
     * the type of animation used for reveal and fold transitions.
     * 
     * [property`Flap:`flap] is transparent by default, which means the content
     * will be seen through it with `ADW_FLAP_TRANSITION_TYPE_OVER` transitions;
     * add the [`.background`](style-classes.html#background) style class to it if
     * this is unwanted.
     */
    transition_type: FlapTransitionType

    // Owm methods of Adw-1.Adw.Flap

    /**
     * Gets the content widget for `self`.
     */
    get_content(): Gtk.Widget | null
    /**
     * Gets the flap widget for `self`.
     */
    get_flap(): Gtk.Widget | null
    /**
     * Gets the flap position for `self`.
     */
    get_flap_position(): Gtk.PackType
    /**
     * Gets the duration that fold transitions in `self` will take.
     */
    get_fold_duration(): number
    /**
     * Gets the fold policy for `self`.
     */
    get_fold_policy(): FlapFoldPolicy
    /**
     * Gets the fold threshold policy for `self`.
     */
    get_fold_threshold_policy(): FoldThresholdPolicy
    /**
     * Gets whether `self` is currently folded.
     */
    get_folded(): boolean
    /**
     * Gets whether `self` is locked.
     */
    get_locked(): boolean
    /**
     * Gets whether `self` is modal.
     */
    get_modal(): boolean
    /**
     * Gets whether the flap widget is revealed for `self`.
     */
    get_reveal_flap(): boolean
    /**
     * Gets the reveal animation spring parameters for `self`.
     */
    get_reveal_params(): SpringParams
    /**
     * Gets the current reveal progress for `self`.
     */
    get_reveal_progress(): number
    /**
     * Gets the separator widget for `self`.
     */
    get_separator(): Gtk.Widget | null
    /**
     * Gets whether `self` can be closed with a swipe gesture.
     */
    get_swipe_to_close(): boolean
    /**
     * Gets whether `self` can be opened with a swipe gesture.
     */
    get_swipe_to_open(): boolean
    /**
     * Gets the type of animation used for reveal and fold transitions in `self`.
     */
    get_transition_type(): FlapTransitionType
    /**
     * Sets the content widget for `self`.
     * @param content the content widget
     */
    set_content(content: Gtk.Widget | null): void
    /**
     * Sets the flap widget for `self`.
     * @param flap the flap widget
     */
    set_flap(flap: Gtk.Widget | null): void
    /**
     * Sets the flap position for `self`.
     * @param position the new value
     */
    set_flap_position(position: Gtk.PackType): void
    /**
     * Sets the duration that fold transitions in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    set_fold_duration(duration: number): void
    /**
     * Sets the fold policy for `self`.
     * @param policy the fold policy
     */
    set_fold_policy(policy: FlapFoldPolicy): void
    /**
     * Sets the fold threshold policy for `self`.
     * @param policy the policy to use
     */
    set_fold_threshold_policy(policy: FoldThresholdPolicy): void
    /**
     * Sets whether `self` is locked.
     * @param locked the new value
     */
    set_locked(locked: boolean): void
    /**
     * Sets whether `self` is modal.
     * @param modal whether `self` is modal
     */
    set_modal(modal: boolean): void
    /**
     * Sets whether the flap widget is revealed for `self`.
     * @param reveal_flap whether to reveal the flap widget
     */
    set_reveal_flap(reveal_flap: boolean): void
    /**
     * Sets the reveal animation spring parameters for `self`.
     * @param params the new parameters
     */
    set_reveal_params(params: SpringParams): void
    /**
     * Sets the separator widget for `self`.
     * @param separator the separator widget
     */
    set_separator(separator: Gtk.Widget | null): void
    /**
     * Sets whether `self` can be closed with a swipe gesture.
     * @param swipe_to_close whether `self` can be closed with a swipe gesture
     */
    set_swipe_to_close(swipe_to_close: boolean): void
    /**
     * Sets whether `self` can be opened with a swipe gesture.
     * @param swipe_to_open whether `self` can be opened with a swipe gesture
     */
    set_swipe_to_open(swipe_to_open: boolean): void
    /**
     * Sets the type of animation used for reveal and fold transitions in `self`.
     * @param transition_type the new transition type
     */
    set_transition_type(transition_type: FlapTransitionType): void

    // Class property signals of Adw-1.Adw.Flap

    connect(sigName: "notify::content", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::flap", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flap", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flap", ...args: any[]): void
    connect(sigName: "notify::flap-position", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flap-position", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flap-position", ...args: any[]): void
    connect(sigName: "notify::fold-duration", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fold-duration", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fold-duration", ...args: any[]): void
    connect(sigName: "notify::fold-policy", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fold-policy", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fold-policy", ...args: any[]): void
    connect(sigName: "notify::fold-threshold-policy", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fold-threshold-policy", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fold-threshold-policy", ...args: any[]): void
    connect(sigName: "notify::folded", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folded", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::reveal-flap", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-flap", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-flap", ...args: any[]): void
    connect(sigName: "notify::reveal-params", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-params", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-params", ...args: any[]): void
    connect(sigName: "notify::reveal-progress", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-progress", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-progress", ...args: any[]): void
    connect(sigName: "notify::separator", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::separator", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::separator", ...args: any[]): void
    connect(sigName: "notify::swipe-to-close", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swipe-to-close", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swipe-to-close", ...args: any[]): void
    connect(sigName: "notify::swipe-to-open", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swipe-to-open", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swipe-to-open", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Flap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An adaptive container acting like a box or an overlay.
 * 
 * <picture>
 *   <source srcset="flap-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="flap-wide.png" alt="flap-wide">
 * </picture>
 * <picture>
 *   <source srcset="flap-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="flap-narrow.png" alt="flap-narrow">
 * </picture>
 * 
 * The `AdwFlap` widget can display its children like a [class`Gtk`.Box] does or
 * like a [class`Gtk`.Overlay] does, according to the
 * [property`Flap:`fold-policy] value.
 * 
 * `AdwFlap` has at most three children: [property`Flap:`content],
 * [property`Flap:`flap] and [property`Flap:`separator]. Content is the primary
 * child, flap is displayed next to it when unfolded, or overlays it when
 * folded. Flap can be shown or hidden by changing the
 * [property`Flap:`reveal-flap] value, as well as via swipe gestures if
 * [property`Flap:`swipe-to-open] and/or [property`Flap:`swipe-to-close] are set
 * to `TRUE`.
 * 
 * Optionally, a separator can be provided, which would be displayed between
 * the content and the flap when there's no shadow to separate them, depending
 * on the transition type.
 * 
 * [property`Flap:`flap] is transparent by default; add the
 * [`.background`](style-classes.html#background) style class to it if this is
 * unwanted.
 * 
 * If [property`Flap:`modal] is set to `TRUE`, content becomes completely
 * inaccessible when the flap is revealed while folded.
 * 
 * The position of the flap and separator children relative to the content is
 * determined by orientation, as well as the [property`Flap:`flap-position]
 * value.
 * 
 * Folding the flap will automatically hide the flap widget, and unfolding it
 * will automatically reveal it. If this behavior is not desired, the
 * [property`Flap:`locked] property can be used to override it.
 * 
 * Common use cases include sidebars, header bars that need to be able to
 * overlap the window content (for example, in fullscreen mode) and bottom
 * sheets.
 * 
 * ## AdwFlap as GtkBuildable
 * 
 * The `AdwFlap` implementation of the [iface`Gtk`.Buildable] interface supports
 * setting the flap child by specifying “flap” as the “type” attribute of a
 * <child> element, and separator by specifying “separator”. Specifying
 * “content” child type or omitting it results in setting the content child.
 * 
 * ## CSS nodes
 * 
 * `AdwFlap` has a single CSS node with name `flap`. The node will get the style
 * classes `.folded` when it is folded, and `.unfolded` when it's not.
 * @class 
 */
class Flap extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Flap

    static name: string
    static $gtype: GObject.GType<Flap>

    // Constructors of Adw-1.Adw.Flap

    constructor(config?: Flap.ConstructorProperties) 
    /**
     * Creates a new `AdwFlap`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwFlap`.
     * @constructor 
     */
    static new(): Flap
    _init(config?: Flap.ConstructorProperties): void
}

module HeaderBar {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.HeaderBar

        /**
         * The policy for aligning the center widget.
         */
        centering_policy?: CenteringPolicy | null
        /**
         * The decoration layout for buttons.
         * 
         * If this property is not set, the
         * [property`Gtk`.Settings:gtk-decoration-layout] setting is used.
         * 
         * The format of the string is button names, separated by commas. A colon
         * separates the buttons that should appear at the start from those at the
         * end. Recognized button names are minimize, maximize, close and icon (the
         * window icon).
         * 
         * For example, “icon:minimize,maximize,close” specifies an icon at the start,
         * and minimize, maximize and close buttons at the end.
         */
        decoration_layout?: string | null
        /**
         * Whether to show title buttons at the end of the header bar.
         * 
         * See [property`HeaderBar:`show-start-title-buttons] for the other side.
         * 
         * Which buttons are actually shown and where is determined by the
         * [property`HeaderBar:`decoration-layout] property, and by the state of the
         * window (e.g. a close button will not be shown if the window can't be
         * closed).
         */
        show_end_title_buttons?: boolean | null
        /**
         * Whether to show title buttons at the start of the header bar.
         * 
         * See [property`HeaderBar:`show-end-title-buttons] for the other side.
         * 
         * Which buttons are actually shown and where is determined by the
         * [property`HeaderBar:`decoration-layout] property, and by the state of the
         * window (e.g. a close button will not be shown if the window can't be
         * closed).
         */
        show_start_title_buttons?: boolean | null
        /**
         * The title widget to display.
         * 
         * When set to `NULL`, the header bar will display the title of the window it
         * is contained in.
         * 
         * To use a different title, use [class`WindowTitle]`:
         * 
         * ```xml
         * <object class="AdwHeaderBar">
         *   <property name="title-widget">
         *     <object class="AdwWindowTitle">
         *       <property name="title" translatable="yes">Title</property>
         *     </object>
         *   </property>
         * </object>
         * ```
         */
        title_widget?: Gtk.Widget | null
    }

}

interface HeaderBar extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.HeaderBar

    /**
     * The policy for aligning the center widget.
     */
    centering_policy: CenteringPolicy
    /**
     * The decoration layout for buttons.
     * 
     * If this property is not set, the
     * [property`Gtk`.Settings:gtk-decoration-layout] setting is used.
     * 
     * The format of the string is button names, separated by commas. A colon
     * separates the buttons that should appear at the start from those at the
     * end. Recognized button names are minimize, maximize, close and icon (the
     * window icon).
     * 
     * For example, “icon:minimize,maximize,close” specifies an icon at the start,
     * and minimize, maximize and close buttons at the end.
     */
    decoration_layout: string
    /**
     * Whether to show title buttons at the end of the header bar.
     * 
     * See [property`HeaderBar:`show-start-title-buttons] for the other side.
     * 
     * Which buttons are actually shown and where is determined by the
     * [property`HeaderBar:`decoration-layout] property, and by the state of the
     * window (e.g. a close button will not be shown if the window can't be
     * closed).
     */
    show_end_title_buttons: boolean
    /**
     * Whether to show title buttons at the start of the header bar.
     * 
     * See [property`HeaderBar:`show-end-title-buttons] for the other side.
     * 
     * Which buttons are actually shown and where is determined by the
     * [property`HeaderBar:`decoration-layout] property, and by the state of the
     * window (e.g. a close button will not be shown if the window can't be
     * closed).
     */
    show_start_title_buttons: boolean
    /**
     * The title widget to display.
     * 
     * When set to `NULL`, the header bar will display the title of the window it
     * is contained in.
     * 
     * To use a different title, use [class`WindowTitle]`:
     * 
     * ```xml
     * <object class="AdwHeaderBar">
     *   <property name="title-widget">
     *     <object class="AdwWindowTitle">
     *       <property name="title" translatable="yes">Title</property>
     *     </object>
     *   </property>
     * </object>
     * ```
     */
    title_widget: Gtk.Widget

    // Owm methods of Adw-1.Adw.HeaderBar

    /**
     * Gets the policy for aligning the center widget.
     */
    get_centering_policy(): CenteringPolicy
    /**
     * Gets the decoration layout for `self`.
     */
    get_decoration_layout(): string | null
    /**
     * Gets whether to show title buttons at the end of `self`.
     */
    get_show_end_title_buttons(): boolean
    /**
     * Gets whether to show title buttons at the start of `self`.
     */
    get_show_start_title_buttons(): boolean
    /**
     * Gets the title widget widget of `self`.
     */
    get_title_widget(): Gtk.Widget | null
    /**
     * Adds `child` to `self,` packed with reference to the end of `self`.
     * @param child the widget to be added to `self`
     */
    pack_end(child: Gtk.Widget): void
    /**
     * Adds `child` to `self,` packed with reference to the start of the `self`.
     * @param child the widget to be added to `self`
     */
    pack_start(child: Gtk.Widget): void
    /**
     * Removes a child from `self`.
     * 
     * The child must have been added with [method`HeaderBar`.pack_start],
     * [method`HeaderBar`.pack_end] or [property`HeaderBar:`title-widget].
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Sets the policy for aligning the center widget.
     * @param centering_policy the centering policy
     */
    set_centering_policy(centering_policy: CenteringPolicy): void
    /**
     * Sets the decoration layout for `self`.
     * @param layout a decoration layout
     */
    set_decoration_layout(layout: string | null): void
    /**
     * Sets whether to show title buttons at the end of `self`.
     * @param setting `TRUE` to show standard title buttons
     */
    set_show_end_title_buttons(setting: boolean): void
    /**
     * Sets whether to show title buttons at the start of `self`.
     * @param setting `TRUE` to show standard title buttons
     */
    set_show_start_title_buttons(setting: boolean): void
    /**
     * Sets the title widget for `self`.
     * @param title_widget a widget to use for a title
     */
    set_title_widget(title_widget: Gtk.Widget | null): void

    // Class property signals of Adw-1.Adw.HeaderBar

    connect(sigName: "notify::centering-policy", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::centering-policy", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::centering-policy", ...args: any[]): void
    connect(sigName: "notify::decoration-layout", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decoration-layout", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decoration-layout", ...args: any[]): void
    connect(sigName: "notify::show-end-title-buttons", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-end-title-buttons", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-end-title-buttons", ...args: any[]): void
    connect(sigName: "notify::show-start-title-buttons", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-start-title-buttons", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-start-title-buttons", ...args: any[]): void
    connect(sigName: "notify::title-widget", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-widget", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-widget", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A title bar widget.
 * 
 * <picture>
 *   <source srcset="header-bar-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="header-bar.png" alt="header-bar">
 * </picture>
 * 
 * `AdwHeaderBar` is similar to [class`Gtk`.HeaderBar], but provides additional
 * features compared to it. Refer to `GtkHeaderBar` for details.
 * 
 * [property`HeaderBar:`centering-policy] allows to enforce strict centering of
 * the title widget, this is useful for [class`ViewSwitcherTitle]`.
 * 
 * [property`HeaderBar:`show-start-title-buttons] and
 * [property`HeaderBar:`show-end-title-buttons] allow to easily create split
 * header bar layouts using [class`Leaflet]`, as follows:
 * 
 * ```xml
 * <object class="AdwLeaflet" id="leaflet">
 *   <child>
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="AdwHeaderBar">
 *           <binding name="show-end-title-buttons">
 *             <lookup name="folded">leaflet</lookup>
 *           </binding>
 *         </object>
 *       </child>
 *       <!-- ... -->
 *     </object>
 *   </child>
 *   <!-- ... -->
 *   <child>
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <property name="hexpand">True</property>
 *       <child>
 *         <object class="AdwHeaderBar">
 *           <binding name="show-start-title-buttons">
 *             <lookup name="folded">leaflet</lookup>
 *           </binding>
 *         </object>
 *       </child>
 *       <!-- ... -->
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * <picture>
 *   <source srcset="header-bar-split-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="header-bar-split.png" alt="header-bar-split">
 * </picture>
 * 
 * ## CSS nodes
 * 
 * ```
 * headerbar
 * ╰── windowhandle
 *     ╰── box
 *         ├── widget
 *         │   ╰── box.start
 *         │       ├── windowcontrols.start
 *         │       ╰── [other children]
 *         ├── [Title Widget]
 *         ╰── widget
 *             ╰── box.end
 *                 ├── [other children]
 *                 ╰── windowcontrols.end
 * ```
 * 
 * `AdwHeaderBar`'s CSS node is called `headerbar`. It contains a `windowhandle`
 * subnode, which contains a `box` subnode, which contains two `widget` subnodes
 * at the start and end of the header bar, each of which contains a `box`
 * subnode with the `.start` and `.end` style classes respectively, as well as a
 * center node that represents the title.
 * 
 * Each of the boxes contains a `windowcontrols` subnode, see
 * [class`Gtk`.WindowControls] for details, as well as other children.
 * 
 * ## Accessibility
 * 
 * `AdwHeaderBar` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
class HeaderBar extends Gtk.Widget {

    // Own properties of Adw-1.Adw.HeaderBar

    static name: string
    static $gtype: GObject.GType<HeaderBar>

    // Constructors of Adw-1.Adw.HeaderBar

    constructor(config?: HeaderBar.ConstructorProperties) 
    /**
     * Creates a new `AdwHeaderBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwHeaderBar`.
     * @constructor 
     */
    static new(): HeaderBar
    _init(config?: HeaderBar.ConstructorProperties): void
}

module Leaflet {

    // Constructor properties interface

    interface ConstructorProperties extends Swipeable.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Leaflet

        /**
         * Whether gestures and shortcuts for navigating backward are enabled.
         * 
         * The supported gestures are:
         * 
         * - One-finger swipe on touchscreens
         * - Horizontal scrolling on touchpads (usually two-finger swipe)
         * - Back/forward mouse buttons
         * 
         * The keyboard back/forward keys are also supported, as well as the
         * <kbd>Alt</kbd>+<kbd>←</kbd> shortcut for horizontal orientation, or
         * <kbd>Alt</kbd>+<kbd>↑</kbd> for vertical orientation.
         * 
         * If the orientation is horizontal, for right-to-left locales, gestures and
         * shortcuts are reversed.
         * 
         * Only children that have [property`LeafletPage:`navigatable] set to `TRUE`
         * can be navigated to.
         */
        can_navigate_back?: boolean | null
        /**
         * Whether gestures and shortcuts for navigating forward are enabled.
         * 
         * The supported gestures are:
         * 
         * - One-finger swipe on touchscreens
         * - Horizontal scrolling on touchpads (usually two-finger swipe)
         * - Back/forward mouse buttons
         * 
         * The keyboard back/forward keys are also supported, as well as the
         * <kbd>Alt</kbd>+<kbd>→</kbd> shortcut for horizontal orientation, or
         * <kbd>Alt</kbd>+<kbd>↓</kbd> for vertical orientation.
         * 
         * If the orientation is horizontal, for right-to-left locales, gestures and
         * shortcuts are reversed.
         * 
         * Only children that have [property`LeafletPage:`navigatable] set to `TRUE`
         * can be navigated to.
         */
        can_navigate_forward?: boolean | null
        /**
         * Whether or not the leaflet can unfold.
         */
        can_unfold?: boolean | null
        /**
         * The child transition spring parameters.
         * 
         * The default value is equivalent to:
         * 
         * ```c
         * adw_spring_params_new (1, 0.5, 500)
         * ```
         */
        child_transition_params?: SpringParams | null
        /**
         * Determines when the leaflet will fold.
         * 
         * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, it will only fold when
         * the children cannot fit anymore. With `ADW_FOLD_THRESHOLD_POLICY_NATURAL`,
         * it will fold as soon as children don't get their natural size.
         * 
         * This can be useful if you have a long ellipsizing label and want to let it
         * ellipsize instead of immediately folding.
         */
        fold_threshold_policy?: FoldThresholdPolicy | null
        /**
         * Whether the leaflet allocates the same size for all children when folded.
         * 
         * If set to `FALSE`, different children can have different size along the
         * opposite orientation.
         */
        homogeneous?: boolean | null
        /**
         * The mode transition animation duration, in milliseconds.
         */
        mode_transition_duration?: number | null
        /**
         * The type of animation used for transitions between modes and children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         */
        transition_type?: LeafletTransitionType | null
        /**
         * The widget currently visible when the leaflet is folded.
         * 
         * The transition is determined by [property`Leaflet:`transition-type] and
         * [property`Leaflet:`child-transition-params]. The transition can be
         * cancelled by the user, in which case visible child will change back to the
         * previously visible child.
         */
        visible_child?: Gtk.Widget | null
        /**
         * The name of the widget currently visible when the leaflet is folded.
         * 
         * See [property`Leaflet:`visible-child].
         */
        visible_child_name?: string | null
    }

}

interface Leaflet extends Swipeable, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Leaflet

    /**
     * Whether gestures and shortcuts for navigating backward are enabled.
     * 
     * The supported gestures are:
     * 
     * - One-finger swipe on touchscreens
     * - Horizontal scrolling on touchpads (usually two-finger swipe)
     * - Back/forward mouse buttons
     * 
     * The keyboard back/forward keys are also supported, as well as the
     * <kbd>Alt</kbd>+<kbd>←</kbd> shortcut for horizontal orientation, or
     * <kbd>Alt</kbd>+<kbd>↑</kbd> for vertical orientation.
     * 
     * If the orientation is horizontal, for right-to-left locales, gestures and
     * shortcuts are reversed.
     * 
     * Only children that have [property`LeafletPage:`navigatable] set to `TRUE`
     * can be navigated to.
     */
    can_navigate_back: boolean
    /**
     * Whether gestures and shortcuts for navigating forward are enabled.
     * 
     * The supported gestures are:
     * 
     * - One-finger swipe on touchscreens
     * - Horizontal scrolling on touchpads (usually two-finger swipe)
     * - Back/forward mouse buttons
     * 
     * The keyboard back/forward keys are also supported, as well as the
     * <kbd>Alt</kbd>+<kbd>→</kbd> shortcut for horizontal orientation, or
     * <kbd>Alt</kbd>+<kbd>↓</kbd> for vertical orientation.
     * 
     * If the orientation is horizontal, for right-to-left locales, gestures and
     * shortcuts are reversed.
     * 
     * Only children that have [property`LeafletPage:`navigatable] set to `TRUE`
     * can be navigated to.
     */
    can_navigate_forward: boolean
    /**
     * Whether or not the leaflet can unfold.
     */
    can_unfold: boolean
    /**
     * The child transition spring parameters.
     * 
     * The default value is equivalent to:
     * 
     * ```c
     * adw_spring_params_new (1, 0.5, 500)
     * ```
     */
    child_transition_params: SpringParams
    /**
     * Whether a child transition is currently running.
     */
    readonly child_transition_running: boolean
    /**
     * Determines when the leaflet will fold.
     * 
     * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, it will only fold when
     * the children cannot fit anymore. With `ADW_FOLD_THRESHOLD_POLICY_NATURAL`,
     * it will fold as soon as children don't get their natural size.
     * 
     * This can be useful if you have a long ellipsizing label and want to let it
     * ellipsize instead of immediately folding.
     */
    fold_threshold_policy: FoldThresholdPolicy
    /**
     * Whether the leaflet is folded.
     * 
     * The leaflet will be folded if the size allocated to it is smaller than the
     * sum of the fold threshold policy, it will be unfolded otherwise.
     */
    readonly folded: boolean
    /**
     * Whether the leaflet allocates the same size for all children when folded.
     * 
     * If set to `FALSE`, different children can have different size along the
     * opposite orientation.
     */
    homogeneous: boolean
    /**
     * The mode transition animation duration, in milliseconds.
     */
    mode_transition_duration: number
    /**
     * A selection model with the leaflet's pages.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the visible
     * page.
     */
    readonly pages: Gtk.SelectionModel
    /**
     * The type of animation used for transitions between modes and children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the mode or child that is about
     * to become current.
     */
    transition_type: LeafletTransitionType
    /**
     * The widget currently visible when the leaflet is folded.
     * 
     * The transition is determined by [property`Leaflet:`transition-type] and
     * [property`Leaflet:`child-transition-params]. The transition can be
     * cancelled by the user, in which case visible child will change back to the
     * previously visible child.
     */
    visible_child: Gtk.Widget
    /**
     * The name of the widget currently visible when the leaflet is folded.
     * 
     * See [property`Leaflet:`visible-child].
     */
    visible_child_name: string

    // Owm methods of Adw-1.Adw.Leaflet

    /**
     * Adds a child to `self`.
     * @param child the widget to add
     */
    append(child: Gtk.Widget): LeafletPage
    /**
     * Finds the previous or next navigatable child.
     * 
     * This will be the same child [method`Leaflet`.navigate] or swipe gestures will
     * navigate to.
     * 
     * If there's no child to navigate to, `NULL` will be returned instead.
     * 
     * See [property`LeafletPage:`navigatable].
     * @param direction the direction
     */
    get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null
    /**
     * Gets whether gestures and shortcuts for navigating backward are enabled.
     */
    get_can_navigate_back(): boolean
    /**
     * Gets whether gestures and shortcuts for navigating forward are enabled.
     */
    get_can_navigate_forward(): boolean
    /**
     * Gets whether `self` can unfold.
     */
    get_can_unfold(): boolean
    /**
     * Finds the child of `self` with `name`.
     * 
     * Returns `NULL` if there is no child with this name.
     * 
     * See [property`LeafletPage:`name].
     * @param name the name of the child to find
     */
    get_child_by_name(name: string): Gtk.Widget | null
    /**
     * Gets the child transition spring parameters for `self`.
     */
    get_child_transition_params(): SpringParams
    /**
     * Gets whether a child transition is currently running for `self`.
     */
    get_child_transition_running(): boolean
    /**
     * Gets the fold threshold policy for `self`.
     */
    get_fold_threshold_policy(): FoldThresholdPolicy
    /**
     * Gets whether `self` is folded.
     */
    get_folded(): boolean
    /**
     * Gets whether `self` is homogeneous.
     */
    get_homogeneous(): boolean
    /**
     * Gets the mode transition animation duration for `self`.
     */
    get_mode_transition_duration(): number
    /**
     * Returns the [class`LeafletPage]` object for `child`.
     * @param child a child of `self`
     */
    get_page(child: Gtk.Widget): LeafletPage
    /**
     * Returns a [iface`Gio`.ListModel] that contains the pages of the leaflet.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the visible
     * page.
     */
    get_pages(): Gtk.SelectionModel
    /**
     * Gets the type of animation used for transitions between modes and children.
     */
    get_transition_type(): LeafletTransitionType
    /**
     * Gets the widget currently visible when the leaflet is folded.
     */
    get_visible_child(): Gtk.Widget | null
    /**
     * Gets the name of the currently visible child widget.
     */
    get_visible_child_name(): string | null
    /**
     * Inserts `child` in the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, inserts `child` at the first position.
     * @param child the widget to insert
     * @param sibling the sibling after which to insert `child`
     */
    insert_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): LeafletPage
    /**
     * Navigates to the previous or next child.
     * 
     * The child must have the [property`LeafletPage:`navigatable] property set to
     * `TRUE`, otherwise it will be skipped.
     * 
     * This will be the same child as returned by
     * [method`Leaflet`.get_adjacent_child] or navigated to via swipe gestures.
     * @param direction the direction
     */
    navigate(direction: NavigationDirection): boolean
    /**
     * Inserts `child` at the first position in `self`.
     * @param child the widget to prepend
     */
    prepend(child: Gtk.Widget): LeafletPage
    /**
     * Removes a child widget from `self`.
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Moves `child` to the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, moves `child` to the first position.
     * @param child the widget to move, must be a child of `self`
     * @param sibling the sibling to move `child` after
     */
    reorder_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Sets whether gestures and shortcuts for navigating backward are enabled.
     * @param can_navigate_back the new value
     */
    set_can_navigate_back(can_navigate_back: boolean): void
    /**
     * Sets whether gestures and shortcuts for navigating forward are enabled.
     * @param can_navigate_forward the new value
     */
    set_can_navigate_forward(can_navigate_forward: boolean): void
    /**
     * Sets whether `self` can unfold.
     * @param can_unfold whether `self` can unfold
     */
    set_can_unfold(can_unfold: boolean): void
    /**
     * Sets the child transition spring parameters for `self`.
     * @param params the new parameters
     */
    set_child_transition_params(params: SpringParams): void
    /**
     * Sets the fold threshold policy for `self`.
     * @param policy the policy to use
     */
    set_fold_threshold_policy(policy: FoldThresholdPolicy): void
    /**
     * Sets `self` to be homogeneous or not.
     * 
     * If set to `FALSE`, different children can have different size along the
     * opposite orientation.
     * @param homogeneous whether to make `self` homogeneous
     */
    set_homogeneous(homogeneous: boolean): void
    /**
     * Sets the mode transition animation duration for `self`.
     * @param duration the new duration, in milliseconds
     */
    set_mode_transition_duration(duration: number): void
    /**
     * Sets the type of animation used for transitions between modes and children.
     * @param transition the new transition type
     */
    set_transition_type(transition: LeafletTransitionType): void
    /**
     * Sets the widget currently visible when the leaflet is folded.
     * @param visible_child the new child
     */
    set_visible_child(visible_child: Gtk.Widget): void
    /**
     * Makes the child with the name `name` visible.
     * 
     * See adw_leaflet_set_visible_child() for more details.
     * @param name the name of a child
     */
    set_visible_child_name(name: string): void

    // Class property signals of Adw-1.Adw.Leaflet

    connect(sigName: "notify::can-navigate-back", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-navigate-back", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-navigate-back", ...args: any[]): void
    connect(sigName: "notify::can-navigate-forward", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-navigate-forward", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-navigate-forward", ...args: any[]): void
    connect(sigName: "notify::can-unfold", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-unfold", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-unfold", ...args: any[]): void
    connect(sigName: "notify::child-transition-params", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transition-params", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transition-params", ...args: any[]): void
    connect(sigName: "notify::child-transition-running", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transition-running", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transition-running", ...args: any[]): void
    connect(sigName: "notify::fold-threshold-policy", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fold-threshold-policy", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fold-threshold-policy", ...args: any[]): void
    connect(sigName: "notify::folded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folded", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::mode-transition-duration", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode-transition-duration", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode-transition-duration", ...args: any[]): void
    connect(sigName: "notify::pages", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pages", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pages", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
    connect(sigName: "notify::visible-child-name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child-name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child-name", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Leaflet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An adaptive container acting like a box or a stack.
 * 
 * <picture>
 *   <source srcset="leaflet-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="leaflet-wide.png" alt="leaflet-wide">
 * </picture>
 * <picture>
 *   <source srcset="leaflet-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="leaflet-narrow.png" alt="leaflet-narrow">
 * </picture>
 * 
 * The `AdwLeaflet` widget can display its children like a [class`Gtk`.Box] does
 * or like a [class`Gtk`.Stack] does, adapting to size changes by switching
 * between the two modes.
 * 
 * When there is enough space the children are displayed side by side, otherwise
 * only one is displayed and the leaflet is said to be “folded”.
 * The threshold is dictated by the preferred minimum sizes of the children.
 * When a leaflet is folded, the children can be navigated using swipe gestures.
 * 
 * The “over” and “under” transition types stack the children one on top of the
 * other, while the “slide” transition puts the children side by side. While
 * navigating to a child on the side or below can be performed by swiping the
 * current child away, navigating to an upper child requires dragging it from
 * the edge where it resides. This doesn't affect non-dragging swipes.
 * 
 * ## CSS nodes
 * 
 * `AdwLeaflet` has a single CSS node with name `leaflet`. The node will get the
 * style classes `.folded` when it is folded, `.unfolded` when it's not, or none
 * if it hasn't computed its fold yet.
 * @class 
 */
class Leaflet extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Leaflet

    static name: string
    static $gtype: GObject.GType<Leaflet>

    // Constructors of Adw-1.Adw.Leaflet

    constructor(config?: Leaflet.ConstructorProperties) 
    /**
     * Creates a new `AdwLeaflet`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwLeaflet`.
     * @constructor 
     */
    static new(): Leaflet
    _init(config?: Leaflet.ConstructorProperties): void
}

module LeafletPage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.LeafletPage

        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * The name of the child page.
         */
        name?: string | null
        /**
         * Whether the child can be navigated to when folded.
         * 
         * If `FALSE`, the child will be ignored by
         * [method`Leaflet`.get_adjacent_child], [method`Leaflet`.navigate], and swipe
         * gestures.
         * 
         * This can be used used to prevent switching to widgets like separators.
         */
        navigatable?: boolean | null
    }

}

interface LeafletPage {

    // Own properties of Adw-1.Adw.LeafletPage

    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * The name of the child page.
     */
    name: string
    /**
     * Whether the child can be navigated to when folded.
     * 
     * If `FALSE`, the child will be ignored by
     * [method`Leaflet`.get_adjacent_child], [method`Leaflet`.navigate], and swipe
     * gestures.
     * 
     * This can be used used to prevent switching to widgets like separators.
     */
    navigatable: boolean

    // Owm methods of Adw-1.Adw.LeafletPage

    /**
     * Gets the leaflet child th which `self` belongs.
     */
    get_child(): Gtk.Widget
    /**
     * Gets the name of `self`.
     */
    get_name(): string | null
    /**
     * Gets whether the child can be navigated to when folded.
     */
    get_navigatable(): boolean
    /**
     * Sets the name of the `self`.
     * @param name the new value to set
     */
    set_name(name: string | null): void
    /**
     * Sets whether `self` can be navigated to when folded.
     * @param navigatable whether `self` can be navigated to when folded
     */
    set_navigatable(navigatable: boolean): void

    // Class property signals of Adw-1.Adw.LeafletPage

    connect(sigName: "notify::child", callback: (($obj: LeafletPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: LeafletPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: LeafletPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LeafletPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::navigatable", callback: (($obj: LeafletPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::navigatable", callback: (($obj: LeafletPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::navigatable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An auxiliary class used by [class`Leaflet]`.
 * @class 
 */
class LeafletPage extends GObject.Object {

    // Own properties of Adw-1.Adw.LeafletPage

    static name: string
    static $gtype: GObject.GType<LeafletPage>

    // Constructors of Adw-1.Adw.LeafletPage

    constructor(config?: LeafletPage.ConstructorProperties) 
    _init(config?: LeafletPage.ConstructorProperties): void
}

module PreferencesGroup {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.PreferencesGroup

        /**
         * The description for this group of preferences.
         */
        description?: string | null
        /**
         * The header suffix widget.
         * 
         * Displayed above the list, next to the title and description. Suffixes are commonly used to show a button or a spinner for the whole group.
         */
        header_suffix?: Gtk.Widget | null
        /**
         * The title for this group of preferences.
         */
        title?: string | null
    }

}

interface PreferencesGroup extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.PreferencesGroup

    /**
     * The description for this group of preferences.
     */
    description: string
    /**
     * The header suffix widget.
     * 
     * Displayed above the list, next to the title and description. Suffixes are commonly used to show a button or a spinner for the whole group.
     */
    header_suffix: Gtk.Widget
    /**
     * The title for this group of preferences.
     */
    title: string

    // Own fields of Adw-1.Adw.PreferencesGroup

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.PreferencesGroup

    /**
     * Adds a child to `self`.
     * @param child the widget to add
     */
    add(child: Gtk.Widget): void
    /**
     * Gets the description of `self`.
     */
    get_description(): string | null
    /**
     * Gets the suffix for `self'`s header.
     */
    get_header_suffix(): Gtk.Widget | null
    /**
     * Gets the title of `self`.
     */
    get_title(): string
    /**
     * Removes a child from `self`.
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Sets the description for `self`.
     * @param description the description
     */
    set_description(description: string | null): void
    /**
     * Sets the suffix for `self'`s header.
     * @param suffix the suffix to set
     */
    set_header_suffix(suffix: Gtk.Widget | null): void
    /**
     * Sets the title for `self`.
     * @param title the title
     */
    set_title(title: string): void

    // Class property signals of Adw-1.Adw.PreferencesGroup

    connect(sigName: "notify::description", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::header-suffix", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header-suffix", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::header-suffix", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: PreferencesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A group of preference rows.
 * 
 * <picture>
 *   <source srcset="preferences-group-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="preferences-group.png" alt="preferences-group">
 * </picture>
 * 
 * An `AdwPreferencesGroup` represents a group or tightly related preferences,
 * which in turn are represented by [class`PreferencesRow]`.
 * 
 * To summarize the role of the preferences it gathers, a group can have both a
 * title and a description. The title will be used by [class`PreferencesWindow]`
 * to let the user look for a preference.
 * 
 * ## AdwPreferencesGroup as GtkBuildable
 * 
 * The `AdwPreferencesGroup` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding [class`PreferencesRow]`s to the list by omitting "type". If "type"
 * is omitted and the widget isn't a [class`PreferencesRow]` the child is added to
 * a box below the list.
 * 
 * When the "type" attribute of a child is `header-suffix`, the child
 * is set as the suffix on the end of the title and description.
 * 
 * ## CSS nodes
 * 
 * `AdwPreferencesGroup` has a single CSS node with name `preferencesgroup`.
 * 
 * ## Accessibility
 * 
 * `AdwPreferencesGroup` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
class PreferencesGroup extends Gtk.Widget {

    // Own properties of Adw-1.Adw.PreferencesGroup

    static name: string
    static $gtype: GObject.GType<PreferencesGroup>

    // Constructors of Adw-1.Adw.PreferencesGroup

    constructor(config?: PreferencesGroup.ConstructorProperties) 
    /**
     * Creates a new `AdwPreferencesGroup`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwPreferencesGroup`.
     * @constructor 
     */
    static new(): PreferencesGroup
    _init(config?: PreferencesGroup.ConstructorProperties): void
}

module PreferencesPage {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.PreferencesPage

        /**
         * The icon name for this page.
         */
        icon_name?: string | null
        /**
         * The name of this page.
         */
        name?: string | null
        /**
         * The title for this page.
         */
        title?: string | null
        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         */
        use_underline?: boolean | null
    }

}

interface PreferencesPage extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.PreferencesPage

    /**
     * The icon name for this page.
     */
    icon_name: string
    /**
     * The name of this page.
     */
    name: string
    /**
     * The title for this page.
     */
    title: string
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     */
    use_underline: boolean

    // Own fields of Adw-1.Adw.PreferencesPage

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.PreferencesPage

    /**
     * Adds a preferences group to `self`.
     * @param group the group to add
     */
    add(group: PreferencesGroup): void
    /**
     * Gets the icon name for `self`.
     */
    get_icon_name(): string | null
    /**
     * Gets the name of `self`.
     */
    get_name(): string | null

    // Overloads of get_name

    /**
     * Retrieves the name of a widget.
     * 
     * See [method`Gtk`.Widget.set_name] for the significance of widget names.
     */
    get_name(): string
    /**
     * Gets the title of `self`.
     */
    get_title(): string
    /**
     * Gets whether an embedded underline in the title indicates a mnemonic.
     */
    get_use_underline(): boolean
    /**
     * Removes a group from `self`.
     * @param group the group to remove
     */
    remove(group: PreferencesGroup): void
    /**
     * Sets the icon name for `self`.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the name of `self`.
     * @param name the name
     */
    set_name(name: string | null): void

    // Overloads of set_name

    /**
     * Sets a widgets name.
     * 
     * Setting a name allows you to refer to the widget from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for [class`Gtk`.StyleContext].
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    set_name(name: string): void
    /**
     * Sets the title of `self`.
     * @param title the title
     */
    set_title(title: string): void
    /**
     * Sets whether an embedded underline in the title indicates a mnemonic.
     * @param use_underline `TRUE` if underlines in the text indicate mnemonics
     */
    set_use_underline(use_underline: boolean): void

    // Class property signals of Adw-1.Adw.PreferencesPage

    connect(sigName: "notify::icon-name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: PreferencesPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A page from [class`PreferencesWindow]`.
 * 
 * <picture>
 *   <source srcset="preferences-page-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="preferences-page.png" alt="preferences-page">
 * </picture>
 * 
 * The `AdwPreferencesPage` widget gathers preferences groups into a single page
 * of a preferences window.
 * 
 * ## CSS nodes
 * 
 * `AdwPreferencesPage` has a single CSS node with name `preferencespage`.
 * 
 * ## Accessibility
 * 
 * `AdwPreferencesPage` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
class PreferencesPage extends Gtk.Widget {

    // Own properties of Adw-1.Adw.PreferencesPage

    static name: string
    static $gtype: GObject.GType<PreferencesPage>

    // Constructors of Adw-1.Adw.PreferencesPage

    constructor(config?: PreferencesPage.ConstructorProperties) 
    /**
     * Creates a new `AdwPreferencesPage`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwPreferencesPage`.
     * @constructor 
     */
    static new(): PreferencesPage
    _init(config?: PreferencesPage.ConstructorProperties): void
}

module PreferencesRow {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.ListBoxRow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.PreferencesRow

        /**
         * The title of the preference represented by this row.
         */
        title?: string | null
        /**
         * Whether the user can copy the title from the label.
         * 
         * See also [property`Gtk`.Label:selectable].
         */
        title_selectable?: boolean | null
        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         */
        use_underline?: boolean | null
    }

}

interface PreferencesRow extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.PreferencesRow

    /**
     * The title of the preference represented by this row.
     */
    title: string
    /**
     * Whether the user can copy the title from the label.
     * 
     * See also [property`Gtk`.Label:selectable].
     */
    title_selectable: boolean
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     */
    use_underline: boolean

    // Own fields of Adw-1.Adw.PreferencesRow

    parent_instance: Gtk.ListBoxRow & Gtk.Widget & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.PreferencesRow

    /**
     * Gets the title of the preference represented by `self`.
     */
    get_title(): string
    /**
     * Gets whether the user can copy the title from the label
     */
    get_title_selectable(): boolean
    /**
     * Gets whether an embedded underline in the title indicates a mnemonic.
     */
    get_use_underline(): boolean
    /**
     * Sets the title of the preference represented by `self`.
     * @param title the title
     */
    set_title(title: string): void
    /**
     * Sets whether the user can copy the title from the label
     * @param title_selectable `TRUE` if the user can copy the title from the label
     */
    set_title_selectable(title_selectable: boolean): void
    /**
     * Sets whether an embedded underline in the title indicates a mnemonic.
     * @param use_underline `TRUE` if underlines in the text indicate mnemonics
     */
    set_use_underline(use_underline: boolean): void

    // Class property signals of Adw-1.Adw.PreferencesRow

    connect(sigName: "notify::title", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-selectable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-selectable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-selectable", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: PreferencesRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to present preferences.
 * 
 * The `AdwPreferencesRow` widget has a title that [class`PreferencesWindow]`
 * will use to let the user look for a preference. It doesn't present the title
 * in any way and lets you present the preference as you please.
 * 
 * [class`ActionRow]` and its derivatives are convenient to use as preference
 * rows as they take care of presenting the preference's title while letting you
 * compose the inputs of the preference around it.
 * @class 
 */
class PreferencesRow extends Gtk.ListBoxRow {

    // Own properties of Adw-1.Adw.PreferencesRow

    static name: string
    static $gtype: GObject.GType<PreferencesRow>

    // Constructors of Adw-1.Adw.PreferencesRow

    constructor(config?: PreferencesRow.ConstructorProperties) 
    /**
     * Creates a new `AdwPreferencesRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwPreferencesRow`.
     * @constructor 
     */
    static new(): PreferencesRow
    _init(config?: PreferencesRow.ConstructorProperties): void
}

module PreferencesWindow {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Native.ConstructorProperties, Gtk.Root.ConstructorProperties, Gtk.ShortcutManager.ConstructorProperties, Window.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.PreferencesWindow

        /**
         * Whether gestures and shortcuts for closing subpages are enabled.
         * 
         * The supported gestures are:
         * 
         * - One-finger swipe on touchscreens
         * - Horizontal scrolling on touchpads (usually two-finger swipe)
         * - Back mouse button
         * 
         * The keyboard back key is also supported, as well as the
         * <kbd>Alt</kbd>+<kbd>←</kbd> shortcut.
         * 
         * For right-to-left locales, gestures and shortcuts are reversed.
         */
        can_navigate_back?: boolean | null
        /**
         * Whether search is enabled.
         */
        search_enabled?: boolean | null
        visible_page?: Gtk.Widget | null
        visible_page_name?: string | null
    }

}

interface PreferencesWindow extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {

    // Own properties of Adw-1.Adw.PreferencesWindow

    /**
     * Whether gestures and shortcuts for closing subpages are enabled.
     * 
     * The supported gestures are:
     * 
     * - One-finger swipe on touchscreens
     * - Horizontal scrolling on touchpads (usually two-finger swipe)
     * - Back mouse button
     * 
     * The keyboard back key is also supported, as well as the
     * <kbd>Alt</kbd>+<kbd>←</kbd> shortcut.
     * 
     * For right-to-left locales, gestures and shortcuts are reversed.
     */
    can_navigate_back: boolean
    /**
     * Whether search is enabled.
     */
    search_enabled: boolean
    visible_page: Gtk.Widget
    visible_page_name: string

    // Own fields of Adw-1.Adw.PreferencesWindow

    parent_instance: Window & Gtk.Window & Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.PreferencesWindow

    /**
     * Adds a preferences page to `self`.
     * @param page the page to add
     */
    add(page: PreferencesPage): void
    /**
     * Displays `toast`.
     * 
     * See [method`ToastOverlay`.add_toast].
     * @param toast a toast
     */
    add_toast(toast: Toast): void
    /**
     * Closes the current subpage.
     * 
     * If there is no presented subpage, this does nothing.
     */
    close_subpage(): void
    /**
     * Gets whether gestures and shortcuts for closing subpages are enabled.
     */
    get_can_navigate_back(): boolean
    /**
     * Gets whether search is enabled for `self`.
     */
    get_search_enabled(): boolean
    /**
     * Gets the currently visible page of `self`.
     */
    get_visible_page(): PreferencesPage | null
    /**
     * Gets the name of currently visible page of `self`.
     */
    get_visible_page_name(): string | null
    /**
     * Sets `subpage` as the window's subpage and opens it.
     * 
     * The transition can be cancelled by the user, in which case visible child will
     * change back to the previously visible child.
     * @param subpage the subpage
     */
    present_subpage(subpage: Gtk.Widget): void
    /**
     * Removes a page from `self`.
     * @param page the page to remove
     */
    remove(page: PreferencesPage): void
    /**
     * Sets whether gestures and shortcuts for closing subpages are enabled.
     * @param can_navigate_back the new value
     */
    set_can_navigate_back(can_navigate_back: boolean): void
    /**
     * Sets whether search is enabled for `self`.
     * @param search_enabled whether search is enabled
     */
    set_search_enabled(search_enabled: boolean): void
    /**
     * Makes `page` the visible page of `self`.
     * @param page a page of `self`
     */
    set_visible_page(page: PreferencesPage): void
    /**
     * Makes the page with the given name visible.
     * @param name the name of the page to make visible
     */
    set_visible_page_name(name: string): void

    // Class property signals of Adw-1.Adw.PreferencesWindow

    connect(sigName: "notify::can-navigate-back", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-navigate-back", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-navigate-back", ...args: any[]): void
    connect(sigName: "notify::search-enabled", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-enabled", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-enabled", ...args: any[]): void
    connect(sigName: "notify::visible-page", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-page", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-page", ...args: any[]): void
    connect(sigName: "notify::visible-page-name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-page-name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-page-name", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-widget", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-widget", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::focus-widget", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-widget", ...args: any[]): void
    connect(sigName: "notify::fullscreened", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreened", ...args: any[]): void
    connect(sigName: "notify::handle-menubar-accel", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-menubar-accel", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-menubar-accel", ...args: any[]): void
    connect(sigName: "notify::hide-on-close", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-on-close", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::maximized", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::titlebar", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::titlebar", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::titlebar", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: PreferencesWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A window to present an application's preferences.
 * 
 * <picture>
 *   <source srcset="preferences-window-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="preferences-window.png" alt="preferences-window">
 * </picture>
 * 
 * The `AdwPreferencesWindow` widget presents an application's preferences
 * gathered into pages and groups. The preferences are searchable by the user.
 * 
 * ## CSS nodes
 * 
 * `AdwPreferencesWindow` has a main CSS node with the name `window` and the
 * style class `.preferences`.
 * @class 
 */
class PreferencesWindow extends Window {

    // Own properties of Adw-1.Adw.PreferencesWindow

    static name: string
    static $gtype: GObject.GType<PreferencesWindow>

    // Constructors of Adw-1.Adw.PreferencesWindow

    constructor(config?: PreferencesWindow.ConstructorProperties) 
    /**
     * Creates a new `AdwPreferencesWindow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwPreferencesWindow`.
     * @constructor 
     */
    static new(): PreferencesWindow
    _init(config?: PreferencesWindow.ConstructorProperties): void
}

module SplitButton {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    interface ActivateSignalCallback {
        ($obj: SplitButton): void
    }

    /**
     * Signal callback interface for `clicked`
     */
    interface ClickedSignalCallback {
        ($obj: SplitButton): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.SplitButton

        /**
         * The child widget.
         * 
         * Setting the child widget will set [property`SplitButton:`label] and
         * [property`SplitButton:`icon-name] to `NULL`.
         */
        child?: Gtk.Widget | null
        /**
         * The direction in which the popup will be popped up.
         * 
         * The dropdown arrow icon will point at the same direction.
         * 
         * If the does not fit in the available space in the given direction,
         * GTK will its best to keep it inside the screen and fully visible.
         * 
         * If you pass `GTK_ARROW_NONE`, it's equivalent to `GTK_ARROW_DOWN`.
         */
        direction?: Gtk.ArrowType | null
        /**
         * The name of the icon used to automatically populate the button.
         * 
         * Setting the icon name will set [property`SplitButton:`label] and
         * [property`SplitButton:`child] to `NULL`.
         */
        icon_name?: string | null
        /**
         * The label for the button.
         * 
         * Setting the label will set [property`SplitButton:`icon-name] and
         * [property`SplitButton:`child] to `NULL`.
         */
        label?: string | null
        /**
         * The `GMenuModel` from which the popup will be created.
         * 
         * If the menu model is `NULL`, the dropdown is disabled.
         * 
         * A [class`Gtk`.Popover] will be created from the menu model with
         * [ctor`Gtk`.PopoverMenu.new_from_model]. Actions will be connected
         * as documented for this function.
         * 
         * If [property`SplitButton:`popover] is already set, it will be dissociated
         * from the button, and the property is set to `NULL`.
         */
        menu_model?: Gio.MenuModel | null
        /**
         * The `GtkPopover` that will be popped up when the dropdown is clicked.
         * 
         * If the popover is `NULL`, the dropdown is disabled.
         * 
         * If [property`SplitButton:`menu-model] is set, the menu model is dissociated
         * from the button, and the property is set to `NULL`.
         */
        popover?: Gtk.Popover | null
        /**
         * Whether an underline in the text indicates a mnemonic.
         * 
         * See [property`SplitButton:`label].
         */
        use_underline?: boolean | null
    }

}

interface SplitButton extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.SplitButton

    /**
     * The child widget.
     * 
     * Setting the child widget will set [property`SplitButton:`label] and
     * [property`SplitButton:`icon-name] to `NULL`.
     */
    child: Gtk.Widget
    /**
     * The direction in which the popup will be popped up.
     * 
     * The dropdown arrow icon will point at the same direction.
     * 
     * If the does not fit in the available space in the given direction,
     * GTK will its best to keep it inside the screen and fully visible.
     * 
     * If you pass `GTK_ARROW_NONE`, it's equivalent to `GTK_ARROW_DOWN`.
     */
    direction: Gtk.ArrowType
    /**
     * The name of the icon used to automatically populate the button.
     * 
     * Setting the icon name will set [property`SplitButton:`label] and
     * [property`SplitButton:`child] to `NULL`.
     */
    icon_name: string
    /**
     * The label for the button.
     * 
     * Setting the label will set [property`SplitButton:`icon-name] and
     * [property`SplitButton:`child] to `NULL`.
     */
    label: string
    /**
     * The `GMenuModel` from which the popup will be created.
     * 
     * If the menu model is `NULL`, the dropdown is disabled.
     * 
     * A [class`Gtk`.Popover] will be created from the menu model with
     * [ctor`Gtk`.PopoverMenu.new_from_model]. Actions will be connected
     * as documented for this function.
     * 
     * If [property`SplitButton:`popover] is already set, it will be dissociated
     * from the button, and the property is set to `NULL`.
     */
    menu_model: Gio.MenuModel
    /**
     * The `GtkPopover` that will be popped up when the dropdown is clicked.
     * 
     * If the popover is `NULL`, the dropdown is disabled.
     * 
     * If [property`SplitButton:`menu-model] is set, the menu model is dissociated
     * from the button, and the property is set to `NULL`.
     */
    popover: Gtk.Popover
    /**
     * Whether an underline in the text indicates a mnemonic.
     * 
     * See [property`SplitButton:`label].
     */
    use_underline: boolean

    // Owm methods of Adw-1.Adw.SplitButton

    /**
     * Gets the child widget.
     */
    get_child(): Gtk.Widget | null
    /**
     * Gets the direction in which the popup will be popped up.
     */
    get_direction(): Gtk.ArrowType

    // Overloads of get_direction

    /**
     * Gets the reading direction for a particular widget.
     * 
     * See [method`Gtk`.Widget.set_direction].
     */
    get_direction(): Gtk.TextDirection
    /**
     * Gets the name of the icon used to automatically populate the button.
     * 
     * If the icon name has not been set with [method`SplitButton`.set_icon_name]
     * the return value will be `NULL`.
     */
    get_icon_name(): string | null
    /**
     * Gets the label for `self`.
     */
    get_label(): string | null
    /**
     * Gets the menu model from which the popup will be created.
     */
    get_menu_model(): Gio.MenuModel | null
    /**
     * Gets the popover that will be popped up when the dropdown is clicked.
     */
    get_popover(): Gtk.Popover | null
    /**
     * Gets whether an underline in the text indicates a mnemonic.
     */
    get_use_underline(): boolean
    /**
     * Dismisses the menu.
     */
    popdown(): void
    /**
     * Pops up the menu.
     */
    popup(): void
    /**
     * Sets the child widget.
     * @param child the new child widget
     */
    set_child(child: Gtk.Widget | null): void
    /**
     * Sets the direction in which the popup will be popped up.
     * @param direction the direction
     */
    set_direction(direction: Gtk.ArrowType): void

    // Overloads of set_direction

    /**
     * Sets the reading direction on a particular widget.
     * 
     * This direction controls the primary direction for widgets
     * containing text, and also the direction in which the children
     * of a container are packed. The ability to set the direction is
     * present in order so that correct localization into languages with
     * right-to-left reading directions can be done. Generally, applications
     * will let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by [func`Gtk`.Widget.set_default_direction] will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void
    /**
     * Sets the name of the icon used to automatically populate the button.
     * @param icon_name the icon name to set
     */
    set_icon_name(icon_name: string): void
    /**
     * Sets the label for `self`.
     * @param label the label to set
     */
    set_label(label: string): void
    /**
     * Sets the menu model from which the popup will be created.
     * @param menu_model the menu model
     */
    set_menu_model(menu_model: Gio.MenuModel | null): void
    /**
     * Sets the popover that will be popped up when the dropdown is clicked.
     * @param popover the popover
     */
    set_popover(popover: Gtk.Popover | null): void
    /**
     * Sets whether an underline in the text indicates a mnemonic.
     * @param use_underline whether an underline in the text indicates a mnemonic
     */
    set_use_underline(use_underline: boolean): void

    // Own signals of Adw-1.Adw.SplitButton

    connect(sigName: "activate", callback: SplitButton.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: SplitButton.ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "clicked", callback: SplitButton.ClickedSignalCallback): number
    connect_after(sigName: "clicked", callback: SplitButton.ClickedSignalCallback): number
    emit(sigName: "clicked", ...args: any[]): void

    // Class property signals of Adw-1.Adw.SplitButton

    connect(sigName: "notify::child", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::popover", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popover", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popover", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: SplitButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A combined button and dropdown widget.
 * 
 * <picture>
 *   <source srcset="split-button-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="split-button.png" alt="split-button">
 * </picture>
 * 
 * `AdwSplitButton` is typically used to present a set of actions in a menu,
 * but allow access to one of them with a single click.
 * 
 * The API is very similar to [class`Gtk`.Button] and [class`Gtk`.MenuButton], see
 * their documentation for details.
 * 
 * ## CSS nodes
 * 
 * ```
 * splitbutton[.image-button][.text-button]
 * ├── button
 * │   ╰── <content>
 * ├── separator
 * ╰── menubutton
 *     ╰── button.toggle
 *         ╰── arrow
 * ```
 * 
 * `AdwSplitButton`'s CSS node is called `splitbutton`. It contains the css
 * nodes: `button`, `separator`, `menubutton`. See [class`Gtk`.MenuButton]
 * documentation for the `menubutton` contents.
 * 
 * The main CSS node will contain the `.image-button` or `.text-button` style
 * classes matching the button contents. The nested button nodes will never
 * contain them.
 * 
 * ## Accessibility
 * 
 * `AdwSplitButton` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
class SplitButton extends Gtk.Widget {

    // Own properties of Adw-1.Adw.SplitButton

    static name: string
    static $gtype: GObject.GType<SplitButton>

    // Constructors of Adw-1.Adw.SplitButton

    constructor(config?: SplitButton.ConstructorProperties) 
    /**
     * Creates a new `AdwSplitButton`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwSplitButton`.
     * @constructor 
     */
    static new(): SplitButton
    _init(config?: SplitButton.ConstructorProperties): void
}

module SpringAnimation {

    // Constructor properties interface

    interface ConstructorProperties extends Animation.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.SpringAnimation

        /**
         * Whether the animation should be clamped.
         * 
         * If set to `TRUE`, the animation will abruptly end as soon as it reaches the
         * final value, preventing overshooting.
         * 
         * It won't prevent overshooting [property`SpringAnimation:`value-from] if a
         * relative negative [property`SpringAnimation:`initial-velocity] is set.
         */
        clamp?: boolean | null
        /**
         * Precision of the spring.
         * 
         * The level of precision used to determine when the animation has come to a
         * rest, that is, when the amplitude of the oscillations becomes smaller than
         * this value.
         * 
         * If the epsilon value is too small, the animation will take a long time to
         * stop after the animated value has stopped visibly changing.
         * 
         * If the epsilon value is too large, the animation will end prematurely.
         * 
         * The default value is 0.001.
         */
        epsilon?: number | null
        /**
         * The initial velocity to start the animation with.
         * 
         * Initial velocity affects only the animation curve, but not its duration.
         */
        initial_velocity?: number | null
        /**
         * Physical parameters describing the spring.
         */
        spring_params?: SpringParams | null
        /**
         * The value to animate from.
         * 
         * The animation will start at this value and end at
         * [property`SpringAnimation:`value-to].
         */
        value_from?: number | null
        /**
         * The value to animate to.
         * 
         * The animation will start at [property`SpringAnimation:`value-from] and end
         * at this value.
         */
        value_to?: number | null
    }

}

interface SpringAnimation {

    // Own properties of Adw-1.Adw.SpringAnimation

    /**
     * Whether the animation should be clamped.
     * 
     * If set to `TRUE`, the animation will abruptly end as soon as it reaches the
     * final value, preventing overshooting.
     * 
     * It won't prevent overshooting [property`SpringAnimation:`value-from] if a
     * relative negative [property`SpringAnimation:`initial-velocity] is set.
     */
    clamp: boolean
    /**
     * Precision of the spring.
     * 
     * The level of precision used to determine when the animation has come to a
     * rest, that is, when the amplitude of the oscillations becomes smaller than
     * this value.
     * 
     * If the epsilon value is too small, the animation will take a long time to
     * stop after the animated value has stopped visibly changing.
     * 
     * If the epsilon value is too large, the animation will end prematurely.
     * 
     * The default value is 0.001.
     */
    epsilon: number
    /**
     * Estimated duration of the animation, in milliseconds.
     * 
     * Can be [const`DURATION_INFINITE]` if the spring damping is set to 0.
     */
    readonly estimated_duration: number
    /**
     * The initial velocity to start the animation with.
     * 
     * Initial velocity affects only the animation curve, but not its duration.
     */
    initial_velocity: number
    /**
     * Physical parameters describing the spring.
     */
    spring_params: SpringParams
    /**
     * The value to animate from.
     * 
     * The animation will start at this value and end at
     * [property`SpringAnimation:`value-to].
     */
    value_from: number
    /**
     * The value to animate to.
     * 
     * The animation will start at [property`SpringAnimation:`value-from] and end
     * at this value.
     */
    value_to: number
    /**
     * Current velocity of the animation.
     */
    readonly velocity: number

    // Owm methods of Adw-1.Adw.SpringAnimation

    /**
     * Gets whether `self` should be clamped.
     */
    get_clamp(): boolean
    /**
     * Gets the precision used to determine the duration of `self`.
     */
    get_epsilon(): number
    /**
     * Gets the estimated duration of `self`.
     */
    get_estimated_duration(): number
    /**
     * Gets the initial velocity of `self`.
     */
    get_initial_velocity(): number
    /**
     * Gets the physical parameters of the spring of `self`.
     */
    get_spring_params(): SpringParams
    /**
     * Gets the value `self` will animate from.
     */
    get_value_from(): number
    /**
     * Gets the value `self` will animate to.
     */
    get_value_to(): number
    /**
     * Gets the current velocity of `self`.
     */
    get_velocity(): number
    /**
     * Sets whether `self` should be clamped.
     * @param clamp the new value
     */
    set_clamp(clamp: boolean): void
    /**
     * Sets the precision used to determine the duration of `self`.
     * @param epsilon the new value
     */
    set_epsilon(epsilon: number): void
    /**
     * Sets the initial velocity of `self`.
     * @param velocity the initial velocity
     */
    set_initial_velocity(velocity: number): void
    /**
     * Sets the physical parameters of the spring of `self`.
     * @param spring_params the new spring parameters
     */
    set_spring_params(spring_params: SpringParams): void
    /**
     * Sets the value `self` will animate from.
     * @param value the value to animate from
     */
    set_value_from(value: number): void
    /**
     * Sets the value `self` will animate to.
     * @param value the value to animate to
     */
    set_value_to(value: number): void

    // Class property signals of Adw-1.Adw.SpringAnimation

    connect(sigName: "notify::clamp", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clamp", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clamp", ...args: any[]): void
    connect(sigName: "notify::epsilon", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::epsilon", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::epsilon", ...args: any[]): void
    connect(sigName: "notify::estimated-duration", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-duration", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-duration", ...args: any[]): void
    connect(sigName: "notify::initial-velocity", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-velocity", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::initial-velocity", ...args: any[]): void
    connect(sigName: "notify::spring-params", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spring-params", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spring-params", ...args: any[]): void
    connect(sigName: "notify::value-from", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-from", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-from", ...args: any[]): void
    connect(sigName: "notify::value-to", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-to", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-to", ...args: any[]): void
    connect(sigName: "notify::velocity", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::velocity", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::velocity", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::widget", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: SpringAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A spring-based [class`Animation]`.
 * 
 * `AdwSpringAnimation` implements an animation driven by a physical model of a
 * spring described by [struct`SpringParams]`, with a resting position in
 * [property`SpringAnimation:`value-to], stretched to
 * [property`SpringAnimation:`value-from].
 * 
 * Since the animation is physically simulated, spring animations don't have a
 * fixed duration. The animation will stop when the simulated spring comes to a
 * rest - when the amplitude of the oscillations becomes smaller than
 * [property`SpringAnimation:`epsilon], or immediately when it reaches
 * [property`SpringAnimation:`value-to] if
 * [property`SpringAnimation:`clamp] is set to `TRUE`. The estimated duration can
 * be obtained with [property`SpringAnimation:`estimated-duration].
 * 
 * Due to the nature of spring-driven motion the animation can overshoot
 * [property`SpringAnimation:`value-to] before coming to a rest. Whether the
 * animation will overshoot or not depends on the damping ratio of the spring.
 * See [struct`SpringParams]` for more information about specific damping ratio
 * values.
 * 
 * If [property`SpringAnimation:`clamp] is `TRUE`, the animation will abruptly
 * end as soon as it reaches the final value, preventing overshooting.
 * 
 * Animations can have an initial velocity value, set via
 * [property`SpringAnimation:`initial-velocity], which adjusts the curve without
 * changing the duration. This makes spring animations useful for deceleration
 * at the end of gestures.
 * 
 * If the initial and final values are equal, and the initial velocity is not 0,
 * the animation value will bounce and return to its resting position.
 * @class 
 */
class SpringAnimation extends Animation {

    // Own properties of Adw-1.Adw.SpringAnimation

    static name: string
    static $gtype: GObject.GType<SpringAnimation>

    // Constructors of Adw-1.Adw.SpringAnimation

    constructor(config?: SpringAnimation.ConstructorProperties) 
    /**
     * Creates a new `AdwSpringAnimation` on `widget`.
     * 
     * The animation will animate `target` from `from` to `to` with the dynamics of a
     * spring described by `spring_params`.
     * @constructor 
     * @param widget a widget to create animation on
     * @param from a value to animate from
     * @param to a value to animate to
     * @param spring_params physical parameters of the spring
     * @param target a target value to animate
     */
    constructor(widget: Gtk.Widget, from: number, to: number, spring_params: SpringParams, target: AnimationTarget) 
    /**
     * Creates a new `AdwSpringAnimation` on `widget`.
     * 
     * The animation will animate `target` from `from` to `to` with the dynamics of a
     * spring described by `spring_params`.
     * @constructor 
     * @param widget a widget to create animation on
     * @param from a value to animate from
     * @param to a value to animate to
     * @param spring_params physical parameters of the spring
     * @param target a target value to animate
     */
    static new(widget: Gtk.Widget, from: number, to: number, spring_params: SpringParams, target: AnimationTarget): SpringAnimation
    _init(config?: SpringAnimation.ConstructorProperties): void
}

module Squeezer {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Squeezer

        /**
         * Whether to allow squeezing beyond the last child's minimum size.
         * 
         * If set to `TRUE`, the squeezer can shrink to the point where no child can
         * be shown. This is functionally equivalent to appending a widget with 0x0
         * minimum size.
         */
        allow_none?: boolean | null
        /**
         * Whether all children have the same size for the opposite orientation.
         * 
         * For example, if a squeezer is horizontal and is homogeneous, it will request
         * the same height for all its children. If it isn't, the squeezer may change
         * size when a different child becomes visible.
         */
        homogeneous?: boolean | null
        /**
         * Whether the squeezer interpolates its size when changing the visible child.
         * 
         * If `TRUE`, the squeezer will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the squeezer is
         * horizontal, it will interpolate the its height.
         */
        interpolate_size?: boolean | null
        /**
         * Determines when the squeezer will switch children.
         * 
         * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, it will only switch when
         * the visible child cannot fit anymore. With
         * `ADW_FOLD_THRESHOLD_POLICY_NATURAL`, it will switch as soon as the visible
         * child doesn't get their natural size.
         * 
         * This can be useful if you have a long ellipsizing label and want to let it
         * ellipsize instead of immediately switching.
         */
        switch_threshold_policy?: FoldThresholdPolicy | null
        /**
         * The animation duration, in milliseconds.
         */
        transition_duration?: number | null
        /**
         * The type of animation used for transitions between children.
         */
        transition_type?: SqueezerTransitionType | null
        /**
         * The horizontal alignment, from 0 (start) to 1 (end).
         * 
         * This affects the children allocation during transitions, when they exceed
         * the size of the squeezer.
         * 
         * For example, 0.5 means the child will be centered, 0 means it will keep the
         * start side aligned and overflow the end side, and 1 means the opposite.
         */
        xalign?: number | null
        /**
         * The vertical alignment, from 0 (top) to 1 (bottom).
         * 
         * This affects the children allocation during transitions, when they exceed
         * the size of the squeezer.
         * 
         * For example, 0.5 means the child will be centered, 0 means it will keep the
         * top side aligned and overflow the bottom side, and 1 means the opposite.
         */
        yalign?: number | null
    }

}

interface Squeezer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Squeezer

    /**
     * Whether to allow squeezing beyond the last child's minimum size.
     * 
     * If set to `TRUE`, the squeezer can shrink to the point where no child can
     * be shown. This is functionally equivalent to appending a widget with 0x0
     * minimum size.
     */
    allow_none: boolean
    /**
     * Whether all children have the same size for the opposite orientation.
     * 
     * For example, if a squeezer is horizontal and is homogeneous, it will request
     * the same height for all its children. If it isn't, the squeezer may change
     * size when a different child becomes visible.
     */
    homogeneous: boolean
    /**
     * Whether the squeezer interpolates its size when changing the visible child.
     * 
     * If `TRUE`, the squeezer will interpolate its size between the one of the
     * previous visible child and the one of the new visible child, according to
     * the set transition duration and the orientation, e.g. if the squeezer is
     * horizontal, it will interpolate the its height.
     */
    interpolate_size: boolean
    /**
     * A selection model with the squeezer's pages.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track the visible page.
     */
    readonly pages: Gtk.SelectionModel
    /**
     * Determines when the squeezer will switch children.
     * 
     * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, it will only switch when
     * the visible child cannot fit anymore. With
     * `ADW_FOLD_THRESHOLD_POLICY_NATURAL`, it will switch as soon as the visible
     * child doesn't get their natural size.
     * 
     * This can be useful if you have a long ellipsizing label and want to let it
     * ellipsize instead of immediately switching.
     */
    switch_threshold_policy: FoldThresholdPolicy
    /**
     * The animation duration, in milliseconds.
     */
    transition_duration: number
    /**
     * Whether a transition is currently running.
     * 
     * If a transition is impossible, the property value will be set to `TRUE` and
     * then immediately to `FALSE`, so it's possible to rely on its notifications
     * to know that a transition has happened.
     */
    readonly transition_running: boolean
    /**
     * The type of animation used for transitions between children.
     */
    transition_type: SqueezerTransitionType
    /**
     * The currently visible child.
     */
    readonly visible_child: Gtk.Widget
    /**
     * The horizontal alignment, from 0 (start) to 1 (end).
     * 
     * This affects the children allocation during transitions, when they exceed
     * the size of the squeezer.
     * 
     * For example, 0.5 means the child will be centered, 0 means it will keep the
     * start side aligned and overflow the end side, and 1 means the opposite.
     */
    xalign: number
    /**
     * The vertical alignment, from 0 (top) to 1 (bottom).
     * 
     * This affects the children allocation during transitions, when they exceed
     * the size of the squeezer.
     * 
     * For example, 0.5 means the child will be centered, 0 means it will keep the
     * top side aligned and overflow the bottom side, and 1 means the opposite.
     */
    yalign: number

    // Owm methods of Adw-1.Adw.Squeezer

    /**
     * Adds a child to `self`.
     * @param child the widget to add
     */
    add(child: Gtk.Widget): SqueezerPage
    /**
     * Gets whether to allow squeezing beyond the last child's minimum size.
     */
    get_allow_none(): boolean
    /**
     * Gets whether all children have the same size for the opposite orientation.
     */
    get_homogeneous(): boolean
    /**
     * Gets whether `self` interpolates its size when changing the visible child.
     */
    get_interpolate_size(): boolean
    /**
     * Returns the [class`SqueezerPage]` object for `child`.
     * @param child a child of `self`
     */
    get_page(child: Gtk.Widget): SqueezerPage
    /**
     * Returns a [iface`Gio`.ListModel] that contains the pages of `self`.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track the visible page.
     */
    get_pages(): Gtk.SelectionModel
    /**
     * Gets the fold threshold policy for `self`.
     */
    get_switch_threshold_policy(): FoldThresholdPolicy
    /**
     * Gets the transition animation duration for `self`.
     */
    get_transition_duration(): number
    /**
     * Gets whether a transition is currently running for `self`.
     */
    get_transition_running(): boolean
    /**
     * Gets the type of animation used for transitions between children in `self`.
     */
    get_transition_type(): SqueezerTransitionType
    /**
     * Gets the currently visible child of `self`.
     */
    get_visible_child(): Gtk.Widget | null
    /**
     * Gets the horizontal alignment, from 0 (start) to 1 (end).
     */
    get_xalign(): number
    /**
     * Gets the vertical alignment, from 0 (top) to 1 (bottom).
     */
    get_yalign(): number
    /**
     * Removes a child widget from `self`.
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Sets whether to allow squeezing beyond the last child's minimum size.
     * @param allow_none whether `self` allows squeezing beyond the last child
     */
    set_allow_none(allow_none: boolean): void
    /**
     * Sets whether all children have the same size for the opposite orientation.
     * @param homogeneous whether `self` is homogeneous
     */
    set_homogeneous(homogeneous: boolean): void
    /**
     * Sets whether `self` interpolates its size when changing the visible child.
     * @param interpolate_size whether to interpolate the size
     */
    set_interpolate_size(interpolate_size: boolean): void
    /**
     * Sets the fold threshold policy for `self`.
     * @param policy the policy to use
     */
    set_switch_threshold_policy(policy: FoldThresholdPolicy): void
    /**
     * Sets the transition animation duration for `self`.
     * @param duration the new duration, in milliseconds
     */
    set_transition_duration(duration: number): void
    /**
     * Sets the type of animation used for transitions between children in `self`.
     * @param transition the new transition type
     */
    set_transition_type(transition: SqueezerTransitionType): void
    /**
     * Sets the horizontal alignment, from 0 (start) to 1 (end).
     * @param xalign the new alignment value
     */
    set_xalign(xalign: number): void
    /**
     * Sets the vertical alignment, from 0 (top) to 1 (bottom).
     * @param yalign the new alignment value
     */
    set_yalign(yalign: number): void

    // Class property signals of Adw-1.Adw.Squeezer

    connect(sigName: "notify::allow-none", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-none", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-none", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpolate-size", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
    connect(sigName: "notify::pages", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pages", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pages", ...args: any[]): void
    connect(sigName: "notify::switch-threshold-policy", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switch-threshold-policy", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::switch-threshold-policy", ...args: any[]): void
    connect(sigName: "notify::transition-duration", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-duration", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-running", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-running", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-running", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Squeezer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A best fit container.
 * 
 * <picture>
 *   <source srcset="squeezer-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="squeezer-wide.png" alt="squeezer-wide">
 * </picture>
 * <picture>
 *   <source srcset="squeezer-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="squeezer-narrow.png" alt="squeezer-narrow">
 * </picture>
 * 
 * The `AdwSqueezer` widget is a container which only shows the first of its
 * children that fits in the available size. It is convenient to offer different
 * widgets to represent the same data with different levels of detail, making
 * the widget seem to squeeze itself to fit in the available space.
 * 
 * Transitions between children can be animated as fades. This can be controlled
 * with [property`Squeezer:`transition-type].
 * 
 * ## CSS nodes
 * 
 * `AdwSqueezer` has a single CSS node with name `squeezer`.
 * @class 
 */
class Squeezer extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Squeezer

    static name: string
    static $gtype: GObject.GType<Squeezer>

    // Constructors of Adw-1.Adw.Squeezer

    constructor(config?: Squeezer.ConstructorProperties) 
    /**
     * Creates a new `AdwSqueezer`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwSqueezer`.
     * @constructor 
     */
    static new(): Squeezer
    _init(config?: Squeezer.ConstructorProperties): void
}

module SqueezerPage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.SqueezerPage

        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * Whether the child is enabled.
         * 
         * If a child is disabled, it will be ignored when looking for the child
         * fitting the available size best.
         * 
         * This allows to programmatically and prematurely hide a child even if it
         * fits in the available space.
         * 
         * This can be used e.g. to ensure a certain child is hidden below a certain
         * window width, or any other constraint you find suitable.
         */
        enabled?: boolean | null
    }

}

interface SqueezerPage {

    // Own properties of Adw-1.Adw.SqueezerPage

    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * Whether the child is enabled.
     * 
     * If a child is disabled, it will be ignored when looking for the child
     * fitting the available size best.
     * 
     * This allows to programmatically and prematurely hide a child even if it
     * fits in the available space.
     * 
     * This can be used e.g. to ensure a certain child is hidden below a certain
     * window width, or any other constraint you find suitable.
     */
    enabled: boolean

    // Owm methods of Adw-1.Adw.SqueezerPage

    /**
     * Returns the squeezer child to which `self` belongs.
     */
    get_child(): Gtk.Widget
    /**
     * Gets whether `self` is enabled.
     */
    get_enabled(): boolean
    /**
     * Sets whether `self` is enabled.
     * @param enabled whether `self` is enabled
     */
    set_enabled(enabled: boolean): void

    // Class property signals of Adw-1.Adw.SqueezerPage

    connect(sigName: "notify::child", callback: (($obj: SqueezerPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SqueezerPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: SqueezerPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SqueezerPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An auxiliary class used by [class`Squeezer]`.
 * @class 
 */
class SqueezerPage extends GObject.Object {

    // Own properties of Adw-1.Adw.SqueezerPage

    static name: string
    static $gtype: GObject.GType<SqueezerPage>

    // Constructors of Adw-1.Adw.SqueezerPage

    constructor(config?: SqueezerPage.ConstructorProperties) 
    _init(config?: SqueezerPage.ConstructorProperties): void
}

module StatusPage {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.StatusPage

        /**
         * The child widget.
         */
        child?: Gtk.Widget | null
        /**
         * The description to be displayed below the title.
         */
        description?: string | null
        /**
         * The name of the icon to be used.
         * 
         * Changing this will clear [property`StatusPage:`paintable] out.
         */
        icon_name?: string | null
        /**
         * The `GdkPaintable` to be used.
         * 
         * Changing this will clear [property`StatusPage:`icon-name] out.
         */
        paintable?: Gdk.Paintable | null
        /**
         * The title to be displayed below the icon.
         */
        title?: string | null
    }

}

interface StatusPage extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.StatusPage

    /**
     * The child widget.
     */
    child: Gtk.Widget
    /**
     * The description to be displayed below the title.
     */
    description: string
    /**
     * The name of the icon to be used.
     * 
     * Changing this will clear [property`StatusPage:`paintable] out.
     */
    icon_name: string
    /**
     * The `GdkPaintable` to be used.
     * 
     * Changing this will clear [property`StatusPage:`icon-name] out.
     */
    paintable: Gdk.Paintable
    /**
     * The title to be displayed below the icon.
     */
    title: string

    // Owm methods of Adw-1.Adw.StatusPage

    /**
     * Gets the child widget of `self`.
     */
    get_child(): Gtk.Widget | null
    /**
     * Gets the description for `self`.
     */
    get_description(): string | null
    /**
     * Gets the icon name for `self`.
     */
    get_icon_name(): string | null
    /**
     * Gets the paintable for `self`.
     */
    get_paintable(): Gdk.Paintable | null
    /**
     * Gets the title for `self`.
     */
    get_title(): string
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    set_child(child: Gtk.Widget | null): void
    /**
     * Sets the description for `self`.
     * @param description the description
     */
    set_description(description: string | null): void
    /**
     * Sets the icon name for `self`.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the paintable for `self`.
     * @param paintable the paintable
     */
    set_paintable(paintable: Gdk.Paintable | null): void
    /**
     * Sets the title for `self`.
     * @param title the title
     */
    set_title(title: string): void

    // Class property signals of Adw-1.Adw.StatusPage

    connect(sigName: "notify::child", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::paintable", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paintable", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paintable", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: StatusPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A page used for empty/error states and similar use-cases.
 * 
 * <picture>
 *   <source srcset="status-page-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="status-page.png" alt="status-page">
 * </picture>
 * 
 * The `AdwStatusPage` widget can have an icon, a title, a description and a
 * custom widget which is displayed below them.
 * 
 * ## CSS nodes
 * 
 * `AdwStatusPage` has a main CSS node with name `statuspage`.
 * 
 * `AdwStatusPage` can use the
 * [`.compact`](style-classes.html#compact-status-page) style class for when it
 * needs to fit into a small space such a sidebar or a popover.
 * @class 
 */
class StatusPage extends Gtk.Widget {

    // Own properties of Adw-1.Adw.StatusPage

    static name: string
    static $gtype: GObject.GType<StatusPage>

    // Constructors of Adw-1.Adw.StatusPage

    constructor(config?: StatusPage.ConstructorProperties) 
    /**
     * Creates a new `AdwStatusPage`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwStatusPage`.
     * @constructor 
     */
    static new(): StatusPage
    _init(config?: StatusPage.ConstructorProperties): void
}

module StyleManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.StyleManager

        /**
         * The requested application color scheme.
         * 
         * The effective appearance will be decided based on the application color
         * scheme and the system preferred color scheme. The
         * [property`StyleManager:`dark] property can be used to query the current
         * effective appearance.
         * 
         * The `ADW_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
         * using light appearance unless the system prefers dark colors. This is the
         * default value.
         * 
         * The `ADW_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
         * using dark appearance, but can still switch to the light appearance if the
         * system can prefers it, for example, when the high contrast preference is
         * enabled.
         * 
         * The `ADW_COLOR_SCHEME_FORCE_LIGHT` and `ADW_COLOR_SCHEME_FORCE_DARK` values
         * ignore the system preference entirely. They are useful if the application
         * wants to match its UI to its content or to provide a separate color scheme
         * switcher.
         * 
         * If a per-[class`Gdk`.Display] style manager has its color scheme set to
         * `ADW_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
         * default style manager.
         * 
         * For the default style manager, `ADW_COLOR_SCHEME_DEFAULT` is equivalent to
         * `ADW_COLOR_SCHEME_PREFER_LIGHT`.
         * 
         * The [property`StyleManager:`system-supports-color-schemes] property can be
         * used to check if the current environment provides a color scheme
         * preference.
         */
        color_scheme?: ColorScheme | null
        /**
         * The display the style manager is associated with.
         * 
         * The display will be `NULL` for the style manager returned by
         * [func`StyleManager`.get_default].
         */
        display?: Gdk.Display | null
    }

}

interface StyleManager {

    // Own properties of Adw-1.Adw.StyleManager

    /**
     * The requested application color scheme.
     * 
     * The effective appearance will be decided based on the application color
     * scheme and the system preferred color scheme. The
     * [property`StyleManager:`dark] property can be used to query the current
     * effective appearance.
     * 
     * The `ADW_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
     * using light appearance unless the system prefers dark colors. This is the
     * default value.
     * 
     * The `ADW_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
     * using dark appearance, but can still switch to the light appearance if the
     * system can prefers it, for example, when the high contrast preference is
     * enabled.
     * 
     * The `ADW_COLOR_SCHEME_FORCE_LIGHT` and `ADW_COLOR_SCHEME_FORCE_DARK` values
     * ignore the system preference entirely. They are useful if the application
     * wants to match its UI to its content or to provide a separate color scheme
     * switcher.
     * 
     * If a per-[class`Gdk`.Display] style manager has its color scheme set to
     * `ADW_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
     * default style manager.
     * 
     * For the default style manager, `ADW_COLOR_SCHEME_DEFAULT` is equivalent to
     * `ADW_COLOR_SCHEME_PREFER_LIGHT`.
     * 
     * The [property`StyleManager:`system-supports-color-schemes] property can be
     * used to check if the current environment provides a color scheme
     * preference.
     */
    color_scheme: ColorScheme
    /**
     * Whether the application is using dark appearance.
     * 
     * This property can be used to query the current appearance, as requested via
     * [property`StyleManager:`color-scheme].
     */
    readonly dark: boolean
    /**
     * The display the style manager is associated with.
     * 
     * The display will be `NULL` for the style manager returned by
     * [func`StyleManager`.get_default].
     */
    readonly display: Gdk.Display
    /**
     * Whether the application is using high contrast appearance.
     * 
     * This cannot be overridden by applications.
     */
    readonly high_contrast: boolean
    /**
     * Whether the system supports color schemes.
     * 
     * This property can be used to check if the current environment provides a
     * color scheme preference. For example, applications might want to show a
     * separate appearance switcher if it's set to `FALSE`.
     * 
     * See [property`StyleManager:`color-scheme].
     */
    readonly system_supports_color_schemes: boolean

    // Owm methods of Adw-1.Adw.StyleManager

    /**
     * Gets the requested application color scheme.
     */
    get_color_scheme(): ColorScheme
    /**
     * Gets whether the application is using dark appearance.
     */
    get_dark(): boolean
    /**
     * Gets the display the style manager is associated with.
     * 
     * The display will be `NULL` for the style manager returned by
     * [func`StyleManager`.get_default].
     */
    get_display(): Gdk.Display
    /**
     * Gets whether the application is using high contrast appearance.
     */
    get_high_contrast(): boolean
    /**
     * Gets whether the system supports color schemes.
     */
    get_system_supports_color_schemes(): boolean
    /**
     * Sets the requested application color scheme.
     * 
     * The effective appearance will be decided based on the application color
     * scheme and the system preferred color scheme. The
     * [property`StyleManager:`dark] property can be used to query the current
     * effective appearance.
     * @param color_scheme the color scheme
     */
    set_color_scheme(color_scheme: ColorScheme): void

    // Class property signals of Adw-1.Adw.StyleManager

    connect(sigName: "notify::color-scheme", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-scheme", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-scheme", ...args: any[]): void
    connect(sigName: "notify::dark", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dark", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dark", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::high-contrast", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::high-contrast", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::high-contrast", ...args: any[]): void
    connect(sigName: "notify::system-supports-color-schemes", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-supports-color-schemes", callback: (($obj: StyleManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-supports-color-schemes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A class for managing application-wide styling.
 * 
 * `AdwStyleManager` provides a way to query and influence the application
 * styles, such as whether to use dark or high contrast appearance.
 * 
 * It allows to set the color scheme via the
 * [property`StyleManager:`color-scheme] property, and to query the current
 * appearance, as well as whether a system-wide color scheme preference exists.
 * @class 
 */
class StyleManager extends GObject.Object {

    // Own properties of Adw-1.Adw.StyleManager

    static name: string
    static $gtype: GObject.GType<StyleManager>

    // Constructors of Adw-1.Adw.StyleManager

    constructor(config?: StyleManager.ConstructorProperties) 
    _init(config?: StyleManager.ConstructorProperties): void
    /**
     * Gets the default `AdwStyleManager` instance.
     * 
     * It manages all [class`Gdk`.Display] instances unless the style manager for
     * that display has an override.
     * 
     * See [func`StyleManager`.get_for_display].
     */
    static get_default(): StyleManager
    /**
     * Gets the `AdwStyleManager` instance managing `display`.
     * 
     * It can be used to override styles for that specific display instead of the
     * whole application.
     * 
     * Most applications should use [func`StyleManager`.get_default] instead.
     * @param display a `GdkDisplay`
     */
    static get_for_display(display: Gdk.Display): StyleManager
}

module SwipeTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-swipe`
     */
    interface BeginSwipeSignalCallback {
        ($obj: SwipeTracker): void
    }

    /**
     * Signal callback interface for `end-swipe`
     */
    interface EndSwipeSignalCallback {
        ($obj: SwipeTracker, velocity: number, to: number): void
    }

    /**
     * Signal callback interface for `prepare`
     */
    interface PrepareSignalCallback {
        ($obj: SwipeTracker, direction: NavigationDirection): void
    }

    /**
     * Signal callback interface for `update-swipe`
     */
    interface UpdateSwipeSignalCallback {
        ($obj: SwipeTracker, progress: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Orientable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.SwipeTracker

        /**
         * Whether to allow swiping for more than one snap point at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent snap
         * points.
         */
        allow_long_swipes?: boolean | null
        /**
         * Whether to allow dragging with mouse pointer.
         */
        allow_mouse_drag?: boolean | null
        /**
         * Whether the swipe tracker is enabled.
         * 
         * When it's not enabled, no events will be processed. Usually widgets will
         * want to expose this via a property.
         */
        enabled?: boolean | null
        /**
         * Whether to reverse the swipe direction.
         * 
         * If the swipe tracker is horizontal, it can be used for supporting RTL text
         * direction.
         */
        reversed?: boolean | null
        /**
         * The widget the swipe tracker is attached to.
         */
        swipeable?: Swipeable | null
    }

}

interface SwipeTracker extends Gtk.Orientable {

    // Own properties of Adw-1.Adw.SwipeTracker

    /**
     * Whether to allow swiping for more than one snap point at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent snap
     * points.
     */
    allow_long_swipes: boolean
    /**
     * Whether to allow dragging with mouse pointer.
     */
    allow_mouse_drag: boolean
    /**
     * Whether the swipe tracker is enabled.
     * 
     * When it's not enabled, no events will be processed. Usually widgets will
     * want to expose this via a property.
     */
    enabled: boolean
    /**
     * Whether to reverse the swipe direction.
     * 
     * If the swipe tracker is horizontal, it can be used for supporting RTL text
     * direction.
     */
    reversed: boolean
    /**
     * The widget the swipe tracker is attached to.
     */
    readonly swipeable: Swipeable

    // Owm methods of Adw-1.Adw.SwipeTracker

    /**
     * Gets whether to allow swiping for more than one snap point at a time.
     */
    get_allow_long_swipes(): boolean
    /**
     * Gets whether `self` can be dragged with mouse pointer.
     */
    get_allow_mouse_drag(): boolean
    /**
     * Gets whether `self` is enabled.
     */
    get_enabled(): boolean
    /**
     * Gets whether `self` is reversing the swipe direction.
     */
    get_reversed(): boolean
    /**
     * Get the widget `self` is attached to.
     */
    get_swipeable(): Swipeable
    /**
     * Sets whether to allow swiping for more than one snap point at a time.
     * @param allow_long_swipes whether to allow long swipes
     */
    set_allow_long_swipes(allow_long_swipes: boolean): void
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     * @param allow_mouse_drag whether to allow mouse dragging
     */
    set_allow_mouse_drag(allow_mouse_drag: boolean): void
    /**
     * Sets whether `self` is enabled.
     * @param enabled whether `self` is enabled
     */
    set_enabled(enabled: boolean): void
    /**
     * Sets whether to reverse the swipe direction.
     * @param reversed whether to reverse the swipe direction
     */
    set_reversed(reversed: boolean): void
    /**
     * Moves the current progress value by `delta`.
     * 
     * This can be used to adjust the current position if snap points move during
     * the gesture.
     * @param delta the position delta
     */
    shift_position(delta: number): void

    // Own signals of Adw-1.Adw.SwipeTracker

    connect(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    connect_after(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    emit(sigName: "begin-swipe", ...args: any[]): void
    connect(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    connect_after(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    emit(sigName: "end-swipe", velocity: number, to: number, ...args: any[]): void
    connect(sigName: "prepare", callback: SwipeTracker.PrepareSignalCallback): number
    connect_after(sigName: "prepare", callback: SwipeTracker.PrepareSignalCallback): number
    emit(sigName: "prepare", direction: NavigationDirection, ...args: any[]): void
    connect(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    connect_after(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    emit(sigName: "update-swipe", progress: number, ...args: any[]): void

    // Class property signals of Adw-1.Adw.SwipeTracker

    connect(sigName: "notify::allow-long-swipes", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-long-swipes", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-long-swipes", ...args: any[]): void
    connect(sigName: "notify::allow-mouse-drag", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-mouse-drag", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-mouse-drag", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::reversed", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reversed", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reversed", ...args: any[]): void
    connect(sigName: "notify::swipeable", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swipeable", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swipeable", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: SwipeTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A swipe tracker used in [class`Carousel]`, [class`Flap]` and [class`Leaflet]`.
 * 
 * The `AdwSwipeTracker` object can be used for implementing widgets with swipe
 * gestures. It supports touch-based swipes, pointer dragging, and touchpad
 * scrolling.
 * 
 * The widgets will probably want to expose the [property`SwipeTracker:`enabled]
 * property. If they expect to use horizontal orientation,
 * [property`SwipeTracker:`reversed] can be used for supporting RTL text
 * direction.
 * @class 
 */
class SwipeTracker extends GObject.Object {

    // Own properties of Adw-1.Adw.SwipeTracker

    static name: string
    static $gtype: GObject.GType<SwipeTracker>

    // Constructors of Adw-1.Adw.SwipeTracker

    constructor(config?: SwipeTracker.ConstructorProperties) 
    /**
     * Creates a new `AdwSwipeTracker` for `widget`.
     * @constructor 
     * @param swipeable a widget to add the tracker on
     */
    constructor(swipeable: Swipeable) 
    /**
     * Creates a new `AdwSwipeTracker` for `widget`.
     * @constructor 
     * @param swipeable a widget to add the tracker on
     */
    static new(swipeable: Swipeable): SwipeTracker
    _init(config?: SwipeTracker.ConstructorProperties): void
}

module TabBar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `extra-drag-drop`
     */
    interface ExtraDragDropSignalCallback {
        ($obj: TabBar, page: TabPage, value: any): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.TabBar

        /**
         * Whether the tabs automatically hide.
         * 
         * If set to `TRUE`, the tab bar disappears when [property`TabBar:`view] has 0
         * or 1 tab, no pinned tabs, and no tab is being transferred.
         * 
         * See [property`TabBar:`tabs-revealed].
         */
        autohide?: boolean | null
        /**
         * The widget shown after the tabs.
         */
        end_action_widget?: Gtk.Widget | null
        /**
         * Whether tabs expand to full width.
         * 
         * If set to `TRUE`, the tabs will always vary width filling the whole width
         * when possible, otherwise tabs will always have the minimum possible size.
         */
        expand_tabs?: boolean | null
        /**
         * Whether tabs use inverted layout.
         * 
         * If set to `TRUE`, non-pinned tabs will have the close button at the
         * beginning and the indicator at the end rather than the opposite.
         */
        inverted?: boolean | null
        /**
         * The widget shown before the tabs.
         */
        start_action_widget?: Gtk.Widget | null
        /**
         * The tab view the tab bar controls.
         */
        view?: TabView | null
    }

}

interface TabBar extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.TabBar

    /**
     * Whether the tabs automatically hide.
     * 
     * If set to `TRUE`, the tab bar disappears when [property`TabBar:`view] has 0
     * or 1 tab, no pinned tabs, and no tab is being transferred.
     * 
     * See [property`TabBar:`tabs-revealed].
     */
    autohide: boolean
    /**
     * The widget shown after the tabs.
     */
    end_action_widget: Gtk.Widget
    /**
     * Whether tabs expand to full width.
     * 
     * If set to `TRUE`, the tabs will always vary width filling the whole width
     * when possible, otherwise tabs will always have the minimum possible size.
     */
    expand_tabs: boolean
    /**
     * Whether tabs use inverted layout.
     * 
     * If set to `TRUE`, non-pinned tabs will have the close button at the
     * beginning and the indicator at the end rather than the opposite.
     */
    inverted: boolean
    /**
     * Whether the tab bar is overflowing.
     * 
     * If `TRUE`, all tabs cannot be displayed at once and require scrolling.
     */
    readonly is_overflowing: boolean
    /**
     * The widget shown before the tabs.
     */
    start_action_widget: Gtk.Widget
    /**
     * Whether the tabs are currently revealed.
     * 
     * See [property`TabBar:`autohide].
     */
    readonly tabs_revealed: boolean
    /**
     * The tab view the tab bar controls.
     */
    view: TabView

    // Owm methods of Adw-1.Adw.TabBar

    /**
     * Gets whether the tabs automatically hide.
     */
    get_autohide(): boolean
    /**
     * Gets the widget shown after the tabs.
     */
    get_end_action_widget(): Gtk.Widget | null
    /**
     * Gets whether tabs expand to full width.
     */
    get_expand_tabs(): boolean
    /**
     * Gets whether tabs use inverted layout.
     */
    get_inverted(): boolean
    /**
     * Gets whether `self` is overflowing.
     */
    get_is_overflowing(): boolean
    /**
     * Gets the widget shown before the tabs.
     */
    get_start_action_widget(): Gtk.Widget | null
    /**
     * Gets whether the tabs are currently revealed.
     */
    get_tabs_revealed(): boolean
    /**
     * Gets the tab view `self` controls.
     */
    get_view(): TabView | null
    /**
     * Sets whether the tabs automatically hide.
     * @param autohide whether the tabs automatically hide
     */
    set_autohide(autohide: boolean): void
    /**
     * Sets the widget to show after the tabs.
     * @param widget the widget to show after the tabs
     */
    set_end_action_widget(widget: Gtk.Widget | null): void
    /**
     * Sets whether tabs expand to full width.
     * @param expand_tabs whether to expand tabs
     */
    set_expand_tabs(expand_tabs: boolean): void
    /**
     * Sets whether tabs tabs use inverted layout.
     * @param inverted whether tabs use inverted layout
     */
    set_inverted(inverted: boolean): void
    /**
     * Sets the widget to show before the tabs.
     * @param widget the widget to show before the tabs
     */
    set_start_action_widget(widget: Gtk.Widget | null): void
    /**
     * Sets the tab view `self` controls.
     * @param view a tab view
     */
    set_view(view: TabView | null): void
    /**
     * Sets the supported types for this drop target.
     * 
     * Sets up an extra drop target on tabs.
     * 
     * This allows to drag arbitrary content onto tabs, for example URLs in a web
     * browser.
     * 
     * If a tab is hovered for a certain period of time while dragging the content,
     * it will be automatically selected.
     * 
     * The [signal`TabBar:`:extra-drag-drop] signal can be used to handle the drop.
     * @param actions the supported actions
     * @param types    all supported `GType`s that can be dropped
     */
    setup_extra_drop_target(actions: Gdk.DragAction, types: GObject.GType[] | null): void

    // Own signals of Adw-1.Adw.TabBar

    connect(sigName: "extra-drag-drop", callback: TabBar.ExtraDragDropSignalCallback): number
    connect_after(sigName: "extra-drag-drop", callback: TabBar.ExtraDragDropSignalCallback): number
    emit(sigName: "extra-drag-drop", page: TabPage, value: any, ...args: any[]): void

    // Class property signals of Adw-1.Adw.TabBar

    connect(sigName: "notify::autohide", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autohide", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autohide", ...args: any[]): void
    connect(sigName: "notify::end-action-widget", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-action-widget", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-action-widget", ...args: any[]): void
    connect(sigName: "notify::expand-tabs", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand-tabs", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand-tabs", ...args: any[]): void
    connect(sigName: "notify::inverted", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverted", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inverted", ...args: any[]): void
    connect(sigName: "notify::is-overflowing", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-overflowing", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-overflowing", ...args: any[]): void
    connect(sigName: "notify::start-action-widget", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-action-widget", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-action-widget", ...args: any[]): void
    connect(sigName: "notify::tabs-revealed", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-revealed", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs-revealed", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: TabBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A tab bar for [class`TabView]`.
 * 
 * <picture>
 *   <source srcset="tab-bar-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="tab-bar.png" alt="tab-bar">
 * </picture>
 * 
 * The `AdwTabBar` widget is a tab bar that can be used with conjunction with
 * `AdwTabView`.
 * 
 * `AdwTabBar` can autohide and can optionally contain action widgets on both
 * sides of the tabs.
 * 
 * When there's not enough space to show all the tabs, `AdwTabBar` will scroll
 * them. Pinned tabs always stay visible and aren't a part of the scrollable
 * area.
 * 
 * ## CSS nodes
 * 
 * `AdwTabBar` has a single CSS node with name `tabbar`.
 * @class 
 */
class TabBar extends Gtk.Widget {

    // Own properties of Adw-1.Adw.TabBar

    static name: string
    static $gtype: GObject.GType<TabBar>

    // Constructors of Adw-1.Adw.TabBar

    constructor(config?: TabBar.ConstructorProperties) 
    /**
     * Creates a new `AdwTabBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwTabBar`.
     * @constructor 
     */
    static new(): TabBar
    _init(config?: TabBar.ConstructorProperties): void
}

module TabPage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.TabPage

        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * The icon of the page.
         * 
         * [class`TabBar]` displays the icon next to the title.
         * 
         * It will not show the icon if [property`TabPage:`loading] is set to `TRUE`,
         * or if the page is pinned and [propertyTabPage:indicator-icon] is set.
         */
        icon?: Gio.Icon | null
        /**
         * Whether the indicator icon is activatable.
         * 
         * If set to `TRUE`, [signal`TabView:`:indicator-activated] will be emitted
         * when the indicator icon is clicked.
         * 
         * If [property`TabPage:`indicator-icon] is not set, does nothing.
         */
        indicator_activatable?: boolean | null
        /**
         * An indicator icon for the page.
         * 
         * A common use case is an audio or camera indicator in a web browser.
         * 
         * [class`TabBar]` will show it at the beginning of the tab, alongside icon
         * representing [property`TabPage:`icon] or loading spinner.
         * 
         * If the page is pinned, the indicator will be shown instead of icon or
         * spinner.
         * 
         * If [property`TabPage:`indicator-activatable] is set to `TRUE`, the
         * indicator icon can act as a button.
         */
        indicator_icon?: Gio.Icon | null
        /**
         * Whether the page is loading.
         * 
         * If set to `TRUE`, [class`TabBar]` will display a spinner in place of icon.
         * 
         * If the page is pinned and [property`TabPage:`indicator-icon] is set, the
         * loading status will not be visible.
         */
        loading?: boolean | null
        /**
         * Whether the page needs attention.
         * 
         * [class`TabBar]` will display a glow under the tab representing the page if
         * set to `TRUE`. If the tab is not visible, the corresponding edge of the tab
         * bar will be highlighted.
         */
        needs_attention?: boolean | null
        /**
         * The parent page of the page.
         * 
         * See [method`TabView`.add_page] and [method`TabView`.close_page].
         */
        parent?: TabPage | null
        /**
         * The title of the page.
         * 
         * [class`TabBar]` will display it in the center of the tab unless it's pinned,
         * and will use it as a tooltip unless [property`TabPage:`tooltip] is set.
         */
        title?: string | null
        /**
         * The tooltip of the page.
         * 
         * The tooltip can be marked up with the Pango text markup language.
         * 
         * If not set, [class`TabBar]` will use [property`TabPage:`title] as a tooltip
         * instead.
         */
        tooltip?: string | null
    }

}

interface TabPage {

    // Own properties of Adw-1.Adw.TabPage

    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * The icon of the page.
     * 
     * [class`TabBar]` displays the icon next to the title.
     * 
     * It will not show the icon if [property`TabPage:`loading] is set to `TRUE`,
     * or if the page is pinned and [propertyTabPage:indicator-icon] is set.
     */
    icon: Gio.Icon
    /**
     * Whether the indicator icon is activatable.
     * 
     * If set to `TRUE`, [signal`TabView:`:indicator-activated] will be emitted
     * when the indicator icon is clicked.
     * 
     * If [property`TabPage:`indicator-icon] is not set, does nothing.
     */
    indicator_activatable: boolean
    /**
     * An indicator icon for the page.
     * 
     * A common use case is an audio or camera indicator in a web browser.
     * 
     * [class`TabBar]` will show it at the beginning of the tab, alongside icon
     * representing [property`TabPage:`icon] or loading spinner.
     * 
     * If the page is pinned, the indicator will be shown instead of icon or
     * spinner.
     * 
     * If [property`TabPage:`indicator-activatable] is set to `TRUE`, the
     * indicator icon can act as a button.
     */
    indicator_icon: Gio.Icon
    /**
     * Whether the page is loading.
     * 
     * If set to `TRUE`, [class`TabBar]` will display a spinner in place of icon.
     * 
     * If the page is pinned and [property`TabPage:`indicator-icon] is set, the
     * loading status will not be visible.
     */
    loading: boolean
    /**
     * Whether the page needs attention.
     * 
     * [class`TabBar]` will display a glow under the tab representing the page if
     * set to `TRUE`. If the tab is not visible, the corresponding edge of the tab
     * bar will be highlighted.
     */
    needs_attention: boolean
    /**
     * The parent page of the page.
     * 
     * See [method`TabView`.add_page] and [method`TabView`.close_page].
     */
    readonly parent: TabPage
    /**
     * Whether the page is pinned.
     * 
     * See [method`TabView`.set_page_pinned].
     */
    readonly pinned: boolean
    /**
     * Whether the page is selected.
     */
    readonly selected: boolean
    /**
     * The title of the page.
     * 
     * [class`TabBar]` will display it in the center of the tab unless it's pinned,
     * and will use it as a tooltip unless [property`TabPage:`tooltip] is set.
     */
    title: string
    /**
     * The tooltip of the page.
     * 
     * The tooltip can be marked up with the Pango text markup language.
     * 
     * If not set, [class`TabBar]` will use [property`TabPage:`title] as a tooltip
     * instead.
     */
    tooltip: string

    // Owm methods of Adw-1.Adw.TabPage

    /**
     * Gets the child of `self`.
     */
    get_child(): Gtk.Widget
    /**
     * Gets the icon of `self`.
     */
    get_icon(): Gio.Icon | null
    /**
     * Gets whether the indicator of `self` is activatable.
     */
    get_indicator_activatable(): boolean
    /**
     * Gets the indicator icon of `self`.
     */
    get_indicator_icon(): Gio.Icon | null
    /**
     * Gets whether `self` is loading.
     */
    get_loading(): boolean
    /**
     * Gets whether `self` needs attention.
     */
    get_needs_attention(): boolean
    /**
     * Gets the parent page of `self`.
     */
    get_parent(): TabPage | null
    /**
     * Gets whether `self` is pinned.
     */
    get_pinned(): boolean
    /**
     * Gets whether `self` is selected.
     */
    get_selected(): boolean
    /**
     * Gets the title of `self`.
     */
    get_title(): string
    /**
     * Gets the tooltip of `self`.
     */
    get_tooltip(): string | null
    /**
     * Sets the icon of `self`.
     * @param icon the icon of `self`
     */
    set_icon(icon: Gio.Icon | null): void
    /**
     * Sets whether the indicator of `self` is activatable.
     * @param activatable whether the indicator is activatable
     */
    set_indicator_activatable(activatable: boolean): void
    /**
     * Sets the indicator icon of `self`.
     * @param indicator_icon the indicator icon of `self`
     */
    set_indicator_icon(indicator_icon: Gio.Icon | null): void
    /**
     * Sets wether `self` is loading.
     * @param loading whether `self` is loading
     */
    set_loading(loading: boolean): void
    /**
     * Sets whether `self` needs attention.
     * @param needs_attention whether `self` needs attention
     */
    set_needs_attention(needs_attention: boolean): void
    /**
     * Sets the title of `self`.
     * @param title the title of `self`
     */
    set_title(title: string): void
    /**
     * Sets the tooltip of `self`.
     * @param tooltip the tooltip of `self`
     */
    set_tooltip(tooltip: string): void

    // Class property signals of Adw-1.Adw.TabPage

    connect(sigName: "notify::child", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::indicator-activatable", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indicator-activatable", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indicator-activatable", ...args: any[]): void
    connect(sigName: "notify::indicator-icon", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indicator-icon", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indicator-icon", ...args: any[]): void
    connect(sigName: "notify::loading", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loading", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loading", ...args: any[]): void
    connect(sigName: "notify::needs-attention", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::needs-attention", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::needs-attention", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pinned", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pinned", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pinned", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: TabPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An auxiliary class used by [class`TabView]`.
 * @class 
 */
class TabPage extends GObject.Object {

    // Own properties of Adw-1.Adw.TabPage

    static name: string
    static $gtype: GObject.GType<TabPage>

    // Constructors of Adw-1.Adw.TabPage

    constructor(config?: TabPage.ConstructorProperties) 
    _init(config?: TabPage.ConstructorProperties): void
}

module TabView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close-page`
     */
    interface ClosePageSignalCallback {
        ($obj: TabView, page: TabPage): boolean
    }

    /**
     * Signal callback interface for `create-window`
     */
    interface CreateWindowSignalCallback {
        ($obj: TabView): TabView | null
    }

    /**
     * Signal callback interface for `indicator-activated`
     */
    interface IndicatorActivatedSignalCallback {
        ($obj: TabView, page: TabPage): void
    }

    /**
     * Signal callback interface for `page-attached`
     */
    interface PageAttachedSignalCallback {
        ($obj: TabView, page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `page-detached`
     */
    interface PageDetachedSignalCallback {
        ($obj: TabView, page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `page-reordered`
     */
    interface PageReorderedSignalCallback {
        ($obj: TabView, page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `setup-menu`
     */
    interface SetupMenuSignalCallback {
        ($obj: TabView, page: TabPage | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.TabView

        /**
         * Default page icon.
         * 
         * If a page doesn't provide its own icon via [property`TabPage:`icon], a
         * default icon may be used instead for contexts where having an icon is
         * necessary.
         * 
         * [class`TabBar]` will use default icon for pinned tabs in case the page is
         * not loading, doesn't have an icon and an indicator. Default icon is never
         * used for tabs that aren't pinned.
         * 
         * By default, the `adw-tab-icon-missing-symbolic` icon is used.
         */
        default_icon?: Gio.Icon | null
        /**
         * Tab context menu model.
         * 
         * When a context menu is shown for a tab, it will be constructed from the
         * provided menu model. Use the [signal`TabView:`:setup-menu] signal to set up
         * the menu actions for the particular tab.
         */
        menu_model?: Gio.MenuModel | null
        /**
         * The currently selected page.
         */
        selected_page?: TabPage | null
    }

}

interface TabView extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.TabView

    /**
     * Default page icon.
     * 
     * If a page doesn't provide its own icon via [property`TabPage:`icon], a
     * default icon may be used instead for contexts where having an icon is
     * necessary.
     * 
     * [class`TabBar]` will use default icon for pinned tabs in case the page is
     * not loading, doesn't have an icon and an indicator. Default icon is never
     * used for tabs that aren't pinned.
     * 
     * By default, the `adw-tab-icon-missing-symbolic` icon is used.
     */
    default_icon: Gio.Icon
    /**
     * Whether a page is being transferred.
     * 
     * This property will be set to `TRUE` when a drag-n-drop tab transfer starts
     * on any `AdwTabView`, and to `FALSE` after it ends.
     * 
     * During the transfer, children cannot receive pointer input and a tab can
     * be safely dropped on the tab view.
     */
    readonly is_transferring_page: boolean
    /**
     * Tab context menu model.
     * 
     * When a context menu is shown for a tab, it will be constructed from the
     * provided menu model. Use the [signal`TabView:`:setup-menu] signal to set up
     * the menu actions for the particular tab.
     */
    menu_model: Gio.MenuModel
    /**
     * The number of pages in the tab view.
     */
    readonly n_pages: number
    /**
     * The number of pinned pages in the tab view.
     * 
     * See [method`TabView`.set_page_pinned].
     */
    readonly n_pinned_pages: number
    /**
     * A selection model with the tab view's pages.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the selected
     * page.
     */
    readonly pages: Gtk.SelectionModel
    /**
     * The currently selected page.
     */
    selected_page: TabPage

    // Owm methods of Adw-1.Adw.TabView

    /**
     * Adds `child` to `self` with `parent` as the parent.
     * 
     * This function can be used to automatically position new pages, and to select
     * the correct page when this page is closed while being selected (see
     * [method`TabView`.close_page]).
     * 
     * If `parent` is `NULL`, this function is equivalent to [method`TabView`.append].
     * @param child a widget to add
     * @param parent a parent page for `child`
     */
    add_page(child: Gtk.Widget, parent: TabPage | null): TabPage
    /**
     * Inserts `child` as the last non-pinned page.
     * @param child a widget to add
     */
    append(child: Gtk.Widget): TabPage
    /**
     * Inserts `child` as the last pinned page.
     * @param child a widget to add
     */
    append_pinned(child: Gtk.Widget): TabPage
    /**
     * Requests to close all pages other than `page`.
     * @param page a page of `self`
     */
    close_other_pages(page: TabPage): void
    /**
     * Requests to close `page`.
     * 
     * Calling this function will result in the [signal`TabView:`:close-page] signal
     * being emitted for `page`. Closing the page can then be confirmed or
     * denied via [method`TabView`.close_page_finish].
     * 
     * If the page is waiting for a [method`TabView`.close_page_finish] call, this
     * function will do nothing.
     * 
     * The default handler for [signal`TabView:`:close-page] will immediately confirm
     * closing the page if it's non-pinned, or reject it if it's pinned. This
     * behavior can be changed by registering your own handler for that signal.
     * 
     * If `page` was selected, another page will be selected instead:
     * 
     * If the [property`TabPage:`parent] value is `NULL`, the next page will be
     * selected when possible, or if the page was already last, the previous page
     * will be selected instead.
     * 
     * If it's not `NULL`, the previous page will be selected if it's a descendant
     * (possibly indirect) of the parent. If both the previous page and the parent
     * are pinned, the parent will be selected instead.
     * @param page a page of `self`
     */
    close_page(page: TabPage): void
    /**
     * Completes a [method`TabView`.close_page] call for `page`.
     * 
     * If `confirm` is `TRUE`, `page` will be closed. If it's `FALSE`, it will be
     * reverted to its previous state and [method`TabView`.close_page] can be called
     * for it again.
     * 
     * This function should not be called unless a custom handler for
     * [signal`TabView:`:close-page] is used.
     * @param page a page of `self`
     * @param confirm whether to confirm or deny closing `page`
     */
    close_page_finish(page: TabPage, confirm: boolean): void
    /**
     * Requests to close all pages after `page`.
     * @param page a page of `self`
     */
    close_pages_after(page: TabPage): void
    /**
     * Requests to close all pages before `page`.
     * @param page a page of `self`
     */
    close_pages_before(page: TabPage): void
    /**
     * Gets the default icon of `self`.
     */
    get_default_icon(): Gio.Icon
    /**
     * Whether a page is being transferred.
     */
    get_is_transferring_page(): boolean
    /**
     * Gets the tab context menu model for `self`.
     */
    get_menu_model(): Gio.MenuModel | null
    /**
     * Gets the number of pages in `self`.
     */
    get_n_pages(): number
    /**
     * Gets the number of pinned pages in `self`.
     */
    get_n_pinned_pages(): number
    /**
     * Gets the [class`TabPage]` representing the child at `position`.
     * @param position the index of the page in `self,` starting from 0
     */
    get_nth_page(position: number): TabPage
    /**
     * Gets the [class`TabPage]` object representing `child`.
     * @param child a child in `self`
     */
    get_page(child: Gtk.Widget): TabPage
    /**
     * Finds the position of `page` in `self,` starting from 0.
     * @param page a page of `self`
     */
    get_page_position(page: TabPage): number
    /**
     * Returns a [iface`Gio`.ListModel] that contains the pages of `self`.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the selected
     * page.
     */
    get_pages(): Gtk.SelectionModel
    /**
     * Gets the currently selected page in `self`.
     */
    get_selected_page(): TabPage | null
    /**
     * Inserts a non-pinned page at `position`.
     * 
     * It's an error to try to insert a page before a pinned page, in that case
     * [method`TabView`.insert_pinned] should be used instead.
     * @param child a widget to add
     * @param position the position to add `child` at, starting from 0
     */
    insert(child: Gtk.Widget, position: number): TabPage
    /**
     * Inserts a pinned page at `position`.
     * 
     * It's an error to try to insert a pinned page after a non-pinned page, in
     * that case [method`TabView`.insert] should be used instead.
     * @param child a widget to add
     * @param position the position to add `child` at, starting from 0
     */
    insert_pinned(child: Gtk.Widget, position: number): TabPage
    /**
     * Inserts `child` as the first non-pinned page.
     * @param child a widget to add
     */
    prepend(child: Gtk.Widget): TabPage
    /**
     * Inserts `child` as the first pinned page.
     * @param child a widget to add
     */
    prepend_pinned(child: Gtk.Widget): TabPage
    /**
     * Reorders `page` to before its previous page if possible.
     * @param page a page of `self`
     */
    reorder_backward(page: TabPage): boolean
    /**
     * Reorders `page` to the first possible position.
     * @param page a page of `self`
     */
    reorder_first(page: TabPage): boolean
    /**
     * Reorders `page` to after its next page if possible.
     * @param page a page of `self`
     */
    reorder_forward(page: TabPage): boolean
    /**
     * Reorders `page` to the last possible position.
     * @param page a page of `self`
     */
    reorder_last(page: TabPage): boolean
    /**
     * Reorders `page` to `position`.
     * 
     * It's a programmer error to try to reorder a pinned page after a non-pinned
     * one, or a non-pinned page before a pinned one.
     * @param page a page of `self`
     * @param position the position to insert the page at, starting at 0
     */
    reorder_page(page: TabPage, position: number): boolean
    /**
     * Selects the page after the currently selected page.
     * 
     * If the last page was already selected, this function does nothing.
     */
    select_next_page(): boolean
    /**
     * Selects the page before the currently selected page.
     * 
     * If the first page was already selected, this function does nothing.
     */
    select_previous_page(): boolean
    /**
     * Sets the default page icon for `self`.
     * @param default_icon the default icon
     */
    set_default_icon(default_icon: Gio.Icon): void
    /**
     * Sets the tab context menu model for `self`.
     * @param menu_model a menu model
     */
    set_menu_model(menu_model: Gio.MenuModel | null): void
    /**
     * Pins or unpins `page`.
     * 
     * Pinned pages are guaranteed to be placed before all non-pinned pages; at any
     * given moment the first [property`TabView:`n-pinned-pages] pages in `self` are
     * guaranteed to be pinned.
     * 
     * When a page is pinned or unpinned, it's automatically reordered: pinning a
     * page moves it after other pinned pages; unpinning a page moves it before
     * other non-pinned pages.
     * 
     * Pinned pages can still be reordered between each other.
     * 
     * [class`TabBar]` will display pinned pages in a compact form, never showing the
     * title or close button, and only showing a single icon, selected in the
     * following order:
     * 
     * 1. [property`TabPage:`indicator-icon]
     * 2. A spinner if [property`TabPage:`loading] is `TRUE`
     * 3. [property`TabPage:`icon]
     * 4. [property`TabView:`default-icon]
     * 
     * Pinned pages cannot be closed by default, see [signal`TabView:`:close-page]
     * for how to override that behavior.
     * 
     * Changes the value of the [property`TabPage:`pinned] property.
     * @param page a page of `self`
     * @param pinned whether `page` should be pinned
     */
    set_page_pinned(page: TabPage, pinned: boolean): void
    /**
     * Sets the currently selected page in `self`.
     * @param selected_page a page in `self`
     */
    set_selected_page(selected_page: TabPage): void
    /**
     * Transfers `page` from `self` to `other_view`.
     * 
     * The `page` object will be reused.
     * 
     * It's a programmer error to try to insert a pinned page after a non-pinned
     * one, or a non-pinned page before a pinned one.
     * @param page a page of `self`
     * @param other_view the tab view to transfer the page to
     * @param position the position to insert the page at, starting at 0
     */
    transfer_page(page: TabPage, other_view: TabView, position: number): void

    // Own signals of Adw-1.Adw.TabView

    connect(sigName: "close-page", callback: TabView.ClosePageSignalCallback): number
    connect_after(sigName: "close-page", callback: TabView.ClosePageSignalCallback): number
    emit(sigName: "close-page", page: TabPage, ...args: any[]): void
    connect(sigName: "create-window", callback: TabView.CreateWindowSignalCallback): number
    connect_after(sigName: "create-window", callback: TabView.CreateWindowSignalCallback): number
    emit(sigName: "create-window", ...args: any[]): void
    connect(sigName: "indicator-activated", callback: TabView.IndicatorActivatedSignalCallback): number
    connect_after(sigName: "indicator-activated", callback: TabView.IndicatorActivatedSignalCallback): number
    emit(sigName: "indicator-activated", page: TabPage, ...args: any[]): void
    connect(sigName: "page-attached", callback: TabView.PageAttachedSignalCallback): number
    connect_after(sigName: "page-attached", callback: TabView.PageAttachedSignalCallback): number
    emit(sigName: "page-attached", page: TabPage, position: number, ...args: any[]): void
    connect(sigName: "page-detached", callback: TabView.PageDetachedSignalCallback): number
    connect_after(sigName: "page-detached", callback: TabView.PageDetachedSignalCallback): number
    emit(sigName: "page-detached", page: TabPage, position: number, ...args: any[]): void
    connect(sigName: "page-reordered", callback: TabView.PageReorderedSignalCallback): number
    connect_after(sigName: "page-reordered", callback: TabView.PageReorderedSignalCallback): number
    emit(sigName: "page-reordered", page: TabPage, position: number, ...args: any[]): void
    connect(sigName: "setup-menu", callback: TabView.SetupMenuSignalCallback): number
    connect_after(sigName: "setup-menu", callback: TabView.SetupMenuSignalCallback): number
    emit(sigName: "setup-menu", page: TabPage | null, ...args: any[]): void

    // Class property signals of Adw-1.Adw.TabView

    connect(sigName: "notify::default-icon", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icon", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-icon", ...args: any[]): void
    connect(sigName: "notify::is-transferring-page", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-transferring-page", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-transferring-page", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::n-pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-pages", ...args: any[]): void
    connect(sigName: "notify::n-pinned-pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pinned-pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-pinned-pages", ...args: any[]): void
    connect(sigName: "notify::pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pages", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pages", ...args: any[]): void
    connect(sigName: "notify::selected-page", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-page", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected-page", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: TabView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A dynamic tabbed container.
 * 
 * `AdwTabView` is a container which shows one child at a time. While it
 * provides keyboard shortcuts for switching between pages, it does not provide
 * a visible tab bar and relies on external widgets for that, such as
 * [class`TabBar]`.
 * 
 * `AdwTabView` maintains a [class`TabPage]` object for each page, which holds
 * additional per-page properties. You can obtain the `AdwTabPage` for a page
 * with [method`TabView`.get_page], and as the return value for
 * [method`TabView`.append] and other functions for adding children.
 * 
 * `AdwTabView` only aims to be useful for dynamic tabs in multi-window
 * document-based applications, such as web browsers, file managers, text
 * editors or terminals. It does not aim to replace [class`Gtk`.Notebook] for use
 * cases such as tabbed dialogs.
 * 
 * As such, it does not support disabling page reordering or detaching.
 * 
 * `AdwTabView` adds the following shortcuts in the managed scope:
 * 
 * * <kbd>Ctrl</kbd>+<kbd>Page Up</kbd> - switch to the previous page
 * * <kbd>Ctrl</kbd>+<kbd>Page Down</kbd> - switch to the next page
 * * <kbd>Ctrl</kbd>+<kbd>Home</kbd> - switch to the first page
 * * <kbd>Ctrl</kbd>+<kbd>End</kbd> - switch to the last page
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Up</kbd> - move the current page
 *     backward
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Down</kbd> - move the current
 *     page forward
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Home</kbd> - move the current page at
 *     the start
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>End</kbd> - move the current page at
 *      the end
 * * <kbd>Ctrl</kbd>+<kbd>Tab</kbd> - switch to the next page, with looping
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Tab</kbd> - switch to the previous
 *     page, with looping
 * * <kbd>Alt</kbd>+<kbd>1</kbd>⋯<kbd>9</kbd> - switch to pages 1-9
 * * <kbd>Alt</kbd>+<kbd>0</kbd> - switch to page 10
 * 
 * ## CSS nodes
 * 
 * `AdwTabView` has a main CSS node with the name `tabview`.
 * @class 
 */
class TabView extends Gtk.Widget {

    // Own properties of Adw-1.Adw.TabView

    static name: string
    static $gtype: GObject.GType<TabView>

    // Constructors of Adw-1.Adw.TabView

    constructor(config?: TabView.ConstructorProperties) 
    /**
     * Creates a new `AdwTabView`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwTabView`.
     * @constructor 
     */
    static new(): TabView
    _init(config?: TabView.ConstructorProperties): void
}

module TimedAnimation {

    // Constructor properties interface

    interface ConstructorProperties extends Animation.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.TimedAnimation

        /**
         * Whether the animation changes direction on every iteration.
         */
        alternate?: boolean | null
        /**
         * Duration of the animation, in milliseconds.
         * 
         * Describes how much time the animation will take.
         * 
         * If the animation repeats more than once, describes the duration of one
         * iteration.
         */
        duration?: number | null
        /**
         * Easing function used in the animation.
         * 
         * Describes the curve the value is interpolated on.
         * 
         * See [enum`Easing]` for the description of specific easing functions.
         */
        easing?: Easing | null
        /**
         * Number of times the animation will play.
         * 
         * If set to 0, the animation will repeat endlessly.
         */
        repeat_count?: number | null
        /**
         * Whether the animation plays backwards.
         */
        reverse?: boolean | null
        /**
         * The value to animate from.
         * 
         * The animation will start at this value and end at
         * [property`TimedAnimation:`value-to].
         * 
         * If [property`TimedAnimation:`reverse] is `TRUE`, the animation will end at
         * this value instead.
         */
        value_from?: number | null
        /**
         * The value to animate to.
         * 
         * The animation will start at [property`TimedAnimation:`value-from] and end at
         * this value.
         * 
         * If [property`TimedAnimation:`reverse] is `TRUE`, the animation will start
         * at this value instead.
         */
        value_to?: number | null
    }

}

interface TimedAnimation {

    // Own properties of Adw-1.Adw.TimedAnimation

    /**
     * Whether the animation changes direction on every iteration.
     */
    alternate: boolean
    /**
     * Duration of the animation, in milliseconds.
     * 
     * Describes how much time the animation will take.
     * 
     * If the animation repeats more than once, describes the duration of one
     * iteration.
     */
    duration: number
    /**
     * Easing function used in the animation.
     * 
     * Describes the curve the value is interpolated on.
     * 
     * See [enum`Easing]` for the description of specific easing functions.
     */
    easing: Easing
    /**
     * Number of times the animation will play.
     * 
     * If set to 0, the animation will repeat endlessly.
     */
    repeat_count: number
    /**
     * Whether the animation plays backwards.
     */
    reverse: boolean
    /**
     * The value to animate from.
     * 
     * The animation will start at this value and end at
     * [property`TimedAnimation:`value-to].
     * 
     * If [property`TimedAnimation:`reverse] is `TRUE`, the animation will end at
     * this value instead.
     */
    value_from: number
    /**
     * The value to animate to.
     * 
     * The animation will start at [property`TimedAnimation:`value-from] and end at
     * this value.
     * 
     * If [property`TimedAnimation:`reverse] is `TRUE`, the animation will start
     * at this value instead.
     */
    value_to: number

    // Owm methods of Adw-1.Adw.TimedAnimation

    /**
     * Gets whether `self` changes direction on every iteration.
     */
    get_alternate(): boolean
    /**
     * Gets the duration of `self`.
     */
    get_duration(): number
    /**
     * Gets the easing function `self` uses.
     */
    get_easing(): Easing
    /**
     * Gets the number of times `self` will play.
     */
    get_repeat_count(): number
    /**
     * Gets whether `self` plays backwards.
     */
    get_reverse(): boolean
    /**
     * Gets the value `self` will animate from.
     */
    get_value_from(): number
    /**
     * Gets the value `self` will animate to.
     */
    get_value_to(): number
    /**
     * Sets whether `self` changes direction on every iteration.
     * @param alternate whether `self` alternates
     */
    set_alternate(alternate: boolean): void
    /**
     * Sets the duration of `self`.
     * 
     * If the animation repeats more than once, sets the duration of one iteration.
     * @param duration the duration to use, in milliseconds
     */
    set_duration(duration: number): void
    /**
     * Sets the easing function `self` will use.
     * 
     * See [enum`Easing]` for the description of specific easing functions.
     * @param easing the easing function to use
     */
    set_easing(easing: Easing): void
    /**
     * Sets the number of times `self` will play.
     * 
     * If set to 0, `self` will repeat endlessly.
     * @param repeat_count the number of times `self` will play
     */
    set_repeat_count(repeat_count: number): void
    /**
     * Sets whether `self` plays backwards.
     * @param reverse whether `self` plays backwards
     */
    set_reverse(reverse: boolean): void
    /**
     * Sets the value `self` will animate from.
     * @param value the value to animate from
     */
    set_value_from(value: number): void
    /**
     * Sets the value `self` will animate to.
     * @param value the value to animate to
     */
    set_value_to(value: number): void

    // Class property signals of Adw-1.Adw.TimedAnimation

    connect(sigName: "notify::alternate", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alternate", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alternate", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::easing", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::easing", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::easing", ...args: any[]): void
    connect(sigName: "notify::repeat-count", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-count", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repeat-count", ...args: any[]): void
    connect(sigName: "notify::reverse", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reverse", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reverse", ...args: any[]): void
    connect(sigName: "notify::value-from", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-from", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-from", ...args: any[]): void
    connect(sigName: "notify::value-to", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-to", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-to", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::widget", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: TimedAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A time-based [class`Animation]`.
 * 
 * `AdwTimedAnimation` implements a simple animation interpolating the given
 * value from [property`TimedAnimation:`value-from] to
 * [property`TimedAnimation:`value-to] over
 * [property`TimedAnimation:`duration] milliseconds using the curve described by
 * [property`TimedAnimation:`easing].
 * 
 * If [property`TimedAnimation:`reverse] is set to `TRUE`, `AdwTimedAnimation`
 * will instead animate from [property`TimedAnimation:`value-to] to
 * [property`TimedAnimation:`value-from], and the easing curve will be inverted.
 * 
 * The animation can repeat a certain amount of times, or endlessly, depending
 * on the [property`TimedAnimation:`repeat-count] value. If
 * [property`TimedAnimation:`alternate] is set to `TRUE`, it will also change the
 * direction every other iteration.
 * @class 
 */
class TimedAnimation extends Animation {

    // Own properties of Adw-1.Adw.TimedAnimation

    static name: string
    static $gtype: GObject.GType<TimedAnimation>

    // Constructors of Adw-1.Adw.TimedAnimation

    constructor(config?: TimedAnimation.ConstructorProperties) 
    /**
     * Creates a new `AdwTimedAnimation` on `widget` to animate `target` from `from`
     * to `to`.
     * @constructor 
     * @param widget a widget to create animation on
     * @param from a value to animate from
     * @param to a value to animate to
     * @param duration a duration for the animation
     * @param target a target value to animate
     */
    constructor(widget: Gtk.Widget, from: number, to: number, duration: number, target: AnimationTarget) 
    /**
     * Creates a new `AdwTimedAnimation` on `widget` to animate `target` from `from`
     * to `to`.
     * @constructor 
     * @param widget a widget to create animation on
     * @param from a value to animate from
     * @param to a value to animate to
     * @param duration a duration for the animation
     * @param target a target value to animate
     */
    static new(widget: Gtk.Widget, from: number, to: number, duration: number, target: AnimationTarget): TimedAnimation
    _init(config?: TimedAnimation.ConstructorProperties): void
}

module Toast {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dismissed`
     */
    interface DismissedSignalCallback {
        ($obj: Toast): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Toast

        /**
         * The name of the associated action.
         * 
         * It will be activated when clicking the button.
         * 
         * See [property`Toast:`action-target].
         */
        action_name?: string | null
        /**
         * The parameter for action invocations.
         * 
         * See [property`Toast:`action-name].
         */
        action_target?: GLib.Variant | null
        /**
         * The label to show on the button.
         * 
         * Underlines in the button text can be used to indicate a mnemonic.
         * 
         * If set to `NULL`, the button won't be shown.
         * 
         * See [property`Toast:`action-name].
         */
        button_label?: string | null
        /**
         * The priority of the toast.
         * 
         * Priority controls how the toast behaves when another toast is already
         * being displayed.
         * 
         * If the priority is `ADW_TOAST_PRIORITY_NORMAL`, the toast will be queued.
         * 
         * If the priority is `ADW_TOAST_PRIORITY_HIGH`, the toast will be displayed
         * immediately, pushing the previous toast into the queue instead.
         */
        priority?: ToastPriority | null
        /**
         * The timeout of the toast, in seconds.
         * 
         * If timeout is 0, the toast is displayed indefinitely until manually
         * dismissed.
         * 
         * Toasts cannot disappear while being hovered, pressed (on touchscreen), or
         * have keyboard focus inside them.
         */
        timeout?: number | null
        /**
         * The title of the toast.
         * 
         * The title can be marked up with the Pango text markup language.
         */
        title?: string | null
    }

}

interface Toast {

    // Own properties of Adw-1.Adw.Toast

    /**
     * The name of the associated action.
     * 
     * It will be activated when clicking the button.
     * 
     * See [property`Toast:`action-target].
     */
    action_name: string
    /**
     * The parameter for action invocations.
     * 
     * See [property`Toast:`action-name].
     */
    action_target: GLib.Variant
    /**
     * The label to show on the button.
     * 
     * Underlines in the button text can be used to indicate a mnemonic.
     * 
     * If set to `NULL`, the button won't be shown.
     * 
     * See [property`Toast:`action-name].
     */
    button_label: string
    /**
     * The priority of the toast.
     * 
     * Priority controls how the toast behaves when another toast is already
     * being displayed.
     * 
     * If the priority is `ADW_TOAST_PRIORITY_NORMAL`, the toast will be queued.
     * 
     * If the priority is `ADW_TOAST_PRIORITY_HIGH`, the toast will be displayed
     * immediately, pushing the previous toast into the queue instead.
     */
    priority: ToastPriority
    /**
     * The timeout of the toast, in seconds.
     * 
     * If timeout is 0, the toast is displayed indefinitely until manually
     * dismissed.
     * 
     * Toasts cannot disappear while being hovered, pressed (on touchscreen), or
     * have keyboard focus inside them.
     */
    timeout: number
    /**
     * The title of the toast.
     * 
     * The title can be marked up with the Pango text markup language.
     */
    title: string

    // Owm methods of Adw-1.Adw.Toast

    /**
     * Dismisses `self`.
     */
    dismiss(): void
    /**
     * Gets the name of the associated action.
     */
    get_action_name(): string | null
    /**
     * Gets the parameter for action invocations.
     */
    get_action_target_value(): GLib.Variant | null
    /**
     * Gets the label to show on the button.
     */
    get_button_label(): string | null
    /**
     * Gets priority for `self`.
     */
    get_priority(): ToastPriority
    /**
     * Gets timeout for `self`.
     */
    get_timeout(): number
    /**
     * Gets the title that will be displayed on the toast.
     */
    get_title(): string
    /**
     * Sets the name of the associated action.
     * @param action_name the action name
     */
    set_action_name(action_name: string | null): void
    /**
     * Sets the parameter for action invocations.
     * 
     * If the `action_target` variant has a floating reference this function
     * will sink it.
     * @param action_target the action target
     */
    set_action_target_value(action_target: GLib.Variant | null): void
    /**
     * Sets the label to show on the button.
     * 
     * It set to `NULL`, the button won't be shown.
     * @param button_label a button label
     */
    set_button_label(button_label: string | null): void
    /**
     * Sets the action name and its parameter.
     * 
     * `detailed_action_name` is a string in the format accepted by
     * [func`Gio`.Action.parse_detailed_name].
     * @param detailed_action_name the detailed action name
     */
    set_detailed_action_name(detailed_action_name: string | null): void
    /**
     * Sets priority for `self`.
     * 
     * Priority controls how the toast behaves when another toast is already
     * being displayed.
     * 
     * If `priority` is `ADW_TOAST_PRIORITY_NORMAL`, the toast will be queued.
     * 
     * If `priority` is `ADW_TOAST_PRIORITY_HIGH`, the toast will be displayed immediately,
     * pushing the previous toast into the queue instead.
     * @param priority the priority
     */
    set_priority(priority: ToastPriority): void
    /**
     * Sets timeout for `self`.
     * 
     * If `timeout` is 0, the toast is displayed indefinitely until manually
     * dismissed.
     * 
     * Toasts cannot disappear while being hovered, pressed (on touchscreen), or
     * have keyboard focus inside them.
     * @param timeout the timeout
     */
    set_timeout(timeout: number): void
    /**
     * Sets the title that will be displayed on the toast.
     * @param title a title
     */
    set_title(title: string): void

    // Own signals of Adw-1.Adw.Toast

    connect(sigName: "dismissed", callback: Toast.DismissedSignalCallback): number
    connect_after(sigName: "dismissed", callback: Toast.DismissedSignalCallback): number
    emit(sigName: "dismissed", ...args: any[]): void

    // Class property signals of Adw-1.Adw.Toast

    connect(sigName: "notify::action-name", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::button-label", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::button-label", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::button-label", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Toast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A helper object for [class`ToastOverlay]`.
 * 
 * Toasts are meant to be passed into [method`ToastOverlay`.add_toast] as
 * follows:
 * 
 * ```c
 * adw_toast_overlay_add_toast (overlay, adw_toast_new (_("Simple Toast")));
 * ```
 * 
 * <picture>
 *   <source srcset="toast-simple-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="toast-simple.png" alt="toast-simple">
 * </picture>
 * 
 * Toasts always have a close button. They emit the [signal`Toast:`:dismissed]
 * signal when disappearing.
 * 
 * [property`Toast:`timeout] determines how long the toast stays on screen, while
 * [property`Toast:`priority] determines how it behaves if another toast is
 * already being displayed.
 * 
 * ## Actions
 * 
 * Toasts can have one button on them, with a label and an attached
 * [iface`Gio`.Action].
 * 
 * ```c
 * AdwToast *toast = adw_toast_new (_("Toast with Action"));
 * 
 * adw_toast_set_button_label (toast, _("_Example"));
 * adw_toast_set_action_name (toast, "win.example");
 * 
 * adw_toast_overlay_add_toast (overlay, toast);
 * ```
 * 
 * <picture>
 *   <source srcset="toast-action-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="toast-action.png" alt="toast-action">
 * </picture>
 * 
 * ## Modifying toasts
 * 
 * Toasts can be modified after they have been shown. For this, an `AdwToast`
 * reference must be kept around while the toast is visible.
 * 
 * A common use case for this is using toasts as undo prompts that stack with
 * each other, allowing to batch undo the last deleted items:
 * 
 * ```c
 * 
 * static void
 * toast_undo_cb (GtkWidget  *sender,
 *                const char *action,
 *                GVariant   *param)
 * {
 *   // Undo the deletion
 * }
 * 
 * static void
 * dismissed_cb (MyWindow *self)
 * {
 *   self->undo_toast = NULL;
 * 
 *   // Permanently delete the items
 * }
 * 
 * static void
 * delete_item (MyWindow *self,
 *              MyItem   *item)
 * {
 *   g_autofree char *title = NULL;
 *   int n_items;
 * 
 *   // Mark the item as waiting for deletion
 *   n_items = ... // The number of waiting items
 * 
 *   if (!self->undo_toast) {
 *     title = g_strdup_printf (_("‘%s’ deleted"), ...);
 * 
 *     self->undo_toast = adw_toast_new (title);
 * 
 *     adw_toast_set_priority (self->undo_toast, ADW_TOAST_PRIORITY_HIGH);
 *     adw_toast_set_button_label (self->undo_toast, _("_Undo"));
 *     adw_toast_set_action_name (self->undo_toast, "toast.undo");
 * 
 *     g_signal_connect_swapped (self->undo_toast, "dismissed",
 *                               G_CALLBACK (dismissed_cb), self);
 * 
 *     adw_toast_overlay_add_toast (self->toast_overlay, self->undo_toast);
 * 
 *     return;
 *   }
 * 
 *   title =
 *     g_strdup_printf (ngettext ("<span font_features='tnum=1'>%d</span> item deleted",
 *                                "<span font_features='tnum=1'>%d</span> items deleted",
 *                                n_items), n_items);
 * 
 *   adw_toast_set_title (self->undo_toast, title);
 * }
 * 
 * static void
 * my_window_class_init (MyWindowClass *klass)
 * {
 *   GtkWidgetClass *widget_class = GTK_WIDGET_CLASS (klass);
 * 
 *   gtk_widget_class_install_action (widget_class, "toast.undo", NULL, toast_undo_cb);
 * }
 * ```
 * 
 * <picture>
 *   <source srcset="toast-undo-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="toast-undo.png" alt="toast-undo">
 * </picture>
 * @class 
 */
class Toast extends GObject.Object {

    // Own properties of Adw-1.Adw.Toast

    static name: string
    static $gtype: GObject.GType<Toast>

    // Constructors of Adw-1.Adw.Toast

    constructor(config?: Toast.ConstructorProperties) 
    /**
     * Creates a new `AdwToast`.
     * 
     * The toast will use `title` as its title.
     * 
     * `title` can be marked up with the Pango text markup language.
     * @constructor 
     * @param title the title to be displayed
     */
    constructor(title: string) 
    /**
     * Creates a new `AdwToast`.
     * 
     * The toast will use `title` as its title.
     * 
     * `title` can be marked up with the Pango text markup language.
     * @constructor 
     * @param title the title to be displayed
     */
    static new(title: string): Toast
    _init(config?: Toast.ConstructorProperties): void
}

module ToastOverlay {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ToastOverlay

        /**
         * The child widget.
         */
        child?: Gtk.Widget | null
    }

}

interface ToastOverlay extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ToastOverlay

    /**
     * The child widget.
     */
    child: Gtk.Widget

    // Owm methods of Adw-1.Adw.ToastOverlay

    /**
     * Displays `toast`.
     * 
     * Only one toast can be shown at a time; if a toast is already being displayed,
     * either `toast` or the original toast will be placed in a queue, depending on
     * the priority of `toast`. See [property`Toast:`priority].
     * @param toast a toast
     */
    add_toast(toast: Toast): void
    /**
     * Gets the child widget of `self`.
     */
    get_child(): Gtk.Widget | null
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    set_child(child: Gtk.Widget | null): void

    // Class property signals of Adw-1.Adw.ToastOverlay

    connect(sigName: "notify::child", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ToastOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget showing toasts above its content.
 * 
 * <picture>
 *   <source srcset="toast-overlay-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="toast-overlay.png" alt="toast-overlay">
 * </picture>
 * 
 * Toasts can be shown with [method`ToastOverlay`.add_toast].
 * 
 * See [class`Toast]` for details.
 * 
 * ## CSS nodes
 * 
 * ```
 * toastoverlay
 * ├── [child]
 * ├── toast
 * ┊   ├── label.heading
 *     ├── [button]
 *     ╰── button.circular.flat
 * ```
 * 
 * `AdwToastOverlay`'s CSS node is called `toastoverlay`. It contains the child,
 * as well as zero or more `toast` subnodes.
 * 
 * Each of the `toast` nodes contains a `label` subnode with the `.heading`
 * style class, optionally a `button` subnode, and another `button` subnode with
 * `.circular` and `.flat` style classes.
 * 
 * ## Accessibility
 * 
 * `AdwToastOverlay` uses the `GTK_ACCESSIBLE_ROLE_TAB_GROUP` role.
 * @class 
 */
class ToastOverlay extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ToastOverlay

    static name: string
    static $gtype: GObject.GType<ToastOverlay>

    // Constructors of Adw-1.Adw.ToastOverlay

    constructor(config?: ToastOverlay.ConstructorProperties) 
    /**
     * Creates a new `AdwToastOverlay`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwToastOverlay`.
     * @constructor 
     */
    static new(): ToastOverlay
    _init(config?: ToastOverlay.ConstructorProperties): void
}

module ViewStack {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewStack

        /**
         * Whether the stack allocates the same width for all children.
         * 
         * If it's `FALSE`, the stack may change width when a different child becomes
         * visible.
         */
        hhomogeneous?: boolean | null
        /**
         * Whether the stack allocates the same height for all children.
         * 
         * If it's `FALSE`, the stack may change height when a different child becomes
         * visible.
         */
        vhomogeneous?: boolean | null
        /**
         * The widget currently visible in the stack.
         */
        visible_child?: Gtk.Widget | null
        /**
         * The name of the widget currently visible in the stack.
         * 
         * See [property`ViewStack:`visible-child].
         */
        visible_child_name?: string | null
    }

}

interface ViewStack extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ViewStack

    /**
     * Whether the stack allocates the same width for all children.
     * 
     * If it's `FALSE`, the stack may change width when a different child becomes
     * visible.
     */
    hhomogeneous: boolean
    /**
     * A selection model with the stack's pages.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the visible
     * page.
     */
    readonly pages: Gtk.SelectionModel
    /**
     * Whether the stack allocates the same height for all children.
     * 
     * If it's `FALSE`, the stack may change height when a different child becomes
     * visible.
     */
    vhomogeneous: boolean
    /**
     * The widget currently visible in the stack.
     */
    visible_child: Gtk.Widget
    /**
     * The name of the widget currently visible in the stack.
     * 
     * See [property`ViewStack:`visible-child].
     */
    visible_child_name: string

    // Owm methods of Adw-1.Adw.ViewStack

    /**
     * Adds a child to `self`.
     * @param child the widget to add
     */
    add(child: Gtk.Widget): ViewStackPage
    /**
     * Adds a child to `self`.
     * 
     * The child is identified by the `name`.
     * @param child the widget to add
     * @param name the name for `child`
     */
    add_named(child: Gtk.Widget, name: string | null): ViewStackPage
    /**
     * Adds a child to `self`.
     * 
     * The child is identified by the `name`. The `title` will be used by
     * [class`ViewSwitcher]` to represent `child,` so it should be short.
     * @param child the widget to add
     * @param name the name for `child`
     * @param title a human-readable title for `child`
     */
    add_titled(child: Gtk.Widget, name: string | null, title: string): ViewStackPage
    /**
     * Finds the child with `name` in `self`.
     * @param name the name of the child to find
     */
    get_child_by_name(name: string): Gtk.Widget | null
    /**
     * Gets whether `self` is horizontally homogeneous.
     */
    get_hhomogeneous(): boolean
    /**
     * Gets the [class`ViewStackPage]` object for `child`.
     * @param child a child of `self`
     */
    get_page(child: Gtk.Widget): ViewStackPage
    /**
     * Returns a [iface`Gio`.ListModel] that contains the pages of the stack.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the visible
     * page.
     */
    get_pages(): Gtk.SelectionModel
    /**
     * Gets whether `self` is vertically homogeneous.
     */
    get_vhomogeneous(): boolean
    /**
     * Gets the currently visible child of `self,` .
     */
    get_visible_child(): Gtk.Widget | null
    /**
     * Returns the name of the currently visible child of `self`.
     */
    get_visible_child_name(): string | null
    /**
     * Removes a child widget from `self`.
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Sets `self` to be horizontally homogeneous or not.
     * @param hhomogeneous whether to make `self` horizontally homogeneous
     */
    set_hhomogeneous(hhomogeneous: boolean): void
    /**
     * Sets `self` to be vertically homogeneous or not.
     * @param vhomogeneous whether to make `self` vertically homogeneous
     */
    set_vhomogeneous(vhomogeneous: boolean): void
    /**
     * Makes `child` the visible child of `self`.
     * @param child a child of `self`
     */
    set_visible_child(child: Gtk.Widget): void
    /**
     * Makes the child with `name` visible.
     * @param name the name of the child
     */
    set_visible_child_name(name: string): void

    // Class property signals of Adw-1.Adw.ViewStack

    connect(sigName: "notify::hhomogeneous", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hhomogeneous", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hhomogeneous", ...args: any[]): void
    connect(sigName: "notify::pages", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pages", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pages", ...args: any[]): void
    connect(sigName: "notify::vhomogeneous", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vhomogeneous", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vhomogeneous", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
    connect(sigName: "notify::visible-child-name", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child-name", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child-name", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ViewStack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A view container for [class`ViewSwitcher]`.
 * 
 * `AdwViewStack` is a container which only shows one page at a time.
 * It is typically used to hold an application's main views.
 * 
 * It doesn't provide a way to transition between pages.
 * Instead, a separate widget such as [class`ViewSwitcher]` can be used with
 * `AdwViewStack` to provide this functionality.
 * 
 * `AdwViewStack` pages can have a title, an icon, an attention request, and a
 * numbered badge that [class`ViewSwitcher]` will use to let users identify which
 * page is which. Set them using the [property`ViewStackPage:`title],
 * [property`ViewStackPage:`icon-name],
 * [property`ViewStackPage:`needs-attention], and
 * [property`ViewStackPage:`badge-number] properties.
 * 
 * Unlike [class`Gtk`.Stack], transitions between views are not animated.
 * 
 * `AdwViewStack` maintains a [class`ViewStackPage]` object for each added child,
 * which holds additional per-child properties. You obtain the
 * [class`ViewStackPage]` for a child with [method`ViewStack`.get_page] and you
 * can obtain a [iface`Gtk`.SelectionModel] containing all the pages with
 * [method`ViewStack`.get_pages].
 * 
 * ## AdwViewStack as GtkBuildable
 * 
 * To set child-specific properties in a .ui file, create
 * [class`ViewStackPage]` objects explicitly, and set the child widget as a
 * property on it:
 * 
 * ```xml
 *   <object class="AdwViewStack" id="stack">
 *     <child>
 *       <object class="AdwViewStackPage">
 *         <property name="name">overview</property>
 *         <property name="title">Overview</property>
 *         <property name="child">
 *           <object class="AdwStatusPage">
 *             <property name="title">Welcome!</property>
 *           </object>
 *         </property>
 *       </object>
 *     </child>
 *   </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `AdwViewStack` has a single CSS node named `stack`.
 * @class 
 */
class ViewStack extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ViewStack

    static name: string
    static $gtype: GObject.GType<ViewStack>

    // Constructors of Adw-1.Adw.ViewStack

    constructor(config?: ViewStack.ConstructorProperties) 
    /**
     * Creates a new `AdwViewStack`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwViewStack`.
     * @constructor 
     */
    static new(): ViewStack
    _init(config?: ViewStack.ConstructorProperties): void
}

module ViewStackPage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewStackPage

        /**
         * A number associated with the page.
         * 
         * [class`ViewSwitcher]` can display it as a badge next to the page icon. It is
         * commonly used to display a number of unread items within the page.
         * 
         * It can be used together with [property`ViewStack{`age}:needs-attention].
         */
        badge_number?: number | null
        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * The icon name of the child page.
         */
        icon_name?: string | null
        /**
         * The name of the child page.
         */
        name?: string | null
        /**
         * Whether the page requires the user attention.
         * 
         * [class`ViewSwitcher]` will display it as a dot next to the page icon.
         */
        needs_attention?: boolean | null
        /**
         * The title of the child page.
         */
        title?: string | null
        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         */
        use_underline?: boolean | null
        /**
         * Whether this page is visible.
         * 
         * This is independent from the [property`Gtk`.Widget:visible] property of
         * [property`ViewStackPage:`child].
         */
        visible?: boolean | null
    }

}

interface ViewStackPage {

    // Own properties of Adw-1.Adw.ViewStackPage

    /**
     * A number associated with the page.
     * 
     * [class`ViewSwitcher]` can display it as a badge next to the page icon. It is
     * commonly used to display a number of unread items within the page.
     * 
     * It can be used together with [property`ViewStack{`age}:needs-attention].
     */
    badge_number: number
    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * The icon name of the child page.
     */
    icon_name: string
    /**
     * The name of the child page.
     */
    name: string
    /**
     * Whether the page requires the user attention.
     * 
     * [class`ViewSwitcher]` will display it as a dot next to the page icon.
     */
    needs_attention: boolean
    /**
     * The title of the child page.
     */
    title: string
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     */
    use_underline: boolean
    /**
     * Whether this page is visible.
     * 
     * This is independent from the [property`Gtk`.Widget:visible] property of
     * [property`ViewStackPage:`child].
     */
    visible: boolean

    // Owm methods of Adw-1.Adw.ViewStackPage

    /**
     * Gets the badge number for this page.
     */
    get_badge_number(): number
    /**
     * Gets the stack child to which `self` belongs.
     */
    get_child(): Gtk.Widget
    /**
     * Gets the icon name of the page.
     */
    get_icon_name(): string | null
    /**
     * Gets the name of the page.
     */
    get_name(): string | null
    /**
     * Gets whether the page is marked as “needs attention”.
     */
    get_needs_attention(): boolean
    /**
     * Gets the page title.
     */
    get_title(): string | null
    /**
     * Gets whether underlines in the page title indicate mnemonics.
     */
    get_use_underline(): boolean
    /**
     * Gets whether `self` is visible in its `AdwViewStack`.
     * 
     * This is independent from the [property`Gtk`.Widget:visible]
     * property of its widget.
     */
    get_visible(): boolean
    /**
     * Sets the badge number for this page.
     * @param badge_number the new value to set
     */
    set_badge_number(badge_number: number): void
    /**
     * Sets the icon name of the page.
     * @param icon_name the icon name
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the name of the page.
     * @param name the page name
     */
    set_name(name: string | null): void
    /**
     * Sets whether the page is marked as “needs attention”.
     * @param needs_attention the new value to set
     */
    set_needs_attention(needs_attention: boolean): void
    /**
     * Sets the page title.
     * @param title the page title
     */
    set_title(title: string | null): void
    /**
     * Sets whether underlines in the page title indicate mnemonics.
     * @param use_underline the new value to set
     */
    set_use_underline(use_underline: boolean): void
    /**
     * Sets whether `page` is visible in its `AdwViewStack`.
     * @param visible whether `self` is visible
     */
    set_visible(visible: boolean): void

    // Class property signals of Adw-1.Adw.ViewStackPage

    connect(sigName: "notify::badge-number", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::badge-number", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::badge-number", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::needs-attention", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::needs-attention", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::needs-attention", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewStackPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An auxiliary class used by [class`ViewStack]`.
 * @class 
 */
class ViewStackPage extends GObject.Object {

    // Own properties of Adw-1.Adw.ViewStackPage

    static name: string
    static $gtype: GObject.GType<ViewStackPage>

    // Constructors of Adw-1.Adw.ViewStackPage

    constructor(config?: ViewStackPage.ConstructorProperties) 
    _init(config?: ViewStackPage.ConstructorProperties): void
}

module ViewSwitcher {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewSwitcher

        /**
         * The policy to determine which mode to use.
         */
        policy?: ViewSwitcherPolicy | null
        /**
         * The stack the view switcher controls.
         */
        stack?: ViewStack | null
    }

}

interface ViewSwitcher extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ViewSwitcher

    /**
     * The policy to determine which mode to use.
     */
    policy: ViewSwitcherPolicy
    /**
     * The stack the view switcher controls.
     */
    stack: ViewStack

    // Owm methods of Adw-1.Adw.ViewSwitcher

    /**
     * Gets the policy of `self`.
     */
    get_policy(): ViewSwitcherPolicy
    /**
     * Gets the stack controlled by `self`.
     */
    get_stack(): ViewStack | null
    /**
     * Sets the policy of `self`.
     * @param policy the new policy
     */
    set_policy(policy: ViewSwitcherPolicy): void
    /**
     * Sets the stack controlled by `self`.
     * @param stack a stack
     */
    set_stack(stack: ViewStack | null): void

    // Class property signals of Adw-1.Adw.ViewSwitcher

    connect(sigName: "notify::policy", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::policy", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::policy", ...args: any[]): void
    connect(sigName: "notify::stack", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ViewSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An adaptive view switcher.
 * 
 * <picture>
 *   <source srcset="view-switcher-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="view-switcher.png" alt="view-switcher">
 * </picture>
 * 
 * An adaptive view switcher designed to switch between multiple views
 * contained in a [class`ViewStack]` in a similar fashion to
 * [class`Gtk`.StackSwitcher].
 * 
 * `AdwViewSwitcher` buttons always have an icon and a label. They can be
 * displayed side by side, or icon on top of the label. This can be controlled
 * via the [property`ViewSwitcher:`policy] property.
 * 
 * Most applications should be using [class`ViewSwitcherBar]` and
 * [class`ViewSwitcherTitle]`.
 * 
 * ## CSS nodes
 * 
 * `AdwViewSwitcher` has a single CSS node with name `viewswitcher`. It can have
 * the style classes `.wide` and `.narrow`, matching its policy.
 * 
 * ## Accessibility
 * 
 * `AdwViewSwitcher` uses the `GTK_ACCESSIBLE_ROLE_TAB_LIST` role and uses the
 * `GTK_ACCESSIBLE_ROLE_TAB` for its buttons.
 * @class 
 */
class ViewSwitcher extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ViewSwitcher

    static name: string
    static $gtype: GObject.GType<ViewSwitcher>

    // Constructors of Adw-1.Adw.ViewSwitcher

    constructor(config?: ViewSwitcher.ConstructorProperties) 
    /**
     * Creates a new `AdwViewSwitcher`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwViewSwitcher`.
     * @constructor 
     */
    static new(): ViewSwitcher
    _init(config?: ViewSwitcher.ConstructorProperties): void
}

module ViewSwitcherBar {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewSwitcherBar

        /**
         * Whether the bar should be revealed or hidden.
         */
        reveal?: boolean | null
        /**
         * The stack the view switcher controls.
         */
        stack?: ViewStack | null
    }

}

interface ViewSwitcherBar extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ViewSwitcherBar

    /**
     * Whether the bar should be revealed or hidden.
     */
    reveal: boolean
    /**
     * The stack the view switcher controls.
     */
    stack: ViewStack

    // Owm methods of Adw-1.Adw.ViewSwitcherBar

    /**
     * Gets whether `self` should be revealed or hidden.
     */
    get_reveal(): boolean
    /**
     * Gets the stack controlled by `self`.
     */
    get_stack(): ViewStack | null
    /**
     * Sets whether `self` should be revealed or hidden.
     * @param reveal whether to reveal `self`
     */
    set_reveal(reveal: boolean): void
    /**
     * Sets the stack controlled by `self`.
     * @param stack a stack
     */
    set_stack(stack: ViewStack | null): void

    // Class property signals of Adw-1.Adw.ViewSwitcherBar

    connect(sigName: "notify::reveal", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal", ...args: any[]): void
    connect(sigName: "notify::stack", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ViewSwitcherBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A view switcher action bar.
 * 
 * <picture>
 *   <source srcset="view-switcher-bar-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="view-switcher-bar.png" alt="view-switcher-bar">
 * </picture>
 * 
 * An action bar letting you switch between multiple views contained in a
 * [class`ViewStack]`, via an [class`ViewSwitcher]`. It is designed to be put at
 * the bottom of a window and to be revealed only on really narrow windows, e.g.
 * on mobile phones. It can't be revealed if there are less than two pages.
 * 
 * `AdwViewSwitcherBar` is intended to be used together with
 * [class`ViewSwitcherTitle]`.
 * 
 * A common use case is to bind the [property`ViewSwitcherBar:`reveal] property
 * to [property`ViewSwitcherTitle:`title-visible] to automatically reveal the
 * view switcher bar when the title label is displayed in place of the view
 * switcher, as follows:
 * 
 * ```xml
 * <object class="GtkWindow">
 *   <child type="titlebar">
 *     <object class="AdwHeaderBar">
 *       <property name="centering-policy">strict</property>
 *       <child type="title">
 *         <object class="AdwViewSwitcherTitle" id="title">
 *           <property name="stack">stack</property>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 *   <child>
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="AdwViewStack" id="stack"/>
 *       </child>
 *       <child>
 *         <object class="AdwViewSwitcherBar">
 *           <property name="stack">stack</property>
 *           <binding name="reveal">
 *             <lookup name="title-visible">title</lookup>
 *           </binding>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `AdwViewSwitcherBar` has a single CSS node with name` viewswitcherbar`.
 * @class 
 */
class ViewSwitcherBar extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ViewSwitcherBar

    static name: string
    static $gtype: GObject.GType<ViewSwitcherBar>

    // Constructors of Adw-1.Adw.ViewSwitcherBar

    constructor(config?: ViewSwitcherBar.ConstructorProperties) 
    /**
     * Creates a new `AdwViewSwitcherBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwViewSwitcherBar`.
     * @constructor 
     */
    static new(): ViewSwitcherBar
    _init(config?: ViewSwitcherBar.ConstructorProperties): void
}

module ViewSwitcherTitle {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewSwitcherTitle

        /**
         * The stack the view switcher controls.
         */
        stack?: ViewStack | null
        /**
         * The subtitle to display.
         * 
         * The subtitle should give a user additional details.
         */
        subtitle?: string | null
        /**
         * The title to display.
         * 
         * The title should give a user additional details. A good title should not
         * include the application name.
         */
        title?: string | null
        /**
         * Whether the view switcher is enabled.
         * 
         * If it is disabled, the title will be displayed instead. This allows to
         * programmatically hide the view switcher even if it fits in the available
         * space.
         * 
         * This can be used e.g. to ensure the view switcher is hidden below a certain
         * window width, or any other constraint you find suitable.
         */
        view_switcher_enabled?: boolean | null
    }

}

interface ViewSwitcherTitle extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ViewSwitcherTitle

    /**
     * The stack the view switcher controls.
     */
    stack: ViewStack
    /**
     * The subtitle to display.
     * 
     * The subtitle should give a user additional details.
     */
    subtitle: string
    /**
     * The title to display.
     * 
     * The title should give a user additional details. A good title should not
     * include the application name.
     */
    title: string
    /**
     * Whether the title is currently visible.
     * 
     * If the title is visible, it means the view switcher is hidden an it may be
     * wanted to show an alternative switcher, e.g. a [class`ViewSwitcherBar]`.
     */
    readonly title_visible: boolean
    /**
     * Whether the view switcher is enabled.
     * 
     * If it is disabled, the title will be displayed instead. This allows to
     * programmatically hide the view switcher even if it fits in the available
     * space.
     * 
     * This can be used e.g. to ensure the view switcher is hidden below a certain
     * window width, or any other constraint you find suitable.
     */
    view_switcher_enabled: boolean

    // Owm methods of Adw-1.Adw.ViewSwitcherTitle

    /**
     * Gets the stack controlled by `self`.
     */
    get_stack(): ViewStack | null
    /**
     * Gets the subtitle of `self`.
     */
    get_subtitle(): string
    /**
     * Gets the title of `self`.
     */
    get_title(): string
    /**
     * Gets whether the title of `self` is currently visible.
     */
    get_title_visible(): boolean
    /**
     * Gets whether `self'`s view switcher is enabled.
     */
    get_view_switcher_enabled(): boolean
    /**
     * Sets the stack controlled by `self`.
     * @param stack a stack
     */
    set_stack(stack: ViewStack | null): void
    /**
     * Sets the subtitle of `self`.
     * @param subtitle a subtitle
     */
    set_subtitle(subtitle: string): void
    /**
     * Sets the title of `self`.
     * @param title a title
     */
    set_title(title: string): void
    /**
     * Sets whether `self'`s view switcher is enabled.
     * @param enabled whether the view switcher is enabled
     */
    set_view_switcher_enabled(enabled: boolean): void

    // Class property signals of Adw-1.Adw.ViewSwitcherTitle

    connect(sigName: "notify::stack", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-visible", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title-visible", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title-visible", ...args: any[]): void
    connect(sigName: "notify::view-switcher-enabled", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view-switcher-enabled", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view-switcher-enabled", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ViewSwitcherTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A view switcher title.
 * 
 * <picture>
 *   <source srcset="view-switcher-title-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="view-switcher-title.png" alt="view-switcher-title">
 * </picture>
 * 
 * A widget letting you switch between multiple views contained by a
 * [class`ViewStack]` via an [class`ViewSwitcher]`.
 * 
 * It is designed to be used as the title widget of a [class`HeaderBar]`, and
 * will display the window's title when the window is too narrow to fit the view
 * switcher e.g. on mobile phones, or if there are less than two views.
 * 
 * In order to center the title in narrow windows, the header bar should have
 * [property`HeaderBar:`centering-policy] set to
 * `ADW_CENTERING_POLICY_STRICT`.
 * 
 * `AdwViewSwitcherTitle` is intended to be used together with
 * [class`ViewSwitcherBar]`.
 * 
 * A common use case is to bind the [property`ViewSwitcherBar:`reveal] property
 * to [property`ViewSwitcherTitle:`title-visible] to automatically reveal the
 * view switcher bar when the title label is displayed in place of the view
 * switcher, as follows:
 * 
 * ```xml
 * <object class="GtkWindow">
 *   <child type="titlebar">
 *     <object class="AdwHeaderBar">
 *       <property name="centering-policy">strict</property>
 *       <child type="title">
 *         <object class="AdwViewSwitcherTitle" id="title">
 *           <property name="stack">stack</property>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 *   <child>
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="AdwViewStack" id="stack"/>
 *       </child>
 *       <child>
 *         <object class="AdwViewSwitcherBar">
 *           <property name="stack">stack</property>
 *           <binding name="reveal">
 *             <lookup name="title-visible">title</lookup>
 *           </binding>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `AdwViewSwitcherTitle` has a single CSS node with name `viewswitchertitle`.
 * @class 
 */
class ViewSwitcherTitle extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ViewSwitcherTitle

    static name: string
    static $gtype: GObject.GType<ViewSwitcherTitle>

    // Constructors of Adw-1.Adw.ViewSwitcherTitle

    constructor(config?: ViewSwitcherTitle.ConstructorProperties) 
    /**
     * Creates a new `AdwViewSwitcherTitle`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwViewSwitcherTitle`.
     * @constructor 
     */
    static new(): ViewSwitcherTitle
    _init(config?: ViewSwitcherTitle.ConstructorProperties): void
}

module Window {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Native.ConstructorProperties, Gtk.Root.ConstructorProperties, Gtk.ShortcutManager.ConstructorProperties, Gtk.Window.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Window

        /**
         * The content widget.
         */
        content?: Gtk.Widget | null
    }

}

interface Window extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {

    // Own properties of Adw-1.Adw.Window

    /**
     * The content widget.
     */
    content: Gtk.Widget

    // Own fields of Adw-1.Adw.Window

    parent_instance: Gtk.Window & Gtk.Widget & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Adw-1.Adw.Window

    /**
     * Gets the content widget of `self`.
     * 
     * This method should always be used instead of [method`Gtk`.Window.get_child].
     */
    get_content(): Gtk.Widget | null
    /**
     * Sets the content widget of `self`.
     * 
     * This method should always be used instead of [method`Gtk`.Window.set_child].
     * @param content the content widget
     */
    set_content(content: Gtk.Widget | null): void

    // Class property signals of Adw-1.Adw.Window

    connect(sigName: "notify::content", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-widget", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::focus-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-widget", ...args: any[]): void
    connect(sigName: "notify::fullscreened", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreened", ...args: any[]): void
    connect(sigName: "notify::handle-menubar-accel", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-menubar-accel", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-menubar-accel", ...args: any[]): void
    connect(sigName: "notify::hide-on-close", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-on-close", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::titlebar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::titlebar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::titlebar", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A freeform window.
 * 
 * <picture>
 *   <source srcset="window-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="window.png" alt="window">
 * </picture>
 * 
 * The `AdwWindow` widget is a subclass of [class`Gtk`.Window] which has no
 * titlebar area. It means [class`Gtk`.HeaderBar] can be used as follows:
 * 
 * ```xml
 * <object class="AdwWindow">
 *   <property name="content">
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="GtkHeaderBar"/>
 *       </child>
 *       <child>
 *         <!-- ... -->
 *       </child>
 *     </object>
 *   </property>
 * </object>
 * ```
 * 
 * Using [method`Gtk`.Window.get_titlebar] and [method`Gtk`.Window.set_titlebar]
 * is not supported and will result in a crash.
 * @class 
 */
class Window extends Gtk.Window {

    // Own properties of Adw-1.Adw.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Adw-1.Adw.Window

    constructor(config?: Window.ConstructorProperties) 
    /**
     * Creates a new `AdwWindow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwWindow`.
     * @constructor 
     */
    static new(): Window
    _init(config?: Window.ConstructorProperties): void
}

module WindowTitle {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.WindowTitle

        /**
         * The subtitle to display.
         * 
         * The subtitle should give a user additional details.
         */
        subtitle?: string | null
        /**
         * The title to display.
         * 
         * The title typically identifies the current view or content item, and
         * generally does not use the application name.
         */
        title?: string | null
    }

}

interface WindowTitle extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.WindowTitle

    /**
     * The subtitle to display.
     * 
     * The subtitle should give a user additional details.
     */
    subtitle: string
    /**
     * The title to display.
     * 
     * The title typically identifies the current view or content item, and
     * generally does not use the application name.
     */
    title: string

    // Owm methods of Adw-1.Adw.WindowTitle

    /**
     * Gets the subtitle of `self`.
     */
    get_subtitle(): string
    /**
     * Gets the title of `self`.
     */
    get_title(): string
    /**
     * Sets the subtitle of `self`.
     * @param subtitle a subtitle
     */
    set_subtitle(subtitle: string): void
    /**
     * Sets the title of `self`.
     * @param title a title
     */
    set_title(title: string): void

    // Class property signals of Adw-1.Adw.WindowTitle

    connect(sigName: "notify::subtitle", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: WindowTitle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A helper widget for setting a window's title and subtitle.
 * 
 * <picture>
 *   <source srcset="window-title-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="window-title.png" alt="window-title">
 * </picture>
 * 
 * `AdwWindowTitle` shows a title and subtitle. It's intended to be used as the
 * title child of [class`Gtk`.HeaderBar] or [class`HeaderBar]`.
 * 
 * ## CSS nodes
 * 
 * `AdwWindowTitle` has a single CSS node with name `windowtitle`.
 * @class 
 */
class WindowTitle extends Gtk.Widget {

    // Own properties of Adw-1.Adw.WindowTitle

    static name: string
    static $gtype: GObject.GType<WindowTitle>

    // Constructors of Adw-1.Adw.WindowTitle

    constructor(config?: WindowTitle.ConstructorProperties) 
    /**
     * Creates a new `AdwWindowTitle`.
     * @constructor 
     * @param title a title
     * @param subtitle a subtitle
     */
    constructor(title: string, subtitle: string) 
    /**
     * Creates a new `AdwWindowTitle`.
     * @constructor 
     * @param title a title
     * @param subtitle a subtitle
     */
    static new(title: string, subtitle: string): WindowTitle
    _init(config?: WindowTitle.ConstructorProperties): void
}

interface ActionRowClass {

    // Own fields of Adw-1.Adw.ActionRowClass

    /**
     * The parent class
     * @field 
     */
    parent_class: PreferencesRowClass
    activate: (self: ActionRow) => void
}

abstract class ActionRowClass {

    // Own properties of Adw-1.Adw.ActionRowClass

    static name: string
}

interface AnimationClass {
}

abstract class AnimationClass {

    // Own properties of Adw-1.Adw.AnimationClass

    static name: string
}

interface AnimationTargetClass {
}

abstract class AnimationTargetClass {

    // Own properties of Adw-1.Adw.AnimationTargetClass

    static name: string
}

interface ApplicationClass {

    // Own fields of Adw-1.Adw.ApplicationClass

    /**
     * The parent class
     * @field 
     */
    parent_class: Gtk.ApplicationClass
}

abstract class ApplicationClass {

    // Own properties of Adw-1.Adw.ApplicationClass

    static name: string
}

interface ApplicationWindowClass {

    // Own fields of Adw-1.Adw.ApplicationWindowClass

    parent_class: Gtk.ApplicationWindowClass
}

abstract class ApplicationWindowClass {

    // Own properties of Adw-1.Adw.ApplicationWindowClass

    static name: string
}

interface AvatarClass {

    // Own fields of Adw-1.Adw.AvatarClass

    parent_class: Gtk.WidgetClass
}

abstract class AvatarClass {

    // Own properties of Adw-1.Adw.AvatarClass

    static name: string
}

interface BinClass {

    // Own fields of Adw-1.Adw.BinClass

    parent_class: Gtk.WidgetClass
}

abstract class BinClass {

    // Own properties of Adw-1.Adw.BinClass

    static name: string
}

interface ButtonContentClass {

    // Own fields of Adw-1.Adw.ButtonContentClass

    parent_class: Gtk.WidgetClass
}

abstract class ButtonContentClass {

    // Own properties of Adw-1.Adw.ButtonContentClass

    static name: string
}

interface CallbackAnimationTargetClass {
}

abstract class CallbackAnimationTargetClass {

    // Own properties of Adw-1.Adw.CallbackAnimationTargetClass

    static name: string
}

interface CarouselClass {

    // Own fields of Adw-1.Adw.CarouselClass

    parent_class: Gtk.WidgetClass
}

abstract class CarouselClass {

    // Own properties of Adw-1.Adw.CarouselClass

    static name: string
}

interface CarouselIndicatorDotsClass {

    // Own fields of Adw-1.Adw.CarouselIndicatorDotsClass

    parent_class: Gtk.WidgetClass
}

abstract class CarouselIndicatorDotsClass {

    // Own properties of Adw-1.Adw.CarouselIndicatorDotsClass

    static name: string
}

interface CarouselIndicatorLinesClass {

    // Own fields of Adw-1.Adw.CarouselIndicatorLinesClass

    parent_class: Gtk.WidgetClass
}

abstract class CarouselIndicatorLinesClass {

    // Own properties of Adw-1.Adw.CarouselIndicatorLinesClass

    static name: string
}

interface ClampClass {

    // Own fields of Adw-1.Adw.ClampClass

    parent_class: Gtk.WidgetClass
}

abstract class ClampClass {

    // Own properties of Adw-1.Adw.ClampClass

    static name: string
}

interface ClampLayoutClass {

    // Own fields of Adw-1.Adw.ClampLayoutClass

    parent_class: Gtk.LayoutManagerClass
}

abstract class ClampLayoutClass {

    // Own properties of Adw-1.Adw.ClampLayoutClass

    static name: string
}

interface ClampScrollableClass {

    // Own fields of Adw-1.Adw.ClampScrollableClass

    parent_class: Gtk.WidgetClass
}

abstract class ClampScrollableClass {

    // Own properties of Adw-1.Adw.ClampScrollableClass

    static name: string
}

interface ComboRowClass {

    // Own fields of Adw-1.Adw.ComboRowClass

    /**
     * The parent class
     * @field 
     */
    parent_class: ActionRowClass
}

abstract class ComboRowClass {

    // Own properties of Adw-1.Adw.ComboRowClass

    static name: string
}

interface EnumListItemClass {

    // Own fields of Adw-1.Adw.EnumListItemClass

    parent_class: GObject.ObjectClass
}

abstract class EnumListItemClass {

    // Own properties of Adw-1.Adw.EnumListItemClass

    static name: string
}

interface EnumListModelClass {

    // Own fields of Adw-1.Adw.EnumListModelClass

    parent_class: GObject.ObjectClass
}

abstract class EnumListModelClass {

    // Own properties of Adw-1.Adw.EnumListModelClass

    static name: string
}

interface ExpanderRowClass {

    // Own fields of Adw-1.Adw.ExpanderRowClass

    /**
     * The parent class
     * @field 
     */
    parent_class: PreferencesRowClass
}

abstract class ExpanderRowClass {

    // Own properties of Adw-1.Adw.ExpanderRowClass

    static name: string
}

interface FlapClass {

    // Own fields of Adw-1.Adw.FlapClass

    parent_class: Gtk.WidgetClass
}

abstract class FlapClass {

    // Own properties of Adw-1.Adw.FlapClass

    static name: string
}

interface HeaderBarClass {

    // Own fields of Adw-1.Adw.HeaderBarClass

    parent_class: Gtk.WidgetClass
}

abstract class HeaderBarClass {

    // Own properties of Adw-1.Adw.HeaderBarClass

    static name: string
}

interface LeafletClass {

    // Own fields of Adw-1.Adw.LeafletClass

    parent_class: Gtk.WidgetClass
}

abstract class LeafletClass {

    // Own properties of Adw-1.Adw.LeafletClass

    static name: string
}

interface LeafletPageClass {

    // Own fields of Adw-1.Adw.LeafletPageClass

    parent_class: GObject.ObjectClass
}

abstract class LeafletPageClass {

    // Own properties of Adw-1.Adw.LeafletPageClass

    static name: string
}

interface PreferencesGroupClass {

    // Own fields of Adw-1.Adw.PreferencesGroupClass

    /**
     * The parent class
     * @field 
     */
    parent_class: Gtk.WidgetClass
}

abstract class PreferencesGroupClass {

    // Own properties of Adw-1.Adw.PreferencesGroupClass

    static name: string
}

interface PreferencesPageClass {

    // Own fields of Adw-1.Adw.PreferencesPageClass

    /**
     * The parent class
     * @field 
     */
    parent_class: Gtk.WidgetClass
}

abstract class PreferencesPageClass {

    // Own properties of Adw-1.Adw.PreferencesPageClass

    static name: string
}

interface PreferencesRowClass {

    // Own fields of Adw-1.Adw.PreferencesRowClass

    /**
     * The parent class
     * @field 
     */
    parent_class: Gtk.ListBoxRowClass
}

abstract class PreferencesRowClass {

    // Own properties of Adw-1.Adw.PreferencesRowClass

    static name: string
}

interface PreferencesWindowClass {

    // Own fields of Adw-1.Adw.PreferencesWindowClass

    /**
     * The parent class
     * @field 
     */
    parent_class: WindowClass
}

abstract class PreferencesWindowClass {

    // Own properties of Adw-1.Adw.PreferencesWindowClass

    static name: string
}

interface SplitButtonClass {

    // Own fields of Adw-1.Adw.SplitButtonClass

    parent_class: Gtk.WidgetClass
}

abstract class SplitButtonClass {

    // Own properties of Adw-1.Adw.SplitButtonClass

    static name: string
}

interface SpringAnimationClass {
}

abstract class SpringAnimationClass {

    // Own properties of Adw-1.Adw.SpringAnimationClass

    static name: string
}

interface SpringParams {

    // Owm methods of Adw-1.Adw.SpringParams

    /**
     * Gets the damping of `self`.
     */
    get_damping(): number
    /**
     * Gets the damping ratio of `self`.
     */
    get_damping_ratio(): number
    /**
     * Gets the mass of `self`.
     */
    get_mass(): number
    /**
     * Gets the stiffness of `self`.
     */
    get_stiffness(): number
    /**
     * Increases the reference count of `self`.
     */
    ref(): SpringParams
    /**
     * Decreases the reference count of `self`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
}

/**
 * Physical parameters of a spring for [class`SpringAnimation]`.
 * 
 * Any spring can be described by three parameters: mass, stiffness and damping.
 * 
 * An undamped spring will produce an oscillatory motion which will go on
 * forever.
 * 
 * The frequency and amplitude of the oscillations will be determined by the
 * stiffness (how "strong" the spring is) and its mass (how much "inertia" it
 * has).
 * 
 * If damping is larger than 0, the amplitude of that oscillating motion will
 * exponientally decrease over time. If that damping is strong enough that the
 * spring can't complete a full oscillation, it's called an overdamped spring.
 * 
 * If we the spring can oscillate, it's called an underdamped spring.
 * 
 * The value between these two behaviors is called critical damping; a
 * critically damped spring will comes to rest in the minimum possible time
 * without producing oscillations.
 * 
 * The damping can be replaced by damping ratio, which produces the following
 * springs:
 * 
 * * 0: an undamped spring.
 * * Between 0 and 1: an underdamped spring.
 * * 1: a critically damped spring.
 * * Larger than 1: an overdamped spring.
 * 
 * As such
 * @record 
 */
class SpringParams {

    // Own properties of Adw-1.Adw.SpringParams

    static name: string

    // Constructors of Adw-1.Adw.SpringParams

    /**
     * Creates a new `AdwSpringParams` from `mass,` `stiffness` and `damping_ratio`.
     * 
     * The damping value is calculated from `damping_ratio` and the other two
     * parameters.
     * 
     * * If `damping_ratio` is 0, the spring will not be damped and will oscillate
     *   endlessly.
     * * If `damping_ratio` is between 0 and 1, the spring is underdamped and will
     *   always overshoot.
     * * If `damping_ratio` is 1, the spring is critically damped and will reach its
     *   resting position the quickest way possible.
     * * If `damping_ratio` is larger than 1, the spring is overdamped and will reach
     *   its resting position faster than it can complete an oscillation.
     * 
     * [ctor`SpringParams`.new_full] allows to pass a raw damping value instead.
     * @constructor 
     * @param damping_ratio the damping ratio of the spring
     * @param mass the mass of the spring
     * @param stiffness the stiffness of the spring
     */
    constructor(damping_ratio: number, mass: number, stiffness: number) 
    /**
     * Creates a new `AdwSpringParams` from `mass,` `stiffness` and `damping_ratio`.
     * 
     * The damping value is calculated from `damping_ratio` and the other two
     * parameters.
     * 
     * * If `damping_ratio` is 0, the spring will not be damped and will oscillate
     *   endlessly.
     * * If `damping_ratio` is between 0 and 1, the spring is underdamped and will
     *   always overshoot.
     * * If `damping_ratio` is 1, the spring is critically damped and will reach its
     *   resting position the quickest way possible.
     * * If `damping_ratio` is larger than 1, the spring is overdamped and will reach
     *   its resting position faster than it can complete an oscillation.
     * 
     * [ctor`SpringParams`.new_full] allows to pass a raw damping value instead.
     * @constructor 
     * @param damping_ratio the damping ratio of the spring
     * @param mass the mass of the spring
     * @param stiffness the stiffness of the spring
     */
    static new(damping_ratio: number, mass: number, stiffness: number): SpringParams
    /**
     * Creates a new `AdwSpringParams` from `mass,` `stiffness` and `damping`.
     * 
     * See [ctor`SpringParams`.new] for a simplified constructor using damping ratio
     * instead of `damping`.
     * @constructor 
     * @param damping the damping of the spring
     * @param mass the mass of the spring
     * @param stiffness the stiffness of the spring
     */
    static new_full(damping: number, mass: number, stiffness: number): SpringParams
}

interface SqueezerClass {

    // Own fields of Adw-1.Adw.SqueezerClass

    parent_class: Gtk.WidgetClass
}

abstract class SqueezerClass {

    // Own properties of Adw-1.Adw.SqueezerClass

    static name: string
}

interface SqueezerPageClass {

    // Own fields of Adw-1.Adw.SqueezerPageClass

    parent_class: GObject.ObjectClass
}

abstract class SqueezerPageClass {

    // Own properties of Adw-1.Adw.SqueezerPageClass

    static name: string
}

interface StatusPageClass {

    // Own fields of Adw-1.Adw.StatusPageClass

    parent_class: Gtk.WidgetClass
}

abstract class StatusPageClass {

    // Own properties of Adw-1.Adw.StatusPageClass

    static name: string
}

interface StyleManagerClass {

    // Own fields of Adw-1.Adw.StyleManagerClass

    parent_class: GObject.ObjectClass
}

abstract class StyleManagerClass {

    // Own properties of Adw-1.Adw.StyleManagerClass

    static name: string
}

interface SwipeTrackerClass {

    // Own fields of Adw-1.Adw.SwipeTrackerClass

    parent_class: GObject.ObjectClass
}

abstract class SwipeTrackerClass {

    // Own properties of Adw-1.Adw.SwipeTrackerClass

    static name: string
}

interface SwipeableInterface {

    // Own fields of Adw-1.Adw.SwipeableInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    get_distance: (self: Swipeable) => number
    get_snap_points: (self: Swipeable) => number[]
    get_progress: (self: Swipeable) => number
    get_cancel_progress: (self: Swipeable) => number
    get_swipe_area: (self: Swipeable, navigation_direction: NavigationDirection, is_drag: boolean) => /* rect */ Gdk.Rectangle
}

/**
 * An interface for swipeable widgets.
 * @record 
 */
abstract class SwipeableInterface {

    // Own properties of Adw-1.Adw.SwipeableInterface

    static name: string
}

interface TabBarClass {

    // Own fields of Adw-1.Adw.TabBarClass

    parent_class: Gtk.WidgetClass
}

abstract class TabBarClass {

    // Own properties of Adw-1.Adw.TabBarClass

    static name: string
}

interface TabPageClass {

    // Own fields of Adw-1.Adw.TabPageClass

    parent_class: GObject.ObjectClass
}

abstract class TabPageClass {

    // Own properties of Adw-1.Adw.TabPageClass

    static name: string
}

interface TabViewClass {

    // Own fields of Adw-1.Adw.TabViewClass

    parent_class: Gtk.WidgetClass
}

abstract class TabViewClass {

    // Own properties of Adw-1.Adw.TabViewClass

    static name: string
}

interface TimedAnimationClass {
}

abstract class TimedAnimationClass {

    // Own properties of Adw-1.Adw.TimedAnimationClass

    static name: string
}

interface ToastClass {

    // Own fields of Adw-1.Adw.ToastClass

    parent_class: GObject.ObjectClass
}

abstract class ToastClass {

    // Own properties of Adw-1.Adw.ToastClass

    static name: string
}

interface ToastOverlayClass {

    // Own fields of Adw-1.Adw.ToastOverlayClass

    parent_class: Gtk.WidgetClass
}

abstract class ToastOverlayClass {

    // Own properties of Adw-1.Adw.ToastOverlayClass

    static name: string
}

interface ViewStackClass {

    // Own fields of Adw-1.Adw.ViewStackClass

    parent_class: Gtk.WidgetClass
}

abstract class ViewStackClass {

    // Own properties of Adw-1.Adw.ViewStackClass

    static name: string
}

interface ViewStackPageClass {

    // Own fields of Adw-1.Adw.ViewStackPageClass

    parent_class: GObject.ObjectClass
}

abstract class ViewStackPageClass {

    // Own properties of Adw-1.Adw.ViewStackPageClass

    static name: string
}

interface ViewSwitcherBarClass {

    // Own fields of Adw-1.Adw.ViewSwitcherBarClass

    parent_class: Gtk.WidgetClass
}

abstract class ViewSwitcherBarClass {

    // Own properties of Adw-1.Adw.ViewSwitcherBarClass

    static name: string
}

interface ViewSwitcherClass {

    // Own fields of Adw-1.Adw.ViewSwitcherClass

    parent_class: Gtk.WidgetClass
}

abstract class ViewSwitcherClass {

    // Own properties of Adw-1.Adw.ViewSwitcherClass

    static name: string
}

interface ViewSwitcherTitleClass {

    // Own fields of Adw-1.Adw.ViewSwitcherTitleClass

    parent_class: Gtk.WidgetClass
}

abstract class ViewSwitcherTitleClass {

    // Own properties of Adw-1.Adw.ViewSwitcherTitleClass

    static name: string
}

interface WindowClass {

    // Own fields of Adw-1.Adw.WindowClass

    parent_class: Gtk.WindowClass
}

abstract class WindowClass {

    // Own properties of Adw-1.Adw.WindowClass

    static name: string
}

interface WindowTitleClass {

    // Own fields of Adw-1.Adw.WindowTitleClass

    parent_class: Gtk.WidgetClass
}

abstract class WindowTitleClass {

    // Own properties of Adw-1.Adw.WindowTitleClass

    static name: string
}

}
export default Adw;