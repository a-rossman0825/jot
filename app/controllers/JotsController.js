import { AppState } from "../AppState.js";
import { Jot } from "../models/jot.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class JotsController {

  constructor() {
    console.log('🎛️', 'Jots Controller Ready');
    console.table(AppState.jots);
    this.drawJotsMarquees();
    this.drawNumOfJots();
    AppState.on('jots', this.drawJotsList);
    AppState.on('jots', this.drawJotsMarquees);
    AppState.on('jots', this.drawNumOfJots);


    this.drawJotsList();
    // TODO CREATE OBSERVER FOR NEW NOTE DRAW ✅
  }
  // SECTION OBSERVER DRAW FUNCS 
  drawJotsList() {
    const jotCards = AppState.jots;
    let listContent = "";
    jotCards.forEach((card) => listContent += card.listTemplate);
    setHTML("jots-list", listContent);
    console.log('✏️🎛️Cards', jotCards);
  };

  drawNumOfJots() {
    let numOfJots = AppState.jots.length;
    let htmlContent = "";
    if (numOfJots == 1) {
      htmlContent = `${numOfJots} Jot`;
    } else {
      htmlContent = `${numOfJots} Jots`;
    }
    setHTML("jot-count", htmlContent);
    console.log('✏️🎛️drawNum', numOfJots);
  }
  // !SECTION 

  // SECTION MARQUEE DRAW FUNCS
  drawJotsMarquees() {
    const marqueeCards = jotsService.marqueeQuantity();
    let cardContent = "";

    marqueeCards.forEach((jot) => cardContent += jot.marqueeTemplate);
    let newCardContent = cardContent + AppState.marqueeBackground;

    setHTML('inactive-screen', newCardContent);
    console.log('✏️🎛️Marquee', marqueeCards.length);
    
  }

  // !SECTION 

  // SECTION ACTIVE JOT METHODS 
  setActiveJot(jotId) {
    console.log('🎛️set📝');
    jotsService.setActiveJot(jotId);
  }

  // !SECTION 

  // SECTION CREATE JOT METHODS 
  createNewJot() {
    event.preventDefault();
    console.log('✏️📝', 'createNewJot');
    const form = event.target;
    console.log('✏️🎯createNewForm', form);
    const formData = getFormData(form);
    jotsService.createJot(formData);
  }


  // !SECTION 
}