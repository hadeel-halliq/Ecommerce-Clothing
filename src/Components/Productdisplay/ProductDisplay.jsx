import './ProductDisplay.css'
import star from '../Assets/st.jpg'
import star_dull from '../Assets/pop.jpg'

export default function ProductDisplay(props) {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplar-right-star">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star_dull} />
            <p>{122}</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div> 
        <div className="productdisplay-right-desc">
          A lightweight, usually knitted, pullover shirt, close-fitting and with around neckline and short sleeves, worn as an undershirt or outer garment
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

