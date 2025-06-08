import { AppState } from "../AppState.js";
import { Jot } from "../models/jot.js";


class JotsService {

  marqueeQuantity() {
    const marqueeCards = AppState.jots;
    if (marqueeCards.length <= 15) {
      return marqueeCards;
    } else {
      return marqueeCards.slice(0, 15);
    }
  }

  createJot(formData) {
    console.log('+🦮create1', formData);
    const newJot = new Jot(formData);
    AppState.jots.push(newJot);
    console.log('+🦮JotsPush', AppState.jots);
    AppState.activeJot = newJot;
    // TODO SAVE ACTIVE CASE FILE 
  }

  setActiveJot(jotId) {
    const selectedJot = AppState.jots.find((jot) => jot.id === jotId);
    console.log('🦮set📝', selectedJot);
    AppState.activeJot = selectedJot;
  }

}

export const jotsService = new JotsService();