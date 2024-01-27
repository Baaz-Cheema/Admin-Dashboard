import PortfolioChart from "../components/portfollio/PortfolioChart"
import PortfolioData from "../components/portfollio/PortfolioData"
export default function Portfolio() {
    return (
        <div>
            <h3 className='font-semibold font-poppins mb-1 text-xl'>My Portfolio</h3>
            <p className='text-gray-400 font-poppins mb-5'>Take a look at your accumulations and transactions</p>
            <PortfolioChart />
            <PortfolioData />
        </div>
    )
}