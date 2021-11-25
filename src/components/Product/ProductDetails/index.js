import React from 'react';
import ProductActions from './ProductActions';
import ProductDescription from './ProductDescription';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';

import { useParams } from 'react-router-dom';
import { useProduct } from '../../../hooks/useProduct';
import useScrollTop from '../../../hooks/useScrollToTop';

function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  useScrollTop();

  return (
    <div className="container mx-auto px-4">
      {loading && (
        <div>
          <h3>Loading Product...</h3>
        </div>
      )}

      {error && <p>{error}</p>}

      {product && !loading && (
        <div className="pt-16 pb-24 flex flex-col justify-between lg:flex-row">
          <ProductImages name={product.name} />

          <div className="lg:w-1/2 pt-8 lg:pt-0 px-5">
            <ProductInfo
              name={product.name}
              price={product.price}
              active={product.active}
            />
            <ProductActions product={product} />
            <ProductDescription description={product.description} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
