
window.getCodeState = () => {
    return window.store.getState().CodeReducer.code.orgCode || "";
}