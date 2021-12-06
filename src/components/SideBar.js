export default function SideBar(){
    const sugestoes =[
        {user:'bad.vibes.memes'},
        {user:'chibirdart'},
        {user:'razoesparaacreditar', isNew: true},
        {user:'adorable_animals'},
        {user:'smallcutecats'} 
        ];

    return(
    <div class="sidebar">
        <Usuario user ='catanacomics' nameUser='Catana' />
        <Sugestoes users={sugestoes} />

        <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    )
}

function Usuario({user, nameUser}){
    return( 
    <div class="usuario">
        <img src={`assets/img/${user}.svg`} />
        <div class="texto">
        <strong>{user}</strong>
        {nameUser}
        </div>
    </div>
    )
}
function Sugestoes({users}){
    return( 
        <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        {users.map(s => <Sugestao user={s.user} isNew={s.isNew} />)}
        </div>
    )
} 
function Sugestao({user, isNew}){
    return(
    <div class="sugestao">
        <div class="usuario">
        <img src={`assets/img/${user}.svg`} />
        <div class="texto">
            <div class="nome">{user}</div>
            {(isNew) ? <div class="razao">Novo no Instagram</div> : <div class="razao">Segue você</div>}
        </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
    )
}  

  
  
  
  
