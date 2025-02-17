import { useOutletContext } from "react-router-dom";
import List from "../../components/List";

export default function AlbumIndex(){
  const list = useOutletContext();
  console.log('AlbumIndex', list);
  
  return (
    <>
      <p>這是相簿的首頁</p>
      <List list={list}/>
    </>
  )

}