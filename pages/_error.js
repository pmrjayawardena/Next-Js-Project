import React from "react";
import Link from "next/link";
const errorPage = () => {
  return (
    <div>
      <h1>Something Went Wrong</h1>
      <p>
        try
        <Link href="/">
          <a>Going Back</a>
        </Link>
      </p>
    </div>
  );
};

export default errorPage;
