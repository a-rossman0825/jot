import { AppState } from "../AppState.js";
import { Jot } from "../models/jot.js";
import { loadState, saveState } from "../utils/Store.js";


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
    // TODO SAVE ACTIVE CASE FILE ✅ 
    this.saveJots();
  }

  setActiveJot(jotId) {
    const selectedJot = AppState.jots.find((jot) => jot.id === jotId);
    // console.log('🦮set📝', selectedJot);
    AppState.activeJot = selectedJot;
  }

  saveActiveJot(newBody) {
    const jot = AppState.activeJot;
    jot.body = newBody;
    jot.updatedAt = new Date();

    console.log('💾 saving jotdate: ', jot);
    const foundJotIndex = AppState.jots.findIndex((foundJot) => foundJot.id == jot.id);
    
      if (foundJotIndex !== -1) {
        AppState.jots.splice(foundJotIndex, 1, jot);
      }
    this.saveJots();
  }

  deleteJot(jotId) {
    AppState.jots = AppState.jots.filter((jot) => jot.id !== jotId);
    if (AppState.activeJot && AppState.activeJot.id === jotId) {
      AppState.activeJot = null;
    }

    this.saveJots();
  }

  saveJots() {
    // console.log('💾 saving jots: ', AppState.jots)
    saveState('jots', AppState.jots);
  }

  loadJots() {
    const jots = loadState('jots', [Jot]);
    // console.log('🦮📤');
    AppState.jots = jots;
  }

}

export const jotsService = new JotsService();