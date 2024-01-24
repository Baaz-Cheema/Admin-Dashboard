export default function ArticleItem({ data }) {

    return (
        <div className="border border-zinc-700 font-roboto flex flex-col">
            <a href={data.link} className="h-[60%]">
                <img className="object-cover w-full h-full" src={data.image_url} alt="" />
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