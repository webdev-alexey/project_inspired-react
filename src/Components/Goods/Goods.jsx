import { useSelector } from "react-redux";
import s from './Goods.module.scss';
import { Container } from "../Layout/Container/Container.jsx";
import { Product } from "../Product/Product.jsx";
import { Pagination } from "../Pagination/Pagination.jsx";
export const Goods = ({ title }) => {
    const { goodsList } = useSelector(state => state.goods);

    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>{title ?? "Новинки"}</h2>
                <ul className={s.list}>
                    {goodsList.map((item) => (
                        <li key={item.id}>
                            <Product {...item} />
                        </li>
                    ))}
                </ul>
                <Pagination />
            </Container>
        </section>
    )
}