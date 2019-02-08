import { IConfig } from "@clarity-types/config";
import { State } from "@clarity-types/core";
import { config } from "./config";
import { activate, onTrigger, state, teardown } from "./core";
import { mapProperties } from "./utils";
export { version } from "./core";

export function start(customConfig?: IConfig) {
  if (state !== State.Activated) {
    mapProperties(customConfig, null, true, config);
    activate();
  }
}

export function stop() {
  teardown();
}

export function trigger(key: string) {
  onTrigger(key);
}
