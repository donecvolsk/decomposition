//Компонент для отображения контейнера блоков поиска
import  { search }  from "../App"
import { Button } from "../components/ui/Button";
import { SearchTitle } from "../components/search/SearchTitle"
import { Input} from "../components/ui/Input";

interface SearchProps {
    srh: typeof search;
}
export function Search({srh}: SearchProps) {
    return (
        <div className='searchContainer'>
            <SearchTitle prop={srh} style="searchBar"/>
            <form className="searchForm">
                <span className="searchYandex"><span className="ya">Я</span>ндекс</span>
                <Input style="searchInput" type="text" />               
                <Button style="searchButton" name={srh.nameButton} />
            </form>
            <p className="searchText">Найдется все. Например.<span className="gray"> фаза луны сегодня</span></p>
        </div>
    )
}