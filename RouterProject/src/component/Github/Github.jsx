import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //     const [data,setData]= useState([])
  //     useEffect(() => {
  //   fetch('https://api.github.com/users/princepal9120').then(response => response.json())
  //   .then(data=>{
  // console.log(data);
  // setData(data)
  //   })
  //     }, [])

  return (
    <div className="text-center bg-black text-orange-700 text-3xl p-5 m-5 rounded-lg">
      Github Followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="git pic"
        width={"300px"}
        height={"200px"}
      ></img>
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/princepal9120");
  return response.json();
};
