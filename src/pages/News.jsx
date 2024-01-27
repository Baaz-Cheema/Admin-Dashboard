import Articles from "../components/news/Articles"
export default function News() {
    return (
        <>
            <h3 className='font-semibold font-poppins mb-1 text-xl'>Latest news</h3>
            <p className='text-gray-400 font-poppins mb-5'>Get the latest news about the cryptoverse.</p>
            <Articles />
        </>
    )
}