import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, {
  loader as rootLoader,
  action as rootAction
} from './routes/root';
import ErrorPage from './error-page';
import Contact, {
  loader as contactLoader
} from './routes/contact';
import EditContact, {
  action as editContactAction,
} from './routes/edit';
import {
  action as deleteContactAction
} from './routes/destroy';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/contacts/:contactId",
        loader: contactLoader,
        element: <Contact />
      },
      {
        path: "/contacts/:contactId/edit",
        loader: contactLoader,
        action: editContactAction,
        element: <EditContact />
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement: <div>Oop! There was an error!</div>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
