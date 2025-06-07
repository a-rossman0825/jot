import { AppState } from "../AppState.js";


class JotsService {

  numOfJots() {
    // console.log('🦮', AppState.jots.length);
    return AppState.jots.length;
  }

  marqueeQuantity() {
    const marqueeCards = AppState.jots;
    if (marqueeCards.length <= 15) {
      return marqueeCards;
    } else {
      return marqueeCards.slice(0, 15);
    }
  }

}

export const jotsService = new JotsService();