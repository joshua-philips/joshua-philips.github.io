const Contact = () => {
  return (
    <section
      className="bg-black bg-opacity-50 text-light pt-5 pb-5"
      id="contact-bottom"
    >
      <div className="container">
        <div className="card bg-black p-5 bg-opacity-75">
          <div className="card-title">
            <h3 className="mb-3 pb-3 section-intro">Contact</h3>
          </div>
          <form id="form-bottom">
            <div className="mb-3">
              <label htmlFor="email-bottom" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control has-validation"
                id="email-bottom"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject-bottom" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject-bottom"
                placeholder=""
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message-bottom" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message-bottom"
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
