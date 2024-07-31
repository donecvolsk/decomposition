import { lowerContent } from "../../App";

//Компонент для отображения блока "карты"
interface MapsProps {
    prop: typeof lowerContent;
    styleH: string;
    styleD: string;
}

export function Maps({prop, styleH, styleD}: MapsProps) {
    return (
        <>
        <h4 className={styleH}><a>{prop.title.columnCenterFirstTitle}</a></h4>
        <div className={styleD}>{prop.columnCenterFirstInfo}</div>
        </>
    )
}