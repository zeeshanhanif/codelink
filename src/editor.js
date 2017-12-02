let btnId = "run0"
var binderFunc;
window.getCodeState = () => {
    return window.store.getState().CodeReducer.code.cleanCode || "";
}

window.setBinder = (binder) => {
    console.log("Binding for: ", btnId);
    binderFunc = binder;
    binderFunc(btnId);
}

window.setBtnId = (id) => {
    btnId = id; // global btn id
    window.setBinder(binderFunc);
}

