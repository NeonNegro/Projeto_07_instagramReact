import Icons from './Icons'

export default function Posts({posts}){

    posts = [ { 
                user: 'meowed',
                conteudo:'gato-telefone',
                fundo:{vip:'respondeai', qtd:'101.523'}
              },
              { 
                user: 'barked', 
                conteudo:'dog',
                fundo:{vip:'adorable_animals', qtd:'99.159'}}
            ]
  
  
  
    return (
      <div class="posts">
        {posts.map(e => <Post post = {e}/>)}
      </div>
    )
}
  
function Post({post}){
    //da pra melhorar
    return(
        <div class="post">
        <Topo user = {post.user}/>
        <Conteudo conteudo = {post.conteudo} />
        <Fundo vip={post.fundo.vip} qtd = {post.fundo.qtd}/>
        </div>
    )
}

function Topo({user}){
    return (
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${user}.svg`} />
          {user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
    )
}
function Conteudo({conteudo}){
    return (
        <div class="conteudo">
            <img src={`assets/img/${conteudo}.svg`} />
        </div>
    )
}
function Fundo({vip,qtd}){
    return (
        <div class="fundo">
        <Acoes />
        <Curtidas vip={vip} qtd={qtd} />
        </div>
    )
}
function Acoes(){
    return(
      <div class="acoes">
        <Icons icons= {['heart-outline', 'chatbubble-outline', 'paper-plane-outline']} />
        <Icons icons= {['bookmark-outline']} />
      </div>
    )
}
function Curtidas({vip, qtd}){
    return(
    <div class="curtidas">
        <img src={`assets/img/${vip}.svg`} />
        <div class="texto">
        Curtido por <strong>{vip}</strong> e <strong>outras {qtd} pessoas</strong>
        </div>
    </div>
    )
}