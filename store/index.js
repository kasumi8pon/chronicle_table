export const state = () => ({
    events: []
})

export const mutations = {
    add(state, event) {
        state.events.push(event);
    }
}
