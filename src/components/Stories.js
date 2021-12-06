export default function Stories({srcs}){
    return (
      <div class = 'stories'>
        {srcs.map(s => <Story src = {s} />)}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}
    
function Story({src}){
    const user = src;
    return (
    <div class="story">
        <div class="imagem">
            <img src={`assets/img/${src}.svg`} />
        </div>
        <div class="usuario">
            {user}
        </div>
    </div>
    )
}