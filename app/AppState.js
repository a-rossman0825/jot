import { Jot } from './models/jot.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  
  activeJot = null;
  
  /**STUB - {id: , title: , color: , body: , createdAt: , updatedAt: ,} */
  jots = [
    new Jot({id: 1234567890, title: 'TEST JOT 1', color: '#00ff11', body: 'This is just a test Jot - numero uno #1', createdAt: '00/00/00', updatedAt: '00/00/00',}),
    new Jot({id: 9876543210, title: 'TEST JOT 2', color: '#0008ff', body: 'This is just a test Jot - numero uno #1 sdsfasd;lfjsdf asdad', createdAt: '00/00/00', updatedAt: '00/00/00',}),
    
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