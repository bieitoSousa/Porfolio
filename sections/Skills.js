const { skills } = data
$('.skills').html(`
<section id="skills" 
class="site-section section-skills section-services overlay text-center"
>
  <div class="container">
  <div class="section__header">
  <h3>${skills.name}</h3>
  <hr />
</div>
    <div class="row_content">
          ${skills.docs.map(doc => (`
          <div class="skills-header">
          <i class="${doc?.nameIco} fa-lg mr-10 primary-color"></i>
          <h4>${doc?.name || ''}</h4>
        </div>
        <div class="skills-row">
            ${doc.items.map(item => (`
            <div class="skill">
            <p>${item?.name || ''}</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                data-transitiongoal=${item?.ratio || '0'}
              ></div>
            </div>
            </div>
            `
)).join('')}
        </div>
     `
)).join('')}
        </div>
      </div>
    </section >
  `)
