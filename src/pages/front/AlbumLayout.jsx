import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom"
import axios from 'axios'

import List from "../../components/List";

const api = 'https://api.unsplash.com/search/photos';
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumLayout(){
  const [list, setList] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await axios.get(`${api}/?client_id=${accessKey}&query=animal`);
      // console.log(response);
      const { results } = response.data;
      // console.log(results);
      setList(results);
    })()
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-4">
          左側選單列表
          <p>
            <Link to="search">搜尋頁面</Link>
          </p>
          <List list={list} />
        </div>
        <div className="col-8">
          {/* 主要內容區塊 */}
          <Outlet context={list}/>
        </div>
      </div>
    </>
  )
}