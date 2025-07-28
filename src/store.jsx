const ADD_TASK = "task/add"

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
        return {
            ...state,
            task: [...state.task, action.payload]
        }

    case DELETE_TASK:
        return {
            ...state, 

        }

    default:
      break;
  }
};
