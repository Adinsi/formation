import React from 'react';
import '../styles/component/Contact.scss'

const Contact = () => {
    return (
      <div id="contact">
        <p>Contacter nous sur :</p>
        <div className="contact">
          <h4>
            <a href="mailto:adinsiabdias@gmail.com">
              <i class="fa-solid fa-envelope-circle-check"></i>
            </a>
          </h4>
          <h4>
            <a href="tel:+229 53037832">
              <i class="fa-solid fa-phone"></i>
            </a>
          </h4>
        </div>

        <small>Copyright c2022 by Abdias Adinsi</small>
      </div>
    );
};

export default Contact;