import Post from './Post'

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