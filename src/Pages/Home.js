import { useEffect, useState } from "react";
import Service from "../Service/Api";


const Home = (props) => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    Service.getData().then(result => 
      {
        console.log(result)
        setLoading(false)
      });
  }, [])

  return (
    <>
      <p>Google Flight</p>
    </>
  )
}

export default Home