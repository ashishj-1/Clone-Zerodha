function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="container" id="supportWrapper">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="m-0">Support Portal</h4>
                    <a href="">Track tickets</a>
                </div>

                <div className="row">
                    <div className="col-md-7">
                        <h2 className="fs-4 mb-3">
                            Search for an answer or browse help topics to create a <br/>ticket
                        </h2>

                        <div className="input-group mb-3">
                            <input
                                className="form-control"
                                placeholder="Eg. how do I activate F&O, why is my order getting rejected"
                            />
                        </div>

                        <div className="link-group d-flex flex-wrap gap-3">
                            <a href="">Track account opening</a>
                            <a href="">Track segment activation</a>
                            <a href="">Intraday margins</a>
                            <br/>
                            <a href="">Kite user manual</a>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <h2 className="fs-4">Featured</h2>
                        <ol className="mt-3 ps-3">
                            <li className="mb-2">
                                <a href="">
                                    Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]
                                </a>
                            </li>
                            <li>
                                <a href="">Rights Entitlements listing in April 2025</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;