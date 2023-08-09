// import axios from "axios";
// import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const Paper = styled.div``;
  return (
    <div>
      <Paper style={{ marginBottom: 50 }}>
        <Link to="/" size="large" variant="contained">
          로그인
        </Link>
        <Link to="/signup" size="large" variant="contained">
          회원가입
        </Link>
      </Paper>
    </div>
  );
};

export default Landing;
