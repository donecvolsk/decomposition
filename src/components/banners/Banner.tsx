//Компонент отображающий баннер под поиском
export function Banner({bn}: any) {
    return (
        <div className="bannerContainer">
        <a className="bannerLink">
            <img className="bannerImg" src={bn}/>
        </a>
        </div>
    )
}