const { aboutMe } = data
$('.aboutMe').html(`
    <section id="aboutMeSection" class="site-section section-about text-center">
        <div class="container">
          <div class="section__header text-center">
            <h3>${aboutMe.name}</h3>
            <hr />
          </div>
          <div class="row row_content center">
            <p class="aboutMe__text">
            ${aboutMe.description}   
            <br />
            ${aboutMe.descAccent}
            </p>
            <p class="allWidth mt-2P">
            <a
              href="assets/documents/${aboutMe.cvHref}"
              class="btn btn-primary center"
              target="_blank"
              download
              >${aboutMe.downloadMSN}</a
            >
            </p>
          </div>
        </div>
    </section>
`)
