"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1d32ad3f-a644-4494-9353-eca87c6a71c2");
  }, []);
  return null;
};

export default CrispChat;
