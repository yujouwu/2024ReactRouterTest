import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

import List from "../../components/List";

const api = 'https://api.unsplash.com/search/photos';
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumSearch(){
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (search !== ''){
      (async() => {
        const response = await axios.get(`${api}/?client_id=${accessKey}&query=${search}`);
        // console.log(response);
        const { results } = response.data;
        console.log(results);
        setList(results);
      })()
    }
  }, [search])

  useEffect(() => {
    const query = searchParams.get('query');
    if (query){
      setSearch(query)
    }
  }, [searchParams])

  return (
    <>
      這是搜尋頁面 {search}
      <input type="text" className="form-control" 
        defaultValue={search}
        onKeyUp={(e) => {
          if(e.code === 'Enter'){
            setSearchParams({ query: e.target.value})
          }
        }}
      />
      <List list={list} />
    </>

  )

}