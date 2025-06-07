import { AppState } from "../AppState.js";
import { Jot } from "../models/jot.js";
import { jotsService } from "../services/JotsService.js";
import { setHTML } from "../utils/Writer.js";


export class JotsController {

  constructor() {
    console.log('🎛️', 'Jots Controller Ready');
    this.drawJotsList();
    // TODO CREATE OBSERVER FOR NEW NOTE DRAW 
  }

  drawJotsList() {
    const jotCards = AppState.jots;
    let listContent = "";
    jotCards.forEach((card) => listContent += card.listTemplate);
    setHTML("jots-list", listContent);
    // console.log('✏️🎛️', jotCards);
    this.drawNumOfJots();
    // console.log('✏️🎛️', 'drew num');
    this.drawJotsMarquees();
    
  };

  drawNumOfJots() {
    let numOfJots = jotsService.numOfJots();
    let htmlContent = "";
    if (numOfJots == 1) {
      htmlContent = `${numOfJots} Jot`;
    } else {
      htmlContent = `${numOfJots} Jots`;
    }
    setHTML("jot-count", htmlContent);
    // console.log('✏️🎛️', numOfJots);
  }

  drawJotsMarquees() {
    const marqueeCards = jotsService.marqueeQuantity();
    let cardContent = "";

    marqueeCards.forEach((jot) => cardContent += jot.marqueeTemplate);
    let newCardContent = cardContent += this.marqueeBackground;

    setHTML('inactive-screen', newCardContent);
    console.log('✏️🎛️', marqueeCards.length);
    
  }

  get marqueeBackground() {
    return `<div class="row mx-md-2">
            <div  class="col-12 rounded">
              <!-- STUB INACTIVE SCREEN BG IMAGE -->
              <div class="row justify-content-center mb-5 mt-5">
                <img src="./assets/img/developer.png" alt="Cartoon drawing of a developer at a computer screen sipping coffee" class="col-8 img-fluid" style="width: 60%; margin-top: 5dvh;">
                <div class="col-5 mt-4">
                  <h4 class="text-center">Create or Select a Jot to Start Jotting</h4>
                </div>
              </div>
            </div>
          </div>`
  }
}