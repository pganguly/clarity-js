import * as event from "@src/core/event";
import deserialize from "@src/data/deserialize";
import * as discover from "@src/dom/discover";
import * as mutation from "@src/dom/mutation";
import * as mouse from "@src/interactions/mouse";
import * as document from "@src/viewport/document";
import * as resize from "@src/viewport/resize";
import * as scroll from "@src/viewport/scroll";
import * as visibility from "@src/viewport/visibility";

window["DESERIALIZE"] = deserialize;

/* Initial discovery of DOM */
export function start(): void {
  event.reset();

  // DOM
  mutation.start();
  discover.start();

  // Viewport
  document.start();
  resize.start();
  visibility.start();
  scroll.start();

  // Pointer
  mouse.start();

}

export function end(): void {
  event.reset();
  mutation.end();
}

start();
