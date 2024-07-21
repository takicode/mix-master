import styled from "styled-components"

const Wrapper = styled.nav`
  background: var(--white);
  padding: 50px;

  .nav-center {
    width:var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    color: var(--primary-500);
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 700;
    letter-spacing: 2px;
  }
  
  .nav-link {
    color: var(--primary-500);
    font-size: 1.5rem;
    font-weight: 700;
    padding-right: 30px;
    transition: var(--transition);
    letter-spacing: 2px;
    :hover {
      color: var(--grey-900);
    }
  }

  .active{
    color: var(--grey-900);
  }

  @media (max-width: 1000px) {
    .nav-center {
      display: flex;
      flex-direction: column;    
    }
    .nav-links {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      justify-content: center;
      align-items: center;
    }
    .nav-link {
      padding-top: 30px;
      
    }
  }
`

export default Wrapper