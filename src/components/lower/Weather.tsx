import { lowerContent } from "../../App";

//Компонент для отображения блока "Погода"
interface WeatherProps {
    lc: typeof lowerContent;
}

export function Weather({lc}: WeatherProps) {
    return (
        <>
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
        </>
        
    )
    
}