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
      <div class="row mt-3 px-2 justify-content-center">
        <div class="col-lg-9 rounded" onclick="" style="background: #f2f2; Border-left: 3px solid #ff002f;">
          <div class="row px-3 py-3">
            <!-- TODO Jot List Card Title  -->
            <div class="col-md-6 border-primary">
              <h5>JOT CARD TITLE</h5>
            </div>
            <!-- TODO Jot List Card Creation Time -->
            <div class="col-md-6 text-end border-danger">
              <p>00/00/00</p>
            </div>
          </div>
        </div>
      </div>
    `
  }

  get marqueeTemplate() {
    return `
      <div id="marquee-wrapper z-0" class="ms-2" style="width: 100%; height: 100%; position: absolute;">
        <marquee behavior="alternate" direction="up" scrollamount="12">
          <marquee class="marquee-2" behavior="alternate" direction="left" scrollamount="10">
            <div class="row mt-3 px-2 mb-3">
              <div class="col-4 border rounded" onclick="" style="background-color: #f2f2;">
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
      </div>
    `
  }

  get activeCardTemplate() {
    return `
      <i class="mdi mdi-bookmark" style="position:absolute; font-size: 6rem; margin-top: -36px; color: #ff002f"></i>
      <div class="row px-1 mb-2">
        <h5 class="col-9 active-jot-title mt-4 fs-3">JOT TITLE</h5>
        <div class="col-6 time-subheader" style="color: #444798">
          <h6>dafdfadfa</h6>
          <h6>adlfadfkladf</h6>
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
          109 Words
        </div>
      </div>
    `
  }
}