//Компонент для отображения контейнера блоков внизу

import { lowerContent } from "../App";
import { Weather } from "../components/lower/Weather";
import { Vizited } from "../components/lower/Vizited";
import { Maps } from "../components/lower/Maps";
import { TVprogramm } from "../components/lower/TVprogramm";
import { Air } from "../components/lower/Air";

interface LowerContentProps {
    lc: typeof lowerContent;
}
export function LowerContent({lc}: LowerContentProps) {
    return (
        <div className='lowerContainer'>
            <div className="columnLeft">
                <div className="columnLeftBox">
                    <Weather lc={lc} />
                    <Vizited lc={lc} style="columnLeft-secondList" />                    
                </div>                
            </div>

            <div className="columnCenter">
                <div className="columnCenterBox">
                    <Maps prop={lc} styleH="columnCenter-titleFirst" styleD="columnCenter-firsInfo" />
                    <TVprogramm prop={lc} styleH="columnCenter-titleSecond" styleUl="columnCenter-secondList" styleI="columnCenter-secondItem"/>                   
                </div>
            </div>

            <div className="columnRight">
                <Air  prop={lc} styleH="columnRight" styleUl="columnRigh-list" styleI="columnRight-item" />                  
            </div>
        </div>
    )
}