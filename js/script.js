const accordionList = document.querySelectorAll('.js-accordion dt');

    if(accordionList.length) {
        
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo'); // para o texto ficar aberto

        function activeAccordion(e){
            // console.log(e.currentTarget);
            // console.log(this); // posso usar o this, pois ele faz referência ao item que eu estou clicando no momento
            this.nextElementSibling.classList.toggle('ativo');
            // com essa propriedade seleciono o dd,  que é o próximo elemento logo após o DT, e adiciono a classe ativo ao clique
            this.classList.toggle('ativo');
            // Depois de selecionar os elementos que vou "animar", vou ao CSS mexer em qual efeito eles terão
        }

        // Para não repetir muitos "ativos" coloque ela em uma constante

        accordionList.forEach((item) =>{ 
            item.addEventListener('click', activeAccordion);
        })
    }