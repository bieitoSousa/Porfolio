const { onlineCourses } = data
$('.onlineCourses').html(`
<section
  id="experienceSection"
  class="site-section section-services overlay text-center"
>
  <div class="container">
    <div class="section__header">
      <h3>${onlineCourses.name}</h3>
      <hr />
 
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        ${onlineCourses.docs.map((item, index) => (`
            <li ${index === 0 ? `class="active"` : ''} data-target="#myCarousel" data-slide-to="${index}"></li>
            `
          )).join('')}
        </ol>
        <div class="carousel-inner">
            ${onlineCourses.docs.map((item,index) => (`
                <div class="item ${index === 0 ? `active` : ''}">
                  <img
                    src="assets/documents/online_titles/${item?.src}"
                    alt=${item?.alt}
                  />
                </div>
                `
              )).join('')}
          </div>
          <div class="carousel-control-container">
              <a
                class="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
              </div> <!-- carousel-control-container --> 
        </div> <!-- close div myCarousel --> 
      </div> <!-- close div container --> 
    </div> <!-- close div section__header -->
</section>
  `)
