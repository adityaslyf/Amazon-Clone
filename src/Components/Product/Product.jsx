import "./Product.css";
import CleanBucket from "../../assets/cleaningbucket.jpg";
const Product = () => {
  return (
    <div className=" product flex flex-col items-center justify-end m-10 p-20 w-full max-h-400 min-w-100 bg-white z-1">
      <div className="product__info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          temporibus voluptate?
        </p>
        <p
          className="product__price font-bold
    text-xl
    mt-2 mb-2"
        >
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__info h-[100px] mb-[15px]">
          <div className="product__rating flex">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>

          <img
            className=" product__image max-h-200 object-contain mb-15"
            src={CleanBucket}
            alt=""
          />
          <button className=" product__btn bg-[#f0c14b] border border-solid mt-[10px] border-t-2 border-r-2 border-b-2 border-l-2border-t-[#a88734] border-r-[#9c7e31] border-b-[#846a29] border-l-[#9c7e31]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
