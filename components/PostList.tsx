import React from 'react'

type PostItem = {
    title: string,
    body: string,
    id: string,
}

const PostItem = ({title, body}: PostItem) => {
    return (
        <div className="px-4 py-2 mb-4 h-60 overflow-hidden rounded-xl flex flex-col  bg-blue-900 hover:scale-105 duration-300 ease-out">
            <h2 className="my-3 uppercase truncate text-blue-100 font-bold text-xl">{title}</h2>
            <div className="text-blue-200 line-clamp-4 text-base leading-6 font-serif">
                <p>{body}</p>
            </div>
        </div>
    )
}

type PostListPropTypes = {
    data: Array<PostItem>;
}

export default function PostList({data}: PostListPropTypes) {
  return (
    <div className="px-6 w-full grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {data.map(item => (
            <PostItem key={item.id} {...item} />
        ))} 
    </div>
  )
}
