/*Копмонент верхней части документа*/
/* Включает в себя Заголовки, список новостей, время, биржевые курсы, банеер*/
import { topcontent } from "../App";

interface TopContentProps {
    top: typeof topcontent;
}

export function TopContent({top}: TopContentProps) {
    return (
        <div className='topContent'>            
            <div className="topContent-left">               
                <div className="topTitle">
                    {top.topicTitle.map((tit: any, idx=Math.random()) =>
                        <a className="topTitle-item" key={idx}><h4>{tit}</h4></a>                                                        
                    )}
                    <p className="date">{top.date}</p>
                </div>                    
                <ul className="newsList">
                    {top.newsList.map((item: any, idx=Math.random()) =>
                    <li key={idx}><img className="icon" src={item.icon} />  {item.text}</li>
                    )} 
                </ul>
                <div className="stockPrises-list">
                    {top.stockPrises.map((item: any, idx=Math.random()) =>
                        <div className="stockPrises-item" key={idx}>
                            <div>{item.name}</div>
                            <div className="prise">{item.prise}</div>
                            <div className="percent">{item.percent}</div>
                        </div>
                    )}
                    <div>...</div>
                </div>
            </div>

            <div className="topContent-right">
            <img className="imgTop" src="top\hugo.jpg" alt="img" />
                <a><h4>Работа над ошибками</h4></a>
                <p>Смотрите на яндекс и запоминайте</p>
            </div>          
        </div>
    )
}