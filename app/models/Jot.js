import { generateId } from "../utils/GenerateId.js";

// SECTION CONSTRUCTOR 
export class Jot {
  constructor (data) {
    this.id = generateId();
    this.title = data.title;
    this.color = data.color;
    this.body = data.body ? data.body.trim() : '';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();

    // TODO Create Date Format getters & replace string interps ✅
  }
  // !SECTION 

  // SECTION TEMPLATE GETTERS 
  get listTemplate() {
    return `
      <div class="row mt-3 px-2 justify-content-center">
        <div id="active-jot-card" class="col-lg-9 rounded jot-list-card" onclick="app.jotsController.setActiveJot('${this.id}')" style="Border-left: 3px solid ${this.color};">
          <div class="row px-3 py-3">
            <!-- NOTE Jot List Card Title  -->
            <div class="border-primary">
              <h5 class="text-truncate" style="max-width: 100%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${this.title}</h5>
            </div>
            <!-- TODO Jot List Card Creation Time -->
            <div class=" text-end border-danger">
              <p>${this.shortFormCreatedAt}</p>
            </div>
          </div>
        </div>
      </div>
    `
  }

  
  // TODO CREATE MARQUEE DIRECTION && SCROLL AMOUNT GETTER AND REPLACE STRING INTERPS ✅
  // TODO CREATE LIMITED NOTE SECTION FOR MARQUEE CARDS GETTER ✅
  get marqueeTemplate() {
    return `
      <div id="marquee-wrapper z-0" class="ms-2" style="width: 84dvw; height: 55dvh; position: absolute;">
        <marquee behavior="alternate" direction="${this.marqueeDir1}" scrollamount="${this.marqueeSpeed}">
          <marquee class="marquee-2" behavior="alternate" direction="${this.marqueeDir2}" scrollamount="${this.marqueeSpeed}">
            <div class="marquee-cards row mt-3 px-2 mb-3" onclick="app.jotsController.setActiveJot('${this.id}')">
              <div class="col-4 rounded marquee-cards-inner" style="background-color: ${this.color}80;">
                <div class="row px-3 py-3">
                  <!-- NOTE Jot List Card Title  -->
                  <div class="col-6 border-primary">
                    <h6>${this.title}</h6>
                  </div>
                  <!-- TODO Jot List Card Creation Time -->
                  <div class="col-6 text-end border-danger">
                    <p>${this.shortFormCreatedAt}</p>
                  </div>
                  <!-- TODO Limited List Body-->
                  <div class="list-body text-truncate" style="height: 75px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                    <p>${this.shortBodyText}</p>
                  </div>
                </div>
              </div>
            </div>
          </marquee>
        </marquee>
      </div>
    `
  }

  // TODO CREATE LONG FORM DATE GETTER ✅
  // TODO CREATE WORD COUNT GETTER & STRING INTERP ✅
  get activeCardTemplate() {
    return `
      <i class="mdi mdi-bookmark" style="position: absolute; font-size: 6rem; margin-top: -36px; color: ${this.color}"></i>
      <div class="row px-1 mb-2">
        <form id="active-form">
          <h5 class="col-9 active-jot-title mt-4 fs-3">${this.title}</h5>
          <div class="col-6 time-subheader" style="color: #444798">
            <h6>Created on: ${this.shortFormCreatedAt}</h6>
            <h6>Last updated: ${this.longFormUpdatedAt}</h6>
          </div>
          <div class="col-4 mt-3">
            <div class="row justify-content-end">
              <button onclick="app.jotsController.deleteJot('${this.id}')" class="btn rounded col-md-4 order-2 order-md-1 text-danger border border-danger" style="background-color: #1F1D38;" type="button">
                DELETE <i class="mdi mdi-trash-can-outline"></i>
              </button>
              <button onclick="app.jotsController.saveActiveJot()" class="btn btn-success col-md-4 order-1 order-md-2 ms-1" style="background-color: #1e8da6;" type="button">
                SAVE <i class="mdi mdi-content-save-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <div class="mb-3 mx-4">
              <textarea class="form-control text-light" name="body" id="body-text" rows="20" placeholder="Write Your Note Here!!!" style="background-color:#2a244d; border: 1px solid #444798;">${this.body}</textarea>
            </div>
          </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-5 text-end me-5 mb-3">
          '${this.wordCount}' Words
        </div>
        </form>  
      </div>
    `
  }
  // !SECTION 
  
  // SECTION DATE FORMAT GETTERS 
  get shortFormCreatedAt() {
    return this.createdAt.toLocaleDateString('en-US', {year: "2-digit", month: "2-digit", day: "2-digit"});
  }

  get longFormUpdatedAt() {
    return this.updatedAt.toLocaleDateString('en-US', {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric', second: '2-digit'});
  }

  // !SECTION 

  // SECTION TRUNCATED BODY TEXT GETTER 
  get shortBodyText() {
    if (this.body.length <= 35) {
      return this.body;
    } else {
      return this.body.slice(0, 35).trim() + '...';
    }
  }

  // !SECTION 

  get wordCount() {
    const words = this.body.trim().split(/\s+/);
    const wordCount = words.length;
    return wordCount;
  }

  get marqueeDir1() {
    let direction = "";
    let num = Math.floor(Math.random() * 2);
    if (num == 0) {
      direction = "up";
    } else {
      direction = "down";
    }
    return direction;
  }

  get marqueeDir2() {
    let direction = "";
    let num = Math.floor(Math.random() * 2);
    if (num > 0.5) {
      direction = "left";
    } else {
      direction = "right";
    }
    return direction;
  }

  get marqueeSpeed() {
    return Math.floor(Math.random() * 10) + 4; //To get num between 8 & 14
  }

}