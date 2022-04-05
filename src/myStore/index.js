import { reactive } from 'vue'

const state = reactive({
  navItems: [
    {
      root: '/user',
      to: '/user',
      icon: 'lab la-searchengin',
      label: '탐정리스트'
    },
    {
      root: '/contect',
      to: '/contect',
      icon: 'las la-comment',
      label: '대화리스트'
    },
    {
      root: '/account',
      to: '/account',
      icon: 'las la-user',
      label: '사용자'
    }
  ],
  usePageTransition: false,
  iosBrowserSwipingBack: false
})

const user = reactive({
  user: {},
  logedIn: false
})


const store = {
  state,
  user
}

export default store