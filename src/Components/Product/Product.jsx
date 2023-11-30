import './Product.css'
import CleanBucket from '../../assets/cleaningbucket.jpg'
const Product = () => {
  return (
    <div className=' product'>
        <div className="product__info">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et temporibus voluptate?
            </p>
        <p className='product__price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className="product__rating">
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
        <img className=' product__image' src={CleanBucket} alt="" />  
        <button className=' product__btn'>Add to cart</button>
        </div>
        </div>
    </div>
  )
}
export default Product