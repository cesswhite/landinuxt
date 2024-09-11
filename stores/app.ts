
export const useAppStore = defineStore('useAppStore', {
  
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}