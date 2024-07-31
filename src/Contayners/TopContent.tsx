import { topcontent } from "../App";
import { TopTitle } from "../components/Top/TopTitle";
import { NewList } from "../components/Top/NewsList";
import { StockPrises } from "../components/Top/StockPrises";
import { ContentRight } from "../components/Top/ContentRight";

//Компонент для отображения контейнера блоков ввурху документа
interface TopContentProps {
    top: typeof topcontent;
}

export function TopContent({top}: TopContentProps) {
    return (
        <div className='topContent'>            
            <div className="topContent-left">               
                <div className="topTitle">
                    <TopTitle list={top.topicTitle} style="topTitle-item" />
                    <p className="date">{top.date}</p>
                </div>
                <NewList top={top} style="newsList" />                    
                <div className="stockPrises-list">
                    <StockPrises top={top} style="stockPrises-item" />
                    <div>...</div>
                </div>
            </div>
            <div className="topContent-right">
                <ContentRight />
            </div>          
        </div>
    )
}