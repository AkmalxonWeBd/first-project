import React, { useState } from 'react'
import "./dashboard.css"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Dasjboard() {
    const Orders = [
        {
            productName: 'JavaScript Tutorial',
            productNumber: '85743',
            paymentStatus: 'Due',
            status: 'Pending'
        },
        {
            productName: 'CSS Full Course',
            productNumber: '97245',
            paymentStatus: 'Refunded',
            status: 'Declined'
        },
        {
            productName: 'Flex-Box Tutorial',
            productNumber: '36452',
            paymentStatus: 'Paid',
            status: 'Active'
        },
    ]
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div>
            <main>
                <div className="right-section">
                    <div className="nav">
                        <button id="menu-btn"><span className="material-icons-sharp"> menu</span></button>
                        <div className="dark-mode" onClick={toggleDarkMode}>
                            <span className={`material-icons-sharp ${darkMode ? 'active' : ''}`}>
                                <LightModeOutlinedIcon />
                            </span>
                            <span className={`material-icons-sharp ${!darkMode ? 'active' : ''}`}>
                                <DarkModeOutlinedIcon />
                            </span>
                        </div>
                    </div>
                </div>
                <h1>Analytics</h1>
                <div class="analyse">
                    <div class="sales">
                        <div class="status">
                            <div class="info">
                                <h3>Total Sales</h3>
                                <h1>$65,024</h1>
                            </div>
                            <div class="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="percentage">
                                    <p>+81%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visits">
                        <div class="status">
                            <div class="info">
                                <h3>Site Visit</h3>
                                <h1>24,981</h1>
                            </div>
                            <div class="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="percentage">
                                    <p>-48%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="searches">
                        <div class="status">
                            <div class="info">
                                <h3>Searches</h3>
                                <h1>14,147</h1>
                            </div>
                            <div class="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="percentage">
                                    <p>+21%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="recent-orders">
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Number</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Orders.map(order => (
                                <tr key={order.productNumber}>
                                    <td>{order.productName}</td>
                                    <td>{order.productNumber}</td>
                                    <td>{order.paymentStatus}</td>
                                    <td className={order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}>{order.status}</td>
                                    <td className="primary">Details</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <a href="#">Show All</a>
                </div>
            </main>
        </div>
    )
}

export default Dasjboard