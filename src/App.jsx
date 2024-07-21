import { Form, RouterProvider, createBrowserRouter} from"react-router-dom"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {About, HomeLayout, Landing, Newsletter, Cocktail, Error,SinglePageError} from "./pages";

import {loader as landingLoader} from "./pages/Landing"
import {loader as singleCoctailLoader} from "./pages/Cocktail"
import {action as newsletterAction } from "./pages/Newsletter"
import { action as searchFormAction } from "./components/SearchForm";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000 * 60 * 5
    }
  }
})
const router = createBrowserRouter([
  {
   path:"/",
   element: <HomeLayout/>,
   errorElement:<Error/>,
   children:[
    {
     index:true,
     element:<Landing/>,
     errorElement:<SinglePageError/>,
     action:searchFormAction,
     loader:landingLoader(queryClient)
   },
   {
    path:'newsletter',
    element:<Newsletter/>,
    errorElement:<SinglePageError/>,
    action:newsletterAction
   },
   {
    path:'cocktail/:id',
    element:<Cocktail/>,
    loader:singleCoctailLoader(queryClient),
    errorElement:<SinglePageError/>,
   },
   {
    path:'about',
    element:<About/>,
    errorElement:<SinglePageError/>,
   }
  ]
  }
])

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
};
export default App;
