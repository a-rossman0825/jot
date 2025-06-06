import { generateId } from "../utils/GenerateId.js";


export class Jot {
  constructor (data) {
    this.id = generateId();
    this.title = data.title;
    this.color = data.color;
    this.body = data.body;
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
  }

  get listTemplate() {
    return `
    <div class="row mt-3 px-2 mb-3">
      <div class="col-12 border rounded">
        <div class="row px-3 py-3">
          <!-- TODO Jot List Card Title  -->
          <div class="col-6 border-primary">
            <h5>JOT CARD TITLE</h5>
          </div>
          <!-- TODO Jot List Card Creation Time -->
          <div class="col-6 text-end border-danger">
            <p>00/00/00</p>
          </div>
          <!-- TODO Limited List Body-->
          <div class="list-body border-success" style="height: 75px;">
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque, soluta quos po.
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </div>
        </div>
      </div>
    </div>
    `
  }

  get marqueeTemplate() {
    return `
    <marquee behavior="alternate" direction="up" scrollamount="12">
      <marquee class="marquee-2" behavior="alternate" direction="left" scrollamount="10">
        <div class="row mt-3 px-2 mb-3">
          <div class="col-4 border rounded" onclick="">
            <div class="row px-3 py-3">
              <!-- TODO Jot List Card Title  -->
              <div class="col-6 border-primary">
                <h5>JOT CARD TITLE</h5>
              </div>
              <!-- TODO Jot List Card Creation Time -->
              <div class="col-6 text-end border-danger">
                <p>00/00/00</p>
              </div>
              <!-- TODO Limited List Body-->
              <div class="list-body border-success" style="height: 75px;">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicin.</p>
              </div>
            </div>
          </div>
        </div>
      </marquee>
    </marquee>
    `
  }
}