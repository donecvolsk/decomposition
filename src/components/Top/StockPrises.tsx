/*Компонент отображающий список биржевых цен в верхнем контейнере*/
import { topcontent } from "../../App";

interface StockPrisesProps {
    top: typeof topcontent;
    style: string;
}

export function StockPrises({top, style}: StockPrisesProps) {
    return (
        <>
         {top.stockPrises.map((el: any, idx=Math.random()) =>
            <div className={style} key={idx}>
                <div>{el.name}</div>
                <div className="prise">{el.prise}</div>
                <div className="percent">{el.percent}</div>
            </div>
        )} 
        </>                   
    )
}