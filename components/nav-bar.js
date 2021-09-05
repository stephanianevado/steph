import styled from "styled-components";
import {dark, grey, pink, white} from "./colors";

const NavWrapper = styled.div`
  margin-bottom: 2rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${dark};
`
const NavList = styled.ul`
  display: flex;
  margin-right: 4rem;
  list-style: none;
  position: relative;
  a {
   display: block;
   padding: 0.5rem 1.3rem;
   font-family: Poppins, sans-serif;
   font-size: 0.85rem;
   color: ${white};
   text-decoration: none;
  }
  b {
    color: ${pink};
  }
  a:hover{
    color: ${pink};
  }
`

const Logo = styled.img`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   padding: 0.8rem;
   width: 4rem;
`
const Button = styled.button`
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border:  1px solid ${pink};
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    a {
     display: inline-block;
     margin: 0.25rem;
     padding: 0.1rem;
     color: ${white};
    }
    :hover{
     background-color: ${pink};
     opacity: 0.5;
    }
`
const Li = styled.li`
    display: inheret;
`
export const NavBar = () => {
    return (
        <NavWrapper>
            <Nav>
                <div>
                    <a href="#">
                        <Logo src="/logoportfolio4.svg" alt="logo SVG portfolio"/>
                    </a>
                </div>
                <NavList>
                    <Li>
                        <a href="/about"><b>01.</b> About me</a>
                    </Li>
                    <Li>
                        <a href="/myskills"><b>02.</b> My skills</a>
                    </Li>
                    <Li>
                        <a href="/work"><b>03.</b> Work</a>
                    </Li>
                    <Li>
                        <a href="/contact"><b>04.</b> Contact</a>
                    </Li>
                    <Li>
                        <Button>
                            <a href="#" target="_blank">Resume</a>
                        </Button>

                    </Li>
                </NavList>
            </Nav>
        </NavWrapper>
    )
}