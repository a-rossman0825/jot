import { AppState } from "../AppState.js";
import { Jot } from "../models/jot.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class JotsController {

  constructor() {
    // console.log('🎛️', 'Jots Controller Ready');
    
    this.drawJotsMarquees();
    this.drawNumOfJots();
    AppState.on('jots', this.drawJotsList);
    AppState.on('jots', this.drawJotsMarquees);
    AppState.on('jots', this.drawNumOfJots);
    AppState.on('activeJot', this.drawActiveJot);


    this.drawJotsList();
    // TODO CREATE OBSERVER FOR NEW NOTE DRAW ✅
    jotsService.loadJots();
    console.table(AppState.jots);
  }
  // SECTION OBSERVER DRAW FUNCS 
  drawJotsList() {
    const jotCards = AppState.jots;
    let listContent = "";

    jotCards.forEach((card) => listContent += card.listTemplate);
    setHTML("jots-list", listContent);
    // console.log('✏️🎛️Cards', jotCards);
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
    // console.log('✏️🎛️drawNum', numOfJots);
  }
  // !SECTION 

  // SECTION MARQUEE DRAW FUNCS
  drawJotsMarquees() {
    const marqueeCards = jotsService.marqueeQuantity();
    let cardContent = "";

    marqueeCards.forEach((jot) => cardContent += jot.marqueeTemplate);
    let newCardContent = cardContent + AppState.marqueeBackground;

    setHTML('inactive-screen', newCardContent);
    // console.log('✏️🎛️Marquee', marqueeCards.length);
    
  }

  // !SECTION 

  // SECTION ACTIVE JOT METHODS 
  setActiveJot(jotId) {
    // console.log('🎛️set📝');
    jotsService.setActiveJot(jotId);
  }

  drawActiveJot() {
    // console.log('✏️🎛️active');
    const activeJot = AppState.activeJot;
    let activeScreen = document.getElementById('active-screen');
    let inactiveScreen = document.getElementById('inactive-screen');

    if (!activeJot) {
      activeScreen.classList.add('d-none');
      inactiveScreen.classList.remove('d-none');
      return;
    } else {
        setHTML('active-screen', activeJot.activeCardTemplate);
        inactiveScreen.classList.add('d-none');
        activeScreen.classList.remove('d-none');
      }
  }

  deleteJot(jotId) {
    // console.log('🗑️🎛️DELETE CLICKED', jotId);
    const deleteConfirmed = window.confirm("Are you sure you want to delete this Jot FOREVER??");

    if (deleteConfirmed !== true) {
      return;
    }
    // console.log('🗑️🎛️ deleting jot', jotId);
    jotsService.deleteJot(jotId);
    document.getElementById('active-screen').classList.add('d-none');
    document.getElementById('inactive-screen').classList.remove('d-none');
  }

  // !SECTION 

  // SECTION CREATE JOT METHODS 
  createNewJot() {
    event.preventDefault();
    // console.log('✏️📝', 'createNewJot');
    const form = event.target;
    const formData = getFormData(form);

    // console.log('✏️🎯createNewForm', form);
    jotsService.createJot(formData);
  }


  // !SECTION 

  // SECTION LOAD/SAVE STATES 
  saveActiveJot() {
    // console.log('📩🎛️');
    // @ts-ignore
    const body = document.getElementById('body-text').value;
    // console.log('🎛️📩✅', body);
    jotsService.saveActiveJot(body);
    this.drawActiveJot();
  }


  // !SECTION 
}