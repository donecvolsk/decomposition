/*Компонент посика*/
/*Включает в себя заголовки поиска, поле ввода, кнопку поиск, слоган */
export function Search() {
    return (
        <div className='searchContainer'>
            <ul className="searchBar">
                <li><a>Видео</a></li>
                <li><a>Картинки</a></li>
                <li><a>Новости</a></li>
                <li><a>Карты</a></li>
                <li><a>Маркет</a></li>
                <li><a>Переводчик</a></li>
                <li><a>Эфир</a></li>
                <li><a>ещё</a></li>
            </ul>
            <form className="searchForm">
                <span className="searchYandex"><span className="ya">Я</span>ндекс</span>
                <input className="searchInput" type="text"/>
                <button className="searchButton">Найти</button>
            </form>
            <p className="searchText">Найдется все. Например.<span className="gray"> фаза луны сегодня</span></p>
        </div>
    )
}