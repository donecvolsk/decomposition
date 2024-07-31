/*Компонент отображающий список новостей в верхнем контейнере*/
import { topcontent } from "../../App";

interface NewListProps {
    top: typeof topcontent;
    style: string;
}

export function NewList({top, style}: NewListProps) {

    return (
        <ul className={style}>
        {top.newsList.map((el, idx=Math.random()) =>
        <li key={idx}><img className="icon" src={el.icon} />  {el.text}</li>
        )}
        </ul>
    )
}