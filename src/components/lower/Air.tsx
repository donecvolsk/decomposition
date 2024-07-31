import { lowerContent } from "../../App";
//Компонент для отображения блока "Эфир"
interface AirProps {
    prop: typeof lowerContent;
    styleH: string;
    styleUl: string;
    styleI: string;
}

export function Air({prop, styleH, styleUl, styleI}: AirProps) {
    return(
        <>
        <h4 className={styleH}><a>Эфир</a></h4>
        <ul className={styleUl}>
            {prop.air.map((el, idx=Math.random()) =>
                <li className={styleI} key={idx}>
                    <img className="icon" src="iconTV/play.png" ></img> {el.canal} <span className="percent">{el.programm}</span>
                </li>
            )}
        </ul>
        </>
    )
    
}