import { NavLink } from 'react-router-dom'
import s from './Gender.module.scss'
import cn from 'classnames'
const list = [
    { link: 'women', title: 'Женщины' },
    { link: 'men', title: 'Мужчины' },
];

export const Gender = () => (
    <ul className={s.gender}>
        {list.map((item) => (
            <li key={item.link} className={s.item}>
                <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={item.link}>
                    {item.title}
                </NavLink>
            </li>
        ))}
    </ul>
)