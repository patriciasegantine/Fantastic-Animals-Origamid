//  passo 1 - add as classes "js-tabmenu" (linha24) e "js-tabcontent" (linha50) no HTML para ser usada de forma exclusiva pelo JS.

function initTabNav() {
  // function add para separar de outras funcoes que possam ser criadas.
  //  passo 2 - selecionar os itens no HTML
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  const activeClass = 'active';

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass); // adiciona classe para o item ja iniciar aparecendo.

    //  passo 3 - add classe "active" em cada item do content
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }

    //  passo 4 - add o evento em cada item atraves do loop (forEach)
    tabMenu.forEach((itemMenu, index) => {
      // retorna o item (picture) e o index (posicao)
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
  // passo 5 - add o estilo e animacao no CSS (ver linhas 249)7
}

initTabNav(); // ativando a funcao

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt'); // seleciona od dt's
  const activeClass = 'active';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass); // o dt inicia com a classe ativa
    accordionList[0].nextElementSibling.classList.add(activeClass); // o dd tambem inicia com a classe ativa

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass); // ao clicar no "dt" vai selecionar o proximo elemento "dd"
    }

    accordionList.forEach((item) => {
      // aplica evento aos dt's
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion(); // ativando a funcao

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();

      // os href's e as section's estarao ligadas uma a outra.
      const href = event.currentTarget.getAttribute('href'); // retorna o atributo do href do item clicado dentro do js-menu, por exemplo: "#contato "
      const section = document.querySelector(href); // retorna #contato que é a forma que selecionamos a ID no css "querySelector('#contato)"

      section.scrollIntoView({
        // nao funciona em browser antigos e no safari
        behavior: 'smooth',
        block: 'start',
      });

      // # Forma alternativa #
      // const topSection = section.offsetTop; // pega o topo/inicio da section
      // window.scrollTo({
      //   top: topSection,
      //   behavior: 'smooth',
      // });
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}

initScrollSmooth();

function initAnimaScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const halfWindow = window.innerHeight * 0.7;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;

        if (isSectionVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
    animaScroll();
  }

  window.addEventListener('scroll', animaScroll);
}

initAnimaScroll();
