
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import vision from '../../Images/vision.jpg';
import mission from '../../Images/mission.jpeg';
import values from '../../Images/values.jpg';
import { createurl, log } from '../../env';
import axios from 'axios';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function About() {
  const [validUser, setValidUser] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    const load = () => {
      var userId = sessionStorage.getItem("userId") ? sessionStorage.getItem("userId") : 0;
      var jwtToken = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : 'notoken';
      const url = createurl('/users/verifyToken');
      axios.post(url,
        {
          "userId": userId,
        },
        {
          headers: {
              'authorization': `Bearer ${jwtToken}`
          }
        })
        .then(res => {
          if(res.status === 400 || res.status === 401){
            log(res.data);
            setValidUser(false);
          }else if(res.status === 200){
            log(res.data);
            setValidUser(true);
          }
        })
        .catch(error => {
          log(error);
          setValidUser(false);
        });
    };

    load();
  }, []);

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <Container>
        <Navbar/>
{/* {
  validUser ? <Nav/> : <Navw/>
} */}

<div className="page">

  <div className="header">
    <h1>ABOUT US</h1>
  </div>

  <div className="top-section">
    <div className="acontent">
      <h3>Who We Are</h3>
      <p>Foodie, where culinary diversity meets the convenience of your doorstep. We are a passionate team 
        dedicated to bringing the world's flavors to your table. Our multicuisine delivery system is designed 
        to elevate your dining experience, offering a delightful journey through an array of delectable dishes 
        from various cuisines.
      </p>
      <button className='btn btn-info' onClick={goToContact}>Contact Us</button>
    </div>
  </div>

  <div className="mid-section">
    <h1>What Sets Us Apart</h1>

    <div className="features">

    <div className="feature">
        <div className="icon">
            <i className="fa-solid fa-address-card"></i>
        </div>
        <div className="acontent">
            <h3>Global Culinary Diversity</h3>
            <p>We take pride in curating a diverse menu that spans continents. From the vibrant spices 
                of Asia to the hearty flavors of Europe and the bold tastes of the Americas, our app 
                is a gateway to a world of culinary excellence.
            </p>
        </div>
    </div>

    <div className="feature">
        <div className="icon">
            <i className="fa-solid fa-book-atlas"></i>
        </div>
        <div className="acontent">
            <h3>Effortless Ordering:</h3>
            <p>We understand the value of your time. Our user-friendly app ensures a hassle-free ordering 
                process, allowing you to explore, select, and order your favorite dishes with just a few taps.
            </p>
        </div>
    </div>

    <div className="feature">
        <div className="icon">
            <i className="fa-regular fa-comments"></i>
        </div>
        <div className="acontent">
            <h3>Quality Assurance:</h3>
            <p>We prioritize your satisfaction, partnering with top restaurants and chefs to deliver dishes of the 
                highest quality, freshness, and taste. Our efficient delivery ensures your favorite cuisines reach
                your doorstep promptly, still hot and bursting with flavor.
            </p>
        </div>
    </div>

    </div>

  </div>

  <div className="bottom-section">

    <div className="vision card">
        {/* <div className="image">
            <img src="../images/vision.jpg" alt=""/>
        </div> */}
        <div className="acontent">
            <h3>Our Vision</h3>
            <p>At foodie, we believe that great food has the power to connect people, transcend borders, 
                and create unforgettable moments. Our mission is to simplify and enhance your dining 
                experience by providing a seamless platform that brings the finest cuisines from around the 
                globe to your home or office.
            </p>
        </div>
    </div>

    <div className="mission card">
        <div className="acontent">
            <h3>Our Mission</h3>
            <p>At foodie, we believe that great food has the power to connect people, transcend borders, 
                and create unforgettable moments. Our mission is to simplify and enhance your dining 
                experience by providing a seamless platform that brings the finest cuisines from around 
                the globe to your home or office.
            </p>
        </div>
        {/* <div className="image">
            <img src="../images/mission.jpeg" alt=""/>
        </div> */}
    </div>

    <div className="values card">
        {/* <div className="image">
            <img src="../images/values.jpg" alt=""/>
        </div> */}
        <div className="acontent">
            <h3>Core Values</h3>
            <p>At foodie, we believe that great food has the power to connect people, transcend borders, 
                and create unforgettable moments. Our mission is to simplify and enhance your dining experience 
                by providing a seamless platform that brings the finest cuisines from around the globe 
                to your home or office.
            </p>
        </div>
    </div>

  </div>

  <div className="team">

    <h1>MEET OUR TEAM</h1>
    <div className='team-info'>Behind foodie is a dedicated team of food enthusiasts, tech experts, and customer service professionals. We are united by a shared passion for good food and a commitment to providing an exceptional service experience. From chefs who craft culinary masterpieces to the tech wizards who ensure a seamless app experience, each member of our team plays a vital role in bringing the world's cuisines to you.</div>
    <div className="persons">
        
        <div className="person card">
        <div className="small">
            <img src={"https://cdn-icons-png.flaticon.com/128/560/560277.png"} alt=""/>
            <h4>John Doe</h4>
            <p>Database Expert</p>
            <p>Ensured efficient and secure data storage, retrieval, and management, optimizing database performance.</p>
        </div>
        </div>

        <div className="person card">
          <div className="small">
            <img src={"https://cdn-icons-png.flaticon.com/128/4140/4140048.png"} alt=""/>
            <h4>Richard Roe</h4>
            <p>UI/UX Designer</p>
            <p>Crafted an engaging and user-friendly interface, enhancing the overall user experience and visual appeal.</p>
        </div>
        </div>

        <div className="person card">
        <div className="small">
            <img src={"https://cdn-icons-png.flaticon.com/128/4140/4140047.png"} alt=""/>
            <h4>Jane Doe</h4>
            <p>Web Java Developer</p>
            <p>Implemented robust backend logic and functionality using Java and dynamic behavior.</p>
        </div>
        </div>

        <div className="person card">
        <div className="small">
            <img src={"https://cdn-icons-png.flaticon.com/128/236/236832.png"} alt=""/>
            <h4>John Smith</h4>
            <p>CI/CD Engineer</p>
            <p>Established a seamless and automated Continuous Integration/Continuous Deployment pipeline.</p>
        </div>
        </div>
    </div>

  </div>

  <Footer/>

