import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const api = 'https://api.unsplash.com/photos';
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS;


export default function AlbumPhoto(){
  // console.log('useParams', useParams());
  const { id } = useParams();
  // console.log(id);
  
  const [photo, setPhoto] = useState({});

  const navigate = useNavigate();



  useEffect(() => {
    (async() => {
      const response = await axios.get(`${api}/${id}?client_id=${accessKey}`);
      console.log(response);
      setPhoto(response.data)
    })()
  }, [id])

  return (
    <>
      <button type="button" onClick={() => {
        navigate(-1)
      }}>回到上一頁</button>
      這是單張圖片 {id}
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} className="img-fluid" alt="" />
    </>
  )
}