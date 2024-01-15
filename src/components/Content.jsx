const Content = () => {
    return (
        <main className="front container">
            <div className="front-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="front-button">
                    <button className="primary-btn">Shop Now</button>
                    <button className="secondary-btn">Catagory</button>
                </div>
                <div className="shopping">
                    <p>Available on</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="flipkart-logo" id="flipkart-img" />
                        <img src="/images/amazon.png" alt="amazon-logo" id="amazon-img" />
                    </div>
                </div>
            </div>
            <div className="front-image">
                <img src="/images/shoe.png" alt="shoe-image" />
            </div>


        </main>
    );
};

export default Content