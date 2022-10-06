import { get, writable } from 'svelte/store'

export const currentPage = writable('')

function createStore(initialState) {
	const { subscribe, set, update } = writable(initialState)
	return {
		subscribe,
		set,
		update,
		reset: () => {
			set(initialState)
		},
	}
}

const stores = {
	auth: createStore({}),
}

export const getStore = key => {
	return stores[key]
}

export const getState = key => {
	return get(getStore(key))
}

export const reset = () => {
	Object.keys(stores).forEach(storeKey => {
		stores[storeKey].reset()
	})
}
// @credit:
// https://github.com/itssumitrai/online-dress-store/blob/9a4794b3e868b75c92c1c8e51de3837bc16f45a5/src/store.js
