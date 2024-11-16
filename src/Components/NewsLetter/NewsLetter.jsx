import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className="container">
      <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
          <input type="email" placeholder='Your Email id'/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
