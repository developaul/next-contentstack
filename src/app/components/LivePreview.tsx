"use client";
import { useEffect } from "react"
import ContentstackLivePreview from "@contentstack/live-preview-utils"

const LivePreview = () => {
  useEffect(() => {
    ContentstackLivePreview.init({});
  }, []);

  return (<></>);
}

export default LivePreview