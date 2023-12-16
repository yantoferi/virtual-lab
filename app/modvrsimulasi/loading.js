"use client"

import ReactLoading from "react-loading"

export default function Loading() {
  return (
    <div className="w-full h-full relative">
      <ReactLoading type="bars" color="orange" width={80} height={80} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}