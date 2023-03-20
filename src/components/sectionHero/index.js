import "./styles.css"

function SectionHero() {
  return (
    <section class="hero">
      <div class="container">
        <div class="apresentacao">
          <h2>As melhores opções de apartamentos no coração de Belém.</h2>
          <p>
            Com uma localização privilegiada, nossos apartamentos ficam a poucos
            minutos de distância dos melhores restaurantes, bares, universidades
            e lojas de Belém. Além disso, está próximo das principais atrações
            turísticas, como o shopping Boulevard, a Basílica de Nossa Senhora
            de Nazaré, o Theatro da Paz e o Mercado Ver-o-Peso. Você terá fácil
            acesso a todas as comodidades necessárias para uma vida confortável
            e completa.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5591981848430"
            class="button"
            target="_blank"
            rel="noreferrer"
          >
            Chama no Whatsapp!
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default SectionHero;
