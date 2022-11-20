import { createI18n } from 'vue-i18n'
import zhCn from './messages/zh-cn'

// import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = {
    zhCn
}

export default createI18n({
    locale: 'zhCn',
    messages
})
