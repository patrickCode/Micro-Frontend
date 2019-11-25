import * as singleSpa from "single-spa";

export function hashPrefix(prefix) {
  return function(location) {
    return location.hash.startsWith(`#${prefix}`);
  };
}

export async function registerPartner(
  name,
  hash,
  appURL,
  storeURL,
  globalStateProvider
) {
  let storeModule = {},
    customProps = { globalStateProvider: globalStateProvider };

  try {
    storeModule = storeURL
      ? await SystemJS.import(storeURL)
      : { storeInstance: null };
  } catch (e) {
    console.log(`Could not load store of app ${name}.`, e);
  }

  if (storeModule.store && globalStateProvider) {
    customProps.store = storeModule.store;
    globalStateProvider.registerStore(storeModule.store);
  }
  singleSpa.registerApplication(
    name,
    () => SystemJS.import(appURL),
    hashPrefix(hash),
    customProps
  );
}
