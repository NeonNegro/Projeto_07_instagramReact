export default function Icons({style, icons}){

    if(style)
        return(
            <div class={style}>
                {icons.map((name) =><ion-icon name ={name} ></ion-icon>)}
            </div>
        )
    else
        return(
            <div>
                {icons.map((name) =><ion-icon name ={name} ></ion-icon>)}
            </div>
        )
}