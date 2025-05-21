function Brokerage() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <div className="col-7 p-4">
                    <a href="" style={{textDecoration:"none"}}><h3 className="fs-4">Brokerage calculator</h3></a>
                    <ul style={{lineHeight: "2.5", fontSize: "14px"}} className="text-muted">
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-5 p-4">
                    <a href="" style={{textDecoration:"none"}}><h3 className="fs-4">List of charges</h3></a>
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr>
                                <th>Type of account</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Online account</td>
                                <td><span className="badge bg-success">FREE</span></td>
                            </tr>
                            <tr>
                                <td>Offline account</td>
                                <td><span className="badge bg-success">FREE</span></td>
                            </tr>
                            <tr>
                                <td>NRI account (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                            <tr>
                                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;