import { Jot } from './models/jot.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  numOfJots = 0;

  activeJot = null;


  jots = [new Jot( {

  }),
]
}

export const AppState = createObservableProxy(new ObservableAppState())