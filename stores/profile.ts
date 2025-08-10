import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
    state: () => ({
        activePage: 0 as number
    }),
    actions: {
        profileBackPage(page: number) {
            console.log('work')
            this.activePage = page
            const router = useRouter() // теперь контекст есть
            router.back()
        },
        setActivePage(page: number) {
            this.activePage = page
        }
    }
})
