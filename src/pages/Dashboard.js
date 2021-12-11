import Featured from '../components/Featured/Featured';
import Brands from '../components/Brands/Brands';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import useScrollTop from '../hooks/useScrollToTop';

function Dashboard() {
  useScrollTop();

  return (
    <div className="container mx-auto px-4">
      <ProductCarousel />
      <Featured />
      <Brands />
    </div>
  );
}

export default Dashboard;
