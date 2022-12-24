const { experience } = data
$('.experience').html(`
<section
id="experienceSection"
class="site-section section-services overlay text-center"
>
<div class="container">
  <div class="section__header">
    <h3>${experience.name}</h3>
    <hr />
  </div>
  ${experience.docs.map(item =>( `
<div class="row row_content">
            <div class="row__start">
              <p>${item?.year || ''}</p>
              <p>${item?.duration || ''}</p>
            </div>
            <div class="row__end">
              <p>${item?.name || ''}</p>
              <p>
                <b>Puesto:</b>&nbsp&nbsp${item?.job || ''}<br />
                <b>Desempeño:</b>&nbsp&nbsp${item?.performance || ''}<br />
                <b>Tecnologías:</b>&nbsp&nbsp${item?.technologies || ''}
              </p>
            </div>
          </div>
          `
)).join('')}
  
        </div >
    </section >
  `)
