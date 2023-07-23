import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods.jsx"
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice.js";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams.js";

export const FavoritePage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const page = usePageFromSearchParams(dispatch);

    useEffect(() => {
        if(favorites) {
            const param = { list: favorites }
            if (page) {
                param.page = page;
            }
            dispatch(fetchCategory(param))
        }
    }, [favorites, page, dispatch]);

    return (
        <Goods title="Избранное" />
    )
}