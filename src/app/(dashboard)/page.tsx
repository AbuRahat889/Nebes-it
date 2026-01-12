import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto">
      <Link href={"/notifications"}>
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors">
          <ArrowBigRight size={50} />
          Go to Notifications Page
        </button>
      </Link>
    </div>
  );
}
