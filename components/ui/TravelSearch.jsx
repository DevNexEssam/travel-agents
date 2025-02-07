"use client"

import { useState } from "react"
import { IoCalendarOutline, IoLocationOutline, IoPeopleOutline, IoSearchOutline } from "react-icons/io5"

export default function TravelSearch() {
  const [dateRange, setDateRange] = useState("")

  return (
    <div className="bg-white rounded-md p-4 border">
      <div className="flex flex-wrap items-center gap-10">
        {/* From Location */}
        <div className=" bg-white rounded-full border border-primary-orange px-2 py-3 flex items-center gap-2">
          <IoLocationOutline className=" h-4 w-4" />
          <input type="text" placeholder="Bali, Indonesia" className=" outline-none w-[80px] lg:w-[130px] text-[12px]" />
        </div>

        {/* To Location */}
        <div className="bg-white rounded-full border border-primary-orange px-2 py-3 flex items-center gap-2">
          <IoLocationOutline className="h-4 w-4" />
          <input type="text" placeholder="Bali, Indonesia" className=" outline-none w-[80px] lg:w-[130px] text-[12px]" />
        </div>

        {/* Date Range */}
        <div className="bg-white rounded-full border border-primary-orange px-2 py-3 flex items-center gap-2">
          <IoCalendarOutline className="h-4 w-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Select a date range"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className=" outline-none w-[80px] lg:w-[130px] text-[12px]"
          />
        </div>

        {/* Guest Selection */}
        <div className="bg-white rounded-full border border-primary-orange px-2 py-3 flex items-center gap-2">
          <IoPeopleOutline className="h-4 w-4" />
          <input type="number" min="1" placeholder="Number of your guest" className=" outline-none w-[80px] lg:w-[130px] text-[12px]" />
        </div>

        {/* Search Button */}
        <button className="h-10 px-4 bg-primary-orange hover:bg-primary-orange/90 text-white rounded-md flex items-center justify-center">
          <IoSearchOutline className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  )
}

