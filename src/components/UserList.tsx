import React from 'react'
import User from './User'

export default function UserList({data}: any) {
  console.log('render user list');
  return (
      data.length === 0 
      ? (
        <div className="w-full mt-10 text-xl tracking-wider text-slate-700 text-center">No users found</div>
      ) : (
        <div className="px-6 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((item: any) => (
            <User key={item.login.uuid} data={item} />
          ))}
        </div>
      )
      
  )
}
