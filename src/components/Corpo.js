import Stories from './Stories'
import Posts from './Posts'
import SideBar from './SideBar'


export default function Corpo(){
    return (
    <div class="corpo">
        <Esquerda />
        <SideBar />
    </div>
    )
}

function Esquerda(){
  return(
    <div class="esquerda">
          <Stories srcs = {['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']} />
          <Posts />
    </div>
  )
}

