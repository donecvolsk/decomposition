import { lowerContent } from "../../App";

//Компонент для отображения блока "Тв программа"
interface TVprogrammProps {
    prop: typeof lowerContent;
    styleH: string;
    styleUl: string;
    styleI: string;
}

export function TVprogramm({prop, styleH, styleUl, styleI}: TVprogrammProps) {
    return (
        <>
        <h4 className={styleH}><a>{prop.title.columnCenterSecondTitle} <img className="imgTV" src="iconTV/9271530721.webp"></img></a></h4>
        <ul className={styleUl}>
            {prop.programmTV.map((el, idx=Math.random()) => 
                <li className={styleI} key={idx}>{el.programm} <span className="percent">{el.canal}</span></li>
            )}                       
        </ul> 
        </>
    )

         
}