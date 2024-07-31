import  {search}  from "../../App"

//Компонент для отображения  списка заголвков над поиском 
interface SearchTitleProps {
    prop: typeof search;
    style: string;
}
export function SearchTitle({prop, style}: SearchTitleProps) {

    return (
        <ul className={style}>
        {prop.navBarTiitle.map((el, idx=Math.random()) =>
        <li key={idx}><a>{el}</a></li>
        )}
    </ul>
    )

}