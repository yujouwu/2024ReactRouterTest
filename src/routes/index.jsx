import { createHashRouter } from "react-router-dom";
import { Home, About, NotFound } from "../pages/front";

import AlbumLayout from "../pages/front/AlbumLayout";
import AlbumIndex from "../pages/front/AlbumIndex";
import AlbumPhoto from "../pages/front/AlbumPhoto";
import AlbumSearch from "../pages/front/AlbumSearch";
import App from '../App.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        // path: '/',
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'album',
        element: <AlbumLayout />,
        children: [
          {
            index: true,
            element: <AlbumIndex />
          },
          {
            path: 'search',
            element: <AlbumSearch />
          },
          {
            path: ':id',
            element: <AlbumPhoto />
          },
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
]

const router = createHashRouter(routes);

export default router