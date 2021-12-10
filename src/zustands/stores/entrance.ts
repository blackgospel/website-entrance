import { SetState } from 'zustand'
import { create, devtools, immer } from '../index'

type EntranceStore = {
  entranceDuration: number
  entranceBlinds: number
  entranceBlindsDelay: number
  entranceBlindsDuration: number
  entranceMaxDelay: number
  setMaxEntranceDelay: () => void
}

const initialState = {
  entranceDuration: 1,
  entranceBlindsDelay: 0.5,
  entranceBlindsDuration: 1.4,
  entranceBlinds: 5,
  entranceMaxDelay: 0,
}

const reducer = (set: SetState<EntranceStore>) => ({
  ...initialState,
  setMaxEntranceDelay: () => {
    set((state) => {
      const entranceBlindsDelay =
        state.entranceBlindsDelay * state.entranceBlinds +
        state.entranceBlindsDuration / 2
      state.entranceMaxDelay = state.entranceDuration + entranceBlindsDelay
    })
  },
})

const useEntranceStore = create<EntranceStore>(immer(devtools(reducer)))

export default useEntranceStore
