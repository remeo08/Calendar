// import axios from "axios";
// import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      ...
      <Paper style={{ marginBottom: 50 }}>
        <Link to="/" size="large" variant="contained">
          로그인
        </Link>
      </Paper>
    </div>
  );
};

export default Landing;
