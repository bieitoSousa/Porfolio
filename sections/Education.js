const { education } = data
$('.education').html(
  `
<section
id="educationSection"
class="site-section section-services overlay text-center"
>
<div class="container">
  <div class="section__header">
    <h3>${education.name}</h3>
    <hr />
  </div>
        ${education.docs.map(item => (
    `<div class="row row_content">
                        <div class="row__start">
                          <p>${item?.duration || ''}</p>
                        </div>
                        <div class="row__end">
                          <p>${item?.name || ''}</p>
                        </div>
    </div>`

  )).join('')}
        </div >
    </section >
  `
)
