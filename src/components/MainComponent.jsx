"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MainComponent = () => {
  const [data, setData] = useState([]);
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseurl}/posts`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div class="relative overflow-x-auto w-ful">
        <table class="w-full text-sm text-left bg-gray-200">
          <thead class="text-xs bg-black text-white">
            <tr className="text-center">
              <th scope="col">SL</th>
              <th scope="col">Userid</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post, index) => (
              <tr key={index} className="text-center">
                <td className="w-0.5/5">{post.id}</td>
                <td className="w-0.5/5">{post.userId}</td>
                <td className="w-1/5 text-justify">{post.title}</td>
                <td className="w-2/5 text-justify">{post.body}</td>
                <td>
                  <Link href={`/posts/${post.id}`} target="_blank">
                    <button className="w-2/5"> Let's Go</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainComponent;
