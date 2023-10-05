//  
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string
}
// interface FetchGamesResponse {
//     count: number;
//     results: Genre[]
// }
const useGenres = () => useData<Genre>('/genres');
// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false)

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true)
//     apiClient
//       .get<FetchGamesResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error ,isLoading};

export default useGenres