import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  SearchPokemon,
  SinglePokemon,
  Gifts,
  SingleGift,
} from "./pages";
import { loader as pokeLoader } from "./pages/SinglePokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/pokemon", element: <SearchPokemon /> },
      {
        path: "/pokemon/:id",
        element: <SinglePokemon />,
        loader: pokeLoader(queryClient),
      },
      {
        path: "/gifts",
        element: <Gifts />,
      },
      {
        path: "/gifts/:id",
        element: <SingleGift />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen="true" />
    </QueryClientProvider>
  );
}

export default App;
