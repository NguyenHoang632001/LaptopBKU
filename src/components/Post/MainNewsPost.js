import { useNavigate } from 'react-router-dom';
import './MainNewsPost.scss'
function MainNewsPost(props) {
    const navigate = useNavigate();
    const redirectDetailPage = (id) => {
        navigate(`../post/${id}`);
    }
    return (
        <div className="containerFirstNews" onClick={() => redirectDetailPage(props.id)}>
            <div className='gallery-display-area'>
                <div className='gallery-wrap'>

                    <div className='img'>
                        <img className="imgItem" src='https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />
                    </div>
                    <div className='img'>
                        <img className="imgItem" src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />
                    </div>
                    <div className='img'>
                        <img className="imgItem" src='https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
                    </div>
                    <div className='img'>
                        <img className="imgItem" src='https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
                    </div>
                    <div className='img'>
                        <img className="imgItem" src='https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
                    </div>
                </div>
            </div>
        </div>)

}

export default MainNewsPost;