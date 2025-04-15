import { create } from 'zustand'

const initState: State = {
    value: false
}

const useIsDarkTheme = create<State & Action>((set, get) => ({
  ...initState,
    set: (state: boolean) => {
      if (state) localStorage.setItem('theme', 'dark')
      else localStorage.setItem('theme', 'light')
      
      set({ value: state })
    },
  reset: () => set({ ...initState })
}))

export default useIsDarkTheme

type State = {
    value: boolean
}

type Action = {
    set: (state: boolean) => void
 reset: () => void
}