import { routerInstance } from 'boot/router'
import { useRouter } from 'vue-router'
const router = useRouter()
export default function useGoBack() {
  let pathArray = routerInstance.currentRoute.value.path.split('/')
  if (pathArray.length > 1) {
    pathArray.pop()
    let newPath = pathArray.join('/')
    routerInstance.push(newPath)
  }
}