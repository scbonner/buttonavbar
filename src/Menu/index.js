import React from 'react'
import './menu.css'
import { Button } from 'react-router-dom'
import { Link } from 'react-router-dom'





const navLinks = [
    { url: '/j4f', name: 'J4F' },
    // { url: '/projects', name: 'Projects' },
    // { url: '/services', name: 'Services' },
    // { url: '/contact-us', name: 'Contact Us' },
  ];
  
  class Menu extends React.Component {  
    constructor(){
      super();
      this.state = {
        style:"navbar",
        menuStatus:"open"
      };
      this.handleClick = this.handleClick.bind(this);
    };
  
    handleClick() {
      switch(this.state.menuStatus)
      {
        case "open":
          this.setState({
            menuStatus:"close",
            style:"menu active"
          });
          break;
        // case "close":
        //   this.setState({
        //     menuStatus:"open",
        //     style:"menu"
        //   });
        //   break;
      }        
    }
  
    render() {
      return (      
        <div>

            <Link to={'/menu/:username'}>
              <Button > View Profile </Button>
            </Link>
          {/* <button onClick={this.handleClick}>J4F</button>
          <div className={this.state.style}>               
            <ul>
              {navLinks.map(({ url, name }) => (
                <li>
                  <a href={url}>{name}</a>
                </li> */}
              ))}
            {/* </ul>
          </div> */}
        </div>
      );
    }
  }
  

export default Menu