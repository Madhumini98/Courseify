import styled from 'styled-components';

export const Container = styled.div`
background-color: #ffffff;
border-radius: 5px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 1512px;
max-width: 100%;
min-height: 982px;
`;

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 margin: 15px 0;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
margin: 60px 0;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
font-size: 40px;
margin: 0;
font-family: Amaranth;
padding-bottom: 30px;
`;

export const Input = styled.input`
background-color: #eee;
border: 1px solid #000000;
padding: 15px 40px;
margin: 15px 0;
width: 75%;
border-radius: 8px;
`;


export const Button = styled.button`
   border-radius: 8px;
   border: 1px solid #AC7118;
   background-color: #AC7118;
   margin: 20px;
   color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    padding: 12px 45px;
    white-space: nowrap;
    transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
   &:hover {
    background-color: #856029;
   }
`;
export const GhostButton = styled(Button)`
background-color: #AC7118;
border-color: #AC7118;
`;

export const Anchor = styled.a`
color: #AC7118;
font-weight: bold;
font-size: 18px;
font-family: Amaranth;
text-decoration: none;
margin: 15px 0;
text-align: right;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #text-align: center;
background: linear-gradient(180deg, #F0DD9C 0%, rgba(238, 188, 11, 0.00) 100%), linear-gradient(to bottom right, #CB8112 0%, rgba(206, 150, 64, 0.77) 12%, rgba(217, 217, 217, 0.00) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #CB8112 0%, rgba(206, 150, 64, 0.77) 12%, rgba(217, 217, 217, 0.00) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #CB8112 0%, rgba(206, 150, 64, 0.77) 12%, rgba(217, 217, 217, 0.00) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #CB8112 0%, rgba(206, 150, 64, 0.77) 12%, rgba(217, 217, 217, 0.00) 50%) top right / 50% 50% no-repeat;
background: linear-gradient(180deg, #F0DD9C 0%, rgba(238, 188, 11, 0.00) 100%), linear-gradient(to bottom right, #CB8112 0%, rgba(206, 150, 64, 0.77) 12%, rgba(217, 217, 217, 0.00) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #CB8112 0%, rgba(206, 150, 64, 0.77) 12%, rgba(217, 217, 217, 0.00) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #CB8112 0%, rgba(206, 150, 64, 0.77) 12%, rgba(217, 217, 217, 0.00) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #CB8112 0%, rgba(206, 150, 64, 0.77) 12%, rgba(217, 217, 217, 0.00) 50%) top right / 50% 50% no-repeat;

background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #000000;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.5px;
    margin: 3px 150px 3px;

    .create-button{
        color: #0E0828;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        cursor: pointer;
        text-decoration: none;
        

        &:hover {
            font-size: 21px;
            text-decoration: underline;
        }
    }
`;