"use client";

import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import UserItem from "@/components/UserItem";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// fetch (axios) function
const getData = async (result: number, page: number) => {
  const { data } = await axios.get(
    `https://randomuser.me/api/?results=${result}&page=${page}`
  );
  return data;
};

export default function userPage() {
  const elementRef = useRef(null);
  const [users, setUsers] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  // fetch and put datas in state
  const fetchData = async (result: number) => {
    try {
      setLoading(true);
      const data = await getData(result, page);
      console.log(data);
      if (data.info.page) {
        setPage(data.info.page + 1); // Update the page number
        setUsers((prevUsers: any) => [...(prevUsers || []), ...data.results]); // Append new results to existing users
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  // feth first page of data
  useEffect(() => {
    fetchData(10); // Call the fetch function
  }, []);

  // load new data
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchData(10);
        }
      },
      { threshold: 0.1 } // تنظیم حساسیت
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-500 mb-8">
          Users List
        </h1>
        {/* maping users */}
        <div className="space-y-6">
          {/* there is no id for use insted index :) */}
          {users?.map((user: any, index: number) => (
            <UserItem user={user} key={index}/>
          ))}
        </div>
      </div>
      {/* loading component */}
      {loading && <Loading />}
      {/* footer and hook for fetch new data */}
      <div ref={elementRef}>
        <Footer />
      </div>
    </div>
  );
}
