import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppContainer from './Containers/AppContainer';
import RandomJokeContainer from './Containers/RandomJokeContainer';


const router = createBrowserRouter([
    {
        path: "/"
        element: <AppContainer />,
        children: [
            {
                index: true,
                element: <div>Home page with gradle compile</div>
            },
            {
                path: "currentComic",
                element: <RandomJokeContainer />
            },
    
            
        ] 
    }
])
    }

])

React.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)