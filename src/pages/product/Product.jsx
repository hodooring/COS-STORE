 

import ProductSearch from '../../components/product/ProductSearch';
import ProductItem from '../../components/product/ProductItem';
import { ProductWrap } from './ProductStyle';
import { useSelector } from 'react-redux';

const Product = () => {
  const {products} = useSelector (state => state.cart)
    return (
      <ProductWrap>
        <div className="inner">
        <h2>  트렌딩나우 </h2>
        
        <ProductSearch />

        <div className="cart-box">
              {
                products.map (item=><ProductItem key={item.id} item={item} />)
              }
        </div>
        </div>
      </ProductWrap>
    );
};

export default Product;