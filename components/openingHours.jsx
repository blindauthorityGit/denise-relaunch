import React from "react";

const OpeningHours = () => (
  <div className="space-y-2">
    <div className="grid grid-cols-[auto_auto] justify-start gap-x-4 whitespace-nowrap">
      <span>Do & Fr</span>
      <span>8 – 18 Uhr</span>
    </div>
    <div className="grid grid-cols-[auto_auto] justify-start gap-x-4 whitespace-nowrap">
      <span>Sa</span>
      <span>8 – 13 Uhr</span>
    </div>
  </div>
);

export default OpeningHours;
