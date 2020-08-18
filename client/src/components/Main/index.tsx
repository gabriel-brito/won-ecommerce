import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of an atom and React Avançado written on the side."
    />
    <S.Title>{title}</S.Title>
    <S.Description>
      {description}
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer looking to a screen with code."
    />
  </S.Wrapper>
)

export default Main
