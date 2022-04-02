import React from "react";

const UsAddress = () => {
  return (
    <div className="border p-8 bg-green-100 w-full">
      <div className="flex justify-between items-center md:pl-16">
        <div>
          <h1>Street: 1203 SN Street</h1>
          <h1>City: New York</h1>
          <h1>Phone: +1(607)2333333</h1>
          <h1>Email: contact.usa@cc.com</h1>
        </div>
        <div className="md:pr-16">
          <h1 className="text-2xl">USA OFFICE</h1>
        </div>
      </div>
    </div>
  );
};

export default UsAddress;
