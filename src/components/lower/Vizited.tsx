import { lowerContent } from "../../App";

//Компонент для отображения блока "Посещаемое"
interface VizitedProps {
    lc: typeof lowerContent;
    style: string
}

export function Vizited({lc, style}: VizitedProps) {
    return (
        <>
        <h4 className="columnLeft-titleSecond"><a> {lc.title.columLeftSecondTitle}</a></h4>
        <ul className={style}>
            {lc.visited.map((el, idx=Math.random()) =>
                <li className="columnLeft-secondItem" key={idx}>{el}</li>
            )}
        </ul>
        </>
         
    )
}