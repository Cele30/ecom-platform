import Featured from '../components/Featured/Featured'
import Brands from '../components/Brands/Brands'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'

function Dashboard() {
  return (
    <div className='container mx-auto px-4'>
      <ProductCarousel />
      <Featured />
      <Brands />
    </div>
  )
}

export default Dashboard
