import { combineReducers } from 'redux';
const ADD_BIRD = 'ADD_BIRD'
const INCREAMENT_BIRD = 'INCREAMENT_BIRD'


export function addBird(bird) {
    return {
      type: 'ADD_BIRD',
      bird,
    }
  }
  export function increamentbird(bird) {
    return {
      type: 'INCREAMENT_BIRD',
      bird,
    }
  }


  const defaultbird = [
      {
          name : "Dilip",
          Views : 23
      }
  ]


  function birds(state=defaultbird , action)
  {
      switch(action.type)
      {
          case ADD_BIRD:
              return [...state , {
                  name : action.bird,
                  Views :20
              }]
              case INCREAMENT_BIRD:
                  const bird = state.find(b=> action.bird === b.name)
                  const birds = state.filter(b => action.bird !== b.name);
                  return [...birds , {...bird , 
                    Views: bird.Views + 1
                }];
              default:
                 return state;
      }
  }

  const birdApp = combineReducers({
    birds
  });
  
  export default birdApp;