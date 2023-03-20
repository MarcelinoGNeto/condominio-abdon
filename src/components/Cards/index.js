
import ImagensAp2 from "../../images/Ap2";
import imagensAp3 from "../../images/Ap3";
import Card from "./card";
import "./styles.css"

function Cards() {
    return (
        <div className="cards">
            <Card images={ImagensAp2} title="Apartamento 1" description="Sala/Cozinha, suite, lavanderia, todo imobiliado" />
            <Card images={ImagensAp2} title="Apartamento 2" description="Sala/Cozinha, suite, lavanderia, todo imobiliado" />
            <Card images={imagensAp3} title="Apartamento 3" description="Sala/Cozinha, suite, lavanderia, todo imobiliado" />
            <Card images={ImagensAp2} title="Apartamento 4" description="Sala/Cozinha, 2/4, sendo 1 suite, lavanderia, todo imobiliado" />
        </div>
    )
}

export default Cards;