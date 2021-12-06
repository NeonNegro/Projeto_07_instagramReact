import Icons from './Icons'

export default function Post({post:{user, conteudo, fundo}}){
    debugger;
      return(
          <div class="post">
          <Topo user = {user}/>
          <Conteudo conteudo = {conteudo} />
          <Fundo vip={fundo.vip} qtd = {fundo.qtd}/>
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