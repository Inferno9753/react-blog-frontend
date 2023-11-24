import { useEffect, useState } from 'react';
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("https://react-blog-k0nh.onrender.com/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="data:image/png;base64,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"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                {cats.map((c,index) => (
                    <Link to={`/?cat=${c.name}`} className="link" key={index}>
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                  ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar