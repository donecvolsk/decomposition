
//Компонент для отображения кнопки
interface ButtonProps {
    name: string;
    style: string;
}
export function Button({name, style}: ButtonProps) {
    return (
        <button className={style}>{name}</button>
    )
}