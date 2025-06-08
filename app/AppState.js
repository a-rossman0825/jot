import { Jot } from './models/jot.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  
  activeJot = null;
  
  /**STUB - {id: , title: , color: , body: , createdAt: , updatedAt: ,} */
  jots = [

  ];

  marqueeBackground = `<div class="row mx-md-2">
            <div  class="col-12 rounded">
              <!-- STUB INACTIVE SCREEN BG IMAGE -->
              <div class="row justify-content-center mb-5 mt-5">
                <img src="./assets/img/developer.png" alt="Cartoon drawing of a developer at a computer screen sipping coffee" class="col-8 img-fluid" style="width: 60%; margin-top: 5dvh;">
                <div class="col-5 mt-4">
                  <h4 class="text-center">Create or Select a Jot to Start Jotting</h4>
                </div>
              </div>
            </div>
          </div>
    
  `
}

export const AppState = createObservableProxy(new ObservableAppState())