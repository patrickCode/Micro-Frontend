export class GlobalStateProvider {

    constructor() {
        this.stores = [];
    }

    registerStore(store) {
        this.stores.push(store);
    }

    dispatch(event) {
        console.log(this.stores);
        this.stores.forEach((s) => s.dispatch(event));
    }
}