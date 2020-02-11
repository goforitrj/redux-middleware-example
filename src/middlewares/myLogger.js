const myLogger = store => next => action => {
    console.log(action);
    const result = next(action); // pass action to next middleware or reducer
    console.log('\t', store.getState());
    return result; // result is a result of dispatch(action) / default: undefined
};

export default myLogger;
