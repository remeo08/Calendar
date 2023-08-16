import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }

  .form_btn {
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
  }
  .form_btn:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
  }
  .overlay_btn {
    background-color: #ff4b2b;
    color: #fff;
    box-shadow: -5px -5px 10px #ff6b3f, 5px 5px 8px #bf4b2b;
  }
  .sign-in-container {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    transition: all 0.5s;
  }
  .sign-up-container {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
  }
  .overlay-left {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    opacity: 0;
    background-color: #ff4b2b;
    color: #fff;
    transition: all 0.5s;
  }
  .overlay-right {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #ff4b2b;
    color: #fff;
    transition: all 0.5s;
  }
  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
    opacity: 0;
  }
  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 2;
  }
  .container.right-panel-active .overlay-right {
    transform: translateX(-100%);
    opacity: 0;
  }
  .container.right-panel-active .overlay-left {
    transform: translateX(-100%);
    opacity: 1;
    z-index: 2;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  span {
    font-size: 12px;
    color: #000;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  .social-links div:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
  }
  
 `;
