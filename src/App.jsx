import Header from "./components/Header";
import Cards from "./components/Cards";
import Loading from "./components/Loading";


import { useEffect, useState } from "react";
import { url } from "./data";


function App() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

    const getdata = async () => {
      try {
        setloading(true);
        let res = await fetch(url);
        let ans = await res.json();
        ans = ans.photos;
        setdata(ans);
      } catch (error) {
        setdata([]);
      }
      setloading(false);
    };

  
  useEffect(() => {
    getdata();
  }, []);
  
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="">
          <Header />
        </div>
        <div>{loading ? <Loading /> : <Cards data={data}/>}</div>
      </div>
    </>
  );
}

export default App;
