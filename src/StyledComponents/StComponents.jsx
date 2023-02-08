import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: antiquewhite;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white': 'red'};
  
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

const Link = ({ className, href, children, ...restProps }) => (
    <a className={className} href={href} {...restProps}>
        {children}
    </a>
);

const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
`

const ReverseButton = props => <Button {...props} children={props.children.split('').reverse()} />

const StComponents = () => {
  return (
      <Wrapper>
          <Title>StComponents</Title>
          <Button>Обычная кнопка</Button>
          <Button primary>Primary кнопка</Button>
          <TomatoButton>Tomato button</TomatoButton>
          <TomatoButton as="a" href="https://styled-components.com/">Tomato button</TomatoButton>
          <Button as={ReverseButton}>Reverse text</Button>
          <Link href="https://styled-components.com/" className="style" >Styled link</Link>
          <StyledLink href="https://mui.com/material-ui/getting-started/installation/">Styled color Link</StyledLink>
      </Wrapper>

  )};

export default StComponents;