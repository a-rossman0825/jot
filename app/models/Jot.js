import { generateId } from "../utils/GenerateId.js";

// SECTION CONSTRUCTOR 
export class Jot {
  constructor (data) {
    this.id = generateId();
    this.title = data.title;
    this.color = data.color;
    this.body = data.body;
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();

    // TODO Create Date Format getters & replace string interps
  }
  // !SECTION 

  // SECTION TEMPLATE GETTERS 
  get listTemplate() {
    return `
      <div class="row mt-3 px-2 justify-content-center">
        <div class="col-lg-9 rounded" onclick="" style="background: #f2f2; Border-left: 3px solid #${this.color};">
          <div class="row px-3 py-3">
            <!-- NOTE Jot List Card Title  -->
            <div class="col-md-6 border-primary">
              <h5>${this.title}</h5>
            </div>
            <!-- TODO Jot List Card Creation Time -->
            <div class="col-md-6 text-end border-danger">
              <p>${this.shortFormCreatedAt}</p>
            </div>
          </div>
        </div>
      </div>
    `
  }

  
  // TODO CREATE MARQUEE DIRECTION && SCROLL AMOUNT GETTER AND REPLACE STRING INTERPS
  // TODO CREATE LIMITED NOTE SECTION FOR MARQUEE CARDS GETTER
  get marqueeTemplate() {
    return `
      <div id="marquee-wrapper z-0" class="ms-2" style="width: 100%; height: 100%; position: absolute;">
        <marquee behavior="alternate" direction="${this.marqueeDir1}" scrollamount="${this.marqueeSpeed}">
          <marquee class="marquee-2" behavior="alternate" direction="this.${this.marqueeDir2}" scrollamount="${this.marqueeSpeed}">
            <div class="row mt-3 px-2 mb-3">
              <div class="col-4 border rounded" style="background-color: #${this.color}; color: #fff">
                <div class="row px-3 py-3">
                  <!-- NOTE Jot List Card Title  -->
                  <div class="col-6 border-primary">
                    <h5>${this.title}</h5>
                  </div>
                  <!-- TODO Jot List Card Creation Time -->
                  <div class="col-6 text-end border-danger">
                    <p>00/00/00</p>
                  </div>
                  <!-- TODO Limited List Body-->
                  <div class="list-body border-success" style="height: 75px;">
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
      <i class="mdi mdi-bookmark" style="position:absolute; font-size: 6rem; margin-top: -36px; color: #${this.color}"></i>
      <div class="row px-1 mb-2">
        <h5 class="col-9 active-jot-title mt-4 fs-3">${this.title}</h5>
        <div class="col-6 time-subheader" style="color: #444798">
          <h6>Created on: ${this.longFormCreatedAt}</h6>
          <h6>Last updated: ${this.longFormUpdatedAt}</h6>
        </div>
        <div class="col-4 mt-3">
          <div class="row justify-content-end">
            <button class="btn rounded col-md-4 order-2 order-md-1 text-danger border border-danger" style="background-color: #1F1D38;">
              DELETE <i class="mdi mdi-trash-can-outline"></i>
            </button>
            <button class="btn btn-success col-md-4 order-1 order-md-2 ms-1" style="background-color: #1e8da6;">
              SAVE <i class="mdi mdi-content-save-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="mb-3 mx-4">
            <form>
              <textarea class="form-control text-light" name="body" id="body-text" rows="20" placeholder="Write Your Note Here!!!" style="background-color:#2a244d; border: 1px solid #444798;"></textarea>
            </form>
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-5 text-end me-5 mb-3">
          ${this.wordCount} Words
        </div>  
      </div>
    `
  }
  // !SECTION 
  
  // SECTION DATE FORMAT GETTERS 
  get longFormCreatedAt() {
    return this.createdAt.toLocaleDateString('en-US', {weekday: "long", year: "numeric", month: "long", day: "numeric"});
  }

  get shortFormCreatedAt() {
    return this.createdAt.toLocaleDateString('en-US', {year: "numeric", month: "numeric", day: "numeric"});
  }

  get longFormUpdatedAt() {
    return this.createdAt.toLocaleDateString('en-US', {weekday: "long", year: "numeric", month: "long", day: "numeric"});
  }

  // !SECTION 

  // SECTION COLOR GETTER 


  // !SECTION 

  // SECTION TRUNCATED BODY TEXT GETTER 
  get shortBodyText() {
    if (this.body.length <= 20) {
      return this.body;
    } else {
      return this.body.slice(0, 20) + '...';
    }
  }

  // !SECTION 

  get wordCount() {
    return this.body.length;
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
    if (num == 0) {
      direction = "left";
    } else {
      direction = "right";
    }
    return direction;
  }

  get marqueeSpeed() {
    return Math.floor(Math.random() * 6) + 8; //To get num between 8 & 14
  }

}