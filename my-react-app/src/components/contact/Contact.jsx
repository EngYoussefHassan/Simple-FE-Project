import "./contact.css";
import Map from "../map/Map";

const Contact = () => {
  return (
    <div className="contact__section">
      <div className="contact__container">
        <div className="contact__left">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact__form"
          >
            <h1 className="contact__title">Contact Us</h1>
            <input
              type="hidden"
              name="access_key"
              value="1f2c4702-6cf0-4ce7-b13e-156771b5b284"
            ></input>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="first_name"
              className="contact__input"
            ></input>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="contact__input"
            ></input>
            <textarea
              id="message"
              rows={10}
              className="contact__textarea"
              placeholder="Write your message"
            ></textarea>
            <button className="contact__btn" type="submit">
              send
            </button>
          </form>
        </div>
        <div className="contact__right">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
