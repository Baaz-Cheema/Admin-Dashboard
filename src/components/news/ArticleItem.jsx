export default function ArticleItem({ data }) {

    return (
        <div className="border border-zinc-700 font-roboto flex flex-col">
            <a href={data.link} className="h-[60%]">
                <img className="object-cover w-full h-full" src={data.image_url ? data.image_url : 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvfGVufDB8fDB8fHww'} alt="" />
            </a>
            <div className="px-3 pt-5 flex flex-col">
                <h3 className="font-semibold mb-3">{data.title}</h3>
            </div>
            <div className="flex gap-3 justify-between text-zinc-400 mt-auto px-3 pb-3">
                <a className="uppercase" href={data.source_url}>
                    {data.source_id}
                </a>
                <span>{data.pubDate.slice(0, 10)}</span>
            </div>
        </div>
    )
}