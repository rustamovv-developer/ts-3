"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  let { id } = useParams();
  console.log(id);
  return <div>page</div>;
};

export default page;
