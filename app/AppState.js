import { Jot } from './models/jot.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  
  activeJot = null;
  numOfJots = 0;
  
  /**STUB - {id: , title: , color: , body: , createdAt: , updatedAt: ,} */
  jots = [
    new Jot({id: 1234567890, title: 'TEST JOT 1', color: '00ff11', body: 'This is just a test Jot - numero uno #1', createdAt: '00/00/00', updatedAt: '00/00/00',}),
    new Jot({id: 9876543210, title: 'TEST JOT 2', color: '0008ff', body: 'This is just a test Jot - numero uno #1 sdsfasd;lfjsdf asdad', createdAt: '00/00/00', updatedAt: '00/00/00',}),
    
  ];
  

}

export const AppState = createObservableProxy(new ObservableAppState())