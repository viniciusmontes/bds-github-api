

import './styles.css';

type Props = {
    text: string
}


const ButtonIcon = ({text} : Props) => {
    return (
        <button className='btn btn-primary btn-icon'>{text}</button>
    )
}

export default ButtonIcon;