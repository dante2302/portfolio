
interface props{
    styleClass: string;
    navigateTo: string;
    content: string;
}

export default function NavButton({styleClass, navigateTo, content}: props){
    return (
        <a href={navigateTo} className={styleClass}>{content}</a>
    )
}