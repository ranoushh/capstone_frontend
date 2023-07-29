import React from 'react'
import '../styling/LandingPage.css'
import { useNavigate } from 'react-router-dom'


export default function LandingPage() {
  const navigate = useNavigate();

  function handleButton(){
    navigate("/signup")
  }

  return (
    <div>
      
    <header>
        <h1>Polyglot Palace</h1>
        <h1>Unlock the World with Language</h1>
    </header>

    <section class="hero">
        <h2>Start Your Language Journey Today</h2>
        <button onClick ={handleButton}class="cta-button">Get Started</button>
    </section>

    <section class="features">
        <div class="feature">
            <img src="icon-1.png" alt="Feature 1"/>
            <h3>Learn Any Language</h3>
            <p>Choose from a wide range of languages and start learning at your pace.</p>
        </div>
        <div class="feature">
            <img src="icon-2.png" alt="Feature 2"/>
            <h3>Interactive Lessons</h3>
            <p>Engaging and interactive lessons designed to make language learning fun.</p>
        </div>
    </section>

    <section class="testimonials">
        <div class="testimonial">
            <img src="user-1.jpg" alt="User 1"/>
            <p>"Polyglot Palace made learning a new language an enjoyable experience! Highly recommended!"</p>
            <h4>John Doe</h4>
        </div>
        <div class="testimonial">
            <img src="user-2.jpg" alt="User 2"/>
            <p>"Thanks to Polyglot Palace, I can now confidently communicate with people from different cultures."</p>
            <h4>Jane Smith</h4>
        </div>
    </section>

    <section class="cta">
        <h2>Join the Polyglot Community Today!</h2>
        <button class="cta-button">Start Learning</button>
    </section>

    <footer>
        <p>&copy; 2023 Polyglot Palace. All rights reserved.</p>
        <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
        </ul>
    </footer>
    
    
    </div>
  )
}
