import './Offers.css'
import u2 from '../Assets/u2.jpg'

export default function Offers() {
  return (
    <div className="container">
      <div className='offers'>
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={u2} alt="" />
        </div>
      </div>
    </div>
  )
}
