import React from "react";
import User from "./User";

export default function UserList({ data }: any) {
  console.log("render user list");
  return data.length === 0 ? (
    <div className="w-full mt-10 text-xl tracking-wider text-slate-700 text-center">
      No users found
    </div>
  ) : (
    <div className="w-full px-6">
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((item: any) => (
          <User key={item.login.uuid} data={item} />
        ))}
      </div>
      <div className="sm:hidden w-full mt-7 pt-5 border-t-2 border-t-slate-400 flex justify-center items-center">
        <div className="text-base text-slate-400 tracking-wider">No More</div>
      </div>
    </div>
  );
}
