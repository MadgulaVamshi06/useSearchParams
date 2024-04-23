import React from 'react'

const Home = () => {
  return (
    <div>
       <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to  Online Store</h1>
      <img
        src="https://img.freepik.com/free-vector/shopping-online-landing-page-concept_23-2148539970.jpg?size=626&ext=jpg"
        alt=""
        width="1000px"
        style={{ display: 'block', margin: '0 auto' }}/>
      <p style={{ textAlign: 'center' }}>Discover the latest trends in fashion, electronics, home goods, and more!</p>
      </div>

      <div>
        <h2 style={{ textAlign: 'center' }}>About Us</h2>
        <p style={{ textAlign: 'center' }}>Learn more about our company and our commitment to providing high-quality products and excellent customer service.</p>
      </div>

      <div>
        <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
        <p style={{ textAlign: 'center' }}>Have questions or concerns? Contact our support team for assistance.</p>
      </div>

    </div>
  )
}

export default Home
