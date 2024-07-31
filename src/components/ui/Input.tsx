
//Компонент для отображения тега Input
interface InputProps {
    type: string;
    style: string;
}

export function Input({style, type}: InputProps) {
    return (
        <input className={style} type={type} />
    )
}