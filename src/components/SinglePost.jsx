"use client";
import React, { useEffect, useState } from "react";

const SinglePost = ({ id }) => {
  const [data, setData] = useState("");
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
  //   alert(id);

  const fetchPost = async () => {
    try {
      const response = await fetch(`${baseurl}/posts/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="p-3">
      <h1 className="w-full text-center p-5 font-bold text-lg bg-slate-200">
        {data.title}
      </h1>

      <div className="w-full text-center p-5 font-normal text-md">
        {data.body}
      </div>
    </div>
  );
};

export default SinglePost;
