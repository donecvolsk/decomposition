/*Компонент отображающий список заголовков в верхнем контейнере*/

interface TopTitleProps {
    list: string[];
    style: string
}

export function TopTitle({list, style}: TopTitleProps) {
    return (
        <>
        {list.map((tit, idx=Math.random()) => 
            <a className={style} key={idx}><h4>{tit}</h4></a> 
            )}
        </>
        
        
    )

}