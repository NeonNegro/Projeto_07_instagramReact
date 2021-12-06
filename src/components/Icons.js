export default function Icons({style, icons}){

    if(!style) {style=''}
    
    return(
        <div class={(!style) ? '' : style}>
            {icons.map((name) =><ion-icon name ={name} ></ion-icon>)}
        </div>
    )
}