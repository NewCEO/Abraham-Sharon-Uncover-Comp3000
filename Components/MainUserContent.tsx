"use client";
import React, { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import UserContentHeader from "./UserContentHeader";

function MainUserContent() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // const toggleMobileSidebar = () => {
  //   setIsMobileSidebarOpen(!isMobileSidebarOpen);
  // };
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto">
      <UserContentHeader
      />
      {isMobileSidebarOpen && <MobileSidebar />}
    </div>
  );
}

export default MainUserContent;
