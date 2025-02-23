import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query"; // for fetching, caching, and updating server state.
import { ReactQueryDevtools } from '@tanstack/react-query-devtools' // to debug React Query.
import axios from "axios"; // to make HTTP requests.

import './App.css' // styling.

const queryClient = new QueryClient(); // the query context.

function CurrentTime(props) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [props.api], // API URL.
    queryFn: () =>  // performs the http get request.
      axios
        .get(`${props.api}`)
        .then((res) => res.data),
  });

  // conditional rendering
  if (isLoading) return `Loading ${props.api}... `;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <p>---</p>
      <p>API: {data.api}</p>
      <p>Time from DB: {data.now}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  )
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hey Team! 👋</h1>
      <CurrentTime api="/api/golang/"/>
      <CurrentTime api="/api/node/"/>
      <CurrentTime api="/api/fastapi/"/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App