</div>
    </Container>
  )
}

const Container = styled.div`
background-color: #eaf5ff;
width: 100%;

.page{
  background-color: #eaf5ff;

  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;

    @media(max-width: 400px){
      padding-top: 0.5rem;
    }

    h1{
      text-align: center;
      font-size: 3rem;
      font-weight: 700;
      margin-top:1.5rem;

      @media(max-width: 768px){
        font-size: 2.5rem;
      }
      @media(max-width: 550px){
        font-size: 2rem;
      }
    }
  }
  
  .top-section{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    background-color: #427baa;
    padding-block: 1rem;

    @media(max-width: 400px){
      margin-top: 0.5rem;
    }

    .acontent{
      width: 50%;
      color: white;
      background-color: #122b40;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;

      @media(max-width: 1000px){
        width: 70%;
      }
      @media(max-width: 400px){
        width: 90%;
        padding: 0.8rem;
      }

      h3{
        @media(max-width: 550px){
            font-size: 1.2rem;
            line-height: 1;
          }
      }

      p{
        text-align: justify;

        @media(max-width: 550px){
            font-size: 0.8rem;
        }
      }

      button{
        transition: all 0.3s;
        font-weight: 600;

        @media(max-width: 550px){
            font-size: 0.8rem;
            padding: 0.2rem 1rem;
        }
      }
      button:hover{
        transform: scale(0.9);
      }
    }
  }

  .mid-section{
    margin-block: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1{
      text-align: center;
      font-size: 3rem;
      font-weight: 700;

      @media(max-width: 768px){
        font-size: 2.5rem;
      }
      @media(max-width: 550px){
        font-size: 2rem;
      }
    }

    .features{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      align-items: center;
      width: 90%;
      gap: 1.5rem;

      @media(max-width: 800px){
        grid-template-columns: repeat(2, 1fr);
      }
      @media(max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
        gap: 0.5rem;
      }


      .feature{
        min-height: 14rem;
        background-color: #427baa;
        display: flex;
        align-items: center;
        color: #fff;
        gap: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        border: 2px solid #0766AD;

        @media(max-width: 1200px){
          gap: .5rem;
        }
        @media(max-width: 600px){
          min-height: 0;
          padding: 0.5rem;
        }

        .icon{
            color: #122b40;
            height: 4rem;
            width: 4rem;
            line-height: 4rem;
            border-radius: .5rem;
            font-size: 2rem;
            margin-left: .2rem;
            background-color: white;
            text-align: center;
            padding: 0 0.8rem;
            transition: 0.3s ease-in-out;

            @media(max-width: 1200px){
              height: 2.5rem;
              width: 2.5rem;
              line-height: 2.5rem;
              font-size: 1.5rem;
              padding: 0 0.8rem 0 0.5rem;
              margin-left: 0;
            }

            @media(max-width: 1000px){
              display: none;
            }
            @media(max-width: 1000px){
              display: block;
            }
        }

        .content{

          h3{
            @media(max-width: 1200px){
              line-height: 1;
              font-size: 1.5rem;
            }
            @media(max-width: 1000px){
              line-height: 0.8;
              font-size: 1.2rem;
            }
          }

          @media(max-width: 1200px){
            line-height: 1;
          }
        }
      }

      .feature:hover .icon{
          background-color: #122b40;
          color: white;
      }

    }
  }

  .bottom-section{
    background-color: #427baa;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
    padding: 2rem;

    @media(max-width: 768px){
      grid-template-columns: repeat(1,1fr);
    }

    .card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 15rem;
      padding: 1rem;

      h3{
        text-align: center;

        @media(max-width: 1100px){
          line-height: 1;
          font-weight: 900;
        }
        @media(max-width: 1100px){
          font-size: 1.2rem;
        }

        @media(max-width: 768px){
          font-size: 2rem;
        }
        @media(max-width: 500px){
          font-size: 1.2rem;
          line-height: 1;
        }
      }

      p{
        font-weight: 600;
        font-size: 1.2rem;
        text-align: justify;

        @media(max-width: 1100px){
          line-height: 1.2;
        }
        @media(max-width: 1100px){
          font-size: 1rem;
        }

        @media(max-width: 768px){
          font-size: 1.2rem;
        }
        @media(max-width: 500px){
          font-size: 1rem;
        }
      }
    }

    .vision{
      background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${vision});
      background-size: cover;
      background-position: center;
      color:white;
    }
    .mission{
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mission});
      background-size: cover;
      background-position: center;
      color:white;
    }
    .values{
      background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${values});
      background-size: cover;
      background-position: center;
      color:white;
    }
  }

  .team{
    margin-block: 1rem;
    margin-bottom: 2rem;

    h1{
      text-align:center;
      font-size: 3rem;
      font-weight: 700;

      @media(max-width: 768px){
        font-size: 2.5rem;
      }
      @media(max-width: 550px){
        font-size: 2rem;
      }
    }

    .team-info{
        padding-inline: 5rem;
        font-weight: 600;
        text-align: justify;

        @media(max-width: 1000px){
            font-size: 0.8rem;
        }
        @media(max-width: 768px){
            padding-inline: 2rem;
            font-size: 0.7rem;
        }
    }

    .persons{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        padding: 1rem;

        @media(max-width: 900px){
            grid-template-columns: repeat(2, 1fr);
        }

        .person{
          background-color: #427baa;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color:white;

          .small{
          }

          @media(max-width: 768px){
            padding: 0.5rem;
            min-height: 15rem;
          }
          @media(max-width: 650px){
            min-height: 0;
          }
          
          
          img{
            background: white;
            border-radius: 50%;
            padding: 0.5rem;
            margin: 0 auto;

            @media(max-width: 1000px){
              width: 7rem;
            }
            @media(max-width: 768px){
              width: 4rem;
            }
          }

          h4{
            @media(max-width: 1000px){
              font-size: 1rem;
              line-height: 1;
            }
          }

          p{
            @media(max-width: 1000px){
              font-size: 0.7rem;
              margin: 0;
            }
          }
        }

      
    }
  }

}
`;

export default About