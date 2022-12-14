import MainNewsPost from "components/Post/MainNewsPost";
import PrimaryNewsPost from "components/Post/PrimaryNewsPost";
import ItemRestNews from "components/Post/ItemRestNews";
import { useEffect, useState } from "react";
import { getPostService } from "services/PostService";
import './News.scss'
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";

function News() {
    const [newsList, setNewsList] = useState([]);
    const dispatch = useDispatch();
    const newsListPost = async () => {
        dispatch(fetchDataStart());
        let res = await getPostService(1, 16, 'PT');
        if (res && res.errCode === 0) {

            setNewsList(res.data.rows);
        }
        dispatch(fetchDataFinished());
    }

    useEffect(() => {
        newsListPost();


    }, [])

    // const firstNewsPost = newsList.length >= 1 ? newsList.slice(0, 1) : [];
    const restNews = newsList.slice(0, newsList.length);
    // console.log(firstNewsPost)
    // console.log("imge", firstNewsPost[0].image)


    return (
        <div className="containerNewsMain">
            <div className="container_News">

                <div className="banner_News">
                    <div className="main_News">
                        <MainNewsPost />

                    </div>
                    <div className="primary_News">
                        <PrimaryNewsPost />
                    </div>
                </div>


                <div className="ListNews">

                    {
                        restNews.map((item) => {
                            console.log("item", item)
                            return (
                                <ItemRestNews
                                    key={item.id}
                                    id={item.id}

                                    image={item.image}
                                    title={item.title}

                                    shortdes={item.shortdes}
                                />

                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default News;