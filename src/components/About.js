import aboutText from '../data/aboutText';

const About = () => {
  return (
    <section class="bg-black bg-opacity-50 text-light py-5" id="about">
      <div class="container">
        <div class="card bg-black p-5 bg-opacity-75">
          <div class="card-title">
            <h3 class="mb-3 mb-md-0 pb-3">
              <span class="border-bottom border-warning pb-2 section-header">
                ABOUT
              </span>
            </h3>
          </div>
          <div class="card-text">
            <div class="row g4">
              <div class="col-md">
                <p>{aboutText[0]}</p>
                <p class="d-none d-md-block">{aboutText[1]}</p>
                <p>{aboutText[2]}</p>
                <p class="d-none d-md-block">{aboutText[3]}</p>
              </div>
              <div class="col-md">
                <ul class="list-group list-group-flush list-unstyled">
                  <li class="list-group-item bg-black bg-transparent text-light">
                    <i class="bi-chevron-right"></i>
                    <span class="fw-bold">Email: </span>
                    philipsjoshua96@gmail.com
                  </li>
                  <li class="list-group-item bg-black bg-transparent text-light">
                    <i class="bi-chevron-right"></i>
                    <span class="fw-bold">Phone: </span>+233 559059563
                  </li>
                  <li class="list-group-item bg-black bg-transparent text-light">
                    <i class="bi-chevron-right"></i>
                    <span class="fw-bold">Location: </span>Accra, Ghana
                  </li>
                  <li class="list-group-item bg-black bg-transparent text-light">
                    <i class="bi-chevron-right"></i>
                    <span class="fw-bold">Senior High School: </span>
                    <a
                      class="link-warning no-underline"
                      href="https://www.adisadelcollege.net/home.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Adisadel College
                    </a>
                  </li>
                  <li class="list-group-item bg-black bg-transparent text-light">
                    <i class="bi-chevron-right"></i>
                    <span class="fw-bold">University: </span>
                    <a
                      class="link-warning no-underline"
                      href="https://site.gctu.edu.gh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GCTU
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
