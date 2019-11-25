import "zone.js";
import * as singleSpa from "single-spa";
import { GlobalStateProvider } from "./globalStateProvider";
import { registerPartner } from "./partnerRegistration";

const globalStateProvider = new GlobalStateProvider();

async function init() {
  const loaders = [];

  loaders.push(
    registerPartner(
      "app3",
      "/",
      "/app3/entry.js",
      "/app3/store.js",
      globalStateProvider
    )
  );

  await Promise.all(loaders);

  singleSpa.start();
}

init();

setTimeout(() => {
  const action = {
    type: "PROGRAM_SELECTED",
    selectedProgram: {
      name: "Avengers",
      releasedOn: "April 2019",
      director: "The Russo Brothers"
    }
  };
  globalStateProvider.dispatch(action);
}, 5000);
