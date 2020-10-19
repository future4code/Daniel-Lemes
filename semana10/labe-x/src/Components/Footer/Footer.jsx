import React from "react";
import Image from "../../IMG/LOGO.png";
import { ContainerFooter, ModTop, MainTitle, TitleH3, Title, CopyRigth, ModMid, Logo } from "./styled"
import {AnimationFooter} from "../Animation/AnimationFooter"

const Footer = () => {

  return (
    <div>
      <ContainerFooter>
        <ModTop>
          <MainTitle>
            <TitleH3>Serviços</TitleH3>
            <Title>Design</Title>
            <Title>Saúde</Title>
            <Title>Ensino</Title>
            <Title>Assistência Técnica</Title>
          </MainTitle>
          <MainTitle>
            <TitleH3
            >Institucional</TitleH3>
            <Title>Quem somos</Title>
            <Title>Trabalhe conosco</Title>
            <Title>Guia Future Ninjas</Title>
          </MainTitle>
          <MainTitle>
           <AnimationFooter /> 
          </MainTitle>

        </ModTop>

        <CopyRigth>
          <ModMid>
            © Todos os Direitos reservados. <Logo src={Image} />
          </ModMid>
        </CopyRigth>


      </ContainerFooter>
    </div >
  )
}
export default Footer

