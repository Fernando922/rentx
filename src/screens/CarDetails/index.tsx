import React from "react";
import Acessory from "../../components/Acessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from "./styles";
import Button from "../../components/Button";

const CarDetails = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://pngkit.com/png/full/237-2375888_porsche-panamera-s.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380km/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={accelerationSvg} />
          <Acessory name="800 HP" icon={forceSvg} />
          <Acessory name="Gasolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>
        <About>
          Este é um automóvel sasasiajsias dahsahsasuaushas asasaisjaisja Este é
          um automóvel sasasiajsisasas dahsahsasuaushas asasaisjaisja Este é um
          automóvel sasasiajsias dahsahsasuaushas asasaisjaisja Este é um
          automóvel sadsdsdssasiajsiaas dahsahsasuaushas asasaisjaisja Este é um
          automóvel asassasasiajsias dahsahsasuaushas asasaisjaisja Este é um
          automóvel sasasiajsias dahsahsasuaushas asasaisjaisja Este é um
          automóvel sasasiajsias daasasashsahsasuaushas asasaisjaisja Este é um
          automóvel sasasiajsias dahsahsasuaushas asasaisjaisja
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};

export default CarDetails;
