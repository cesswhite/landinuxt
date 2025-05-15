import { useClipboard } from '@vueuse/core'


const { copy, copied } = useClipboard()


export function copyCode(code: string) {
    copy(code)
    if (copied) return true
    else return false
}
