import { useParams } from "react-router"

export const DetailMovie = ({movie}) => {
const params=useParams();
const moveisDetail= movie?.find((i)=>i.id===+params.id)
console.log(moveisDetail)

    return(
    <div>
          <div  className="movList">
                                
                                <div><img className="img" src={moveisDetail?.img} /></div>
                                <ul>
                                    <li className="sgLi">
                                        <li className="title">{moveisDetail?.Title}</li>
                                        <li>{moveisDetail?.Year}</li>
                                        <li>{moveisDetail?.Genre}</li>
                                        <li>{moveisDetail?.Director}</li>
                                        <div><img src={moveisDetail?.star} /></div>
                                    </li>
                                
                                </ul>

                            </div>
    </div>
    )
   }