import { useLoaderData } from "react-router-dom";

function Github() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch('https://api.github.com/users/snehil-01')
  //   .then(res => {
  //     if(!res.ok)throw new Error('error in fetching data from github!')
  //     return res.json()
  //   })
  //   .then(data => setData(data))
  //   .catch(err => console.log(err.message))
  //   setIsLoading(false)
  // },[])
  // if(isLoading)return <h3>Loading....</h3>
  const data = useLoaderData();
  return (
    <div className="text-center bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      {/* <img src={data.avatar_url} alt="proflie pic" /> */}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/snehil-01");
  const result = await res.json();
  return result;
};
