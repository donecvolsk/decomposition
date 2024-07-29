/*Компонент нижняя часть документа (после баннера)*/
/* Отображает 3 колонки с информацией о погоде, посещаемом, карта, ТВ программа, Эфир*/
import { lowerContent } from "../App";

interface LowerContentProps {
    lc: typeof lowerContent;
}
export function LowerContent({lc}: LowerContentProps) {
    return (
        <div className='lowerContainer'>
            <div className="columnLeft">
                <div className="columnLeftBox">
                    <h4 className="columnLeft-titleFirst"><a>{lc.title.columLeftFirstTitle}</a></h4>
                    <div className="columnLeft-firstBox">
                        <div className="columnLeft-leftColumn">
                            <img className="columnLeft-img" src={lc.weather.weatherIcon}></img>
                            <p>{lc.weather.temperature}</p>
                        </div>
                        <div className="columnLeft-rightColumn">
                            Утром {lc.weather.morningTemperature}, <br/>днем {lc.weather.daiTemperature}
                        </div>
                    </div>
                    <h4 className="columnLeft-titleSecond"><a> {lc.title.columLeftSecondTitle}</a></h4>
                    <ul className="columnLeft-secondList">
                        {lc.visited.map((el) =>
                            <li className="columnLeft-secondItem">{el}</li>
                        )}
                    </ul>                    
                </div>                
            </div>

            <div className="columnCenter">
                <div className="columnCenterBox">
                    <h4 className="columnCenter-titleFirst"><a>{lc.title.columnCenterFirstTitle}</a></h4>
                    <div className="columnCenter-firsInfo">{lc.columnCenterFirstInfo}</div>
                    <h4 className="columnCenter-titleSecond"><a>{lc.title.columnCenterSecondTitle} <img className="imgTV" src="iconTV/9271530721.webp"></img></a></h4>
                    <ul className="columnCenter-secondList">
                        {lc.programmTV.map((obj) => 
                            <li className="columnCenter-secondItem">{obj.programm} <span className="percent">{obj.canal}</span></li>
                        )}                       
                    </ul>                    
                </div>
            </div>

            <div className="columnRight">
                <h4 className="columnRight-title"><a>Эфир</a></h4>
                <ul className="columnRigh-list">
                    {lc.air.map((el) =>
                        <li className="columnRight-item">
                            <img className="icon" src="iconTV/play.png"></img> {el.canal} <span className="percent">{el.programm}</span>
                        </li>
                    )}
                </ul>                    
            </div>
        </div>
    )
}