const averageRates = {
    porsche: 0,
    fendt: 0,
    eicher: 0
}

const votesCounter = {
    porsche: 0,
    fendt: 0,
    eicher: 0
}

const textFeedbacks = {
    porsche: [],
    fendt: [],
    eicher: []
}

class Rating extends HTMLElement {
    constructor() {
        super();
        const sku = this.getAttribute("sku");
        const feedbackType = this.getAttribute("type");
    }
}