import Map from "./Map";

const Contact = () => {
  return (
    <div className="b-contact" id="contact">
        <h3 className="text text--section">Contact</h3>
      <div className="b-contact__container">
        <div className="b-contact__data">
          <div className="b-contact__data--card">
            <img
              src="./images/location-icon.svg"
              alt="Icono de localización"
              className="b-contact__icon"
            />
            <div>
              <p className="text text--contact">Dirección</p>
              <p className="text text--contact-info">
                Calle Obispo Hurtado, 18
              </p>
              <p className="text text--contact-info">18002 Granada</p>
            </div>
          </div>
          <div className="b-contact__data--card">
            <img
              src="./images/phone-icon.svg"
              alt="Icono de teléfono"
              className="b-contact__icon"
            />
            <div>
              <p className="text text--contact">Teléfono</p>
              <a href="tel:987654321" className="text text--contact-info">
                987654321
              </a>
            </div>
          </div>
          <div className="b-contact__data--card">
            <img
              src="./images/email-icon.svg"
              alt="Icono de email"
              className="b-contact__icon"
            />
            <div>
              <p className="text text--contact">Email</p>
              <a
                href="mailto:email@email.com"
                target="_blank"
                rel="noreferrer"
                className="text text--contact-info"
              >
                email@email.com
              </a>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
