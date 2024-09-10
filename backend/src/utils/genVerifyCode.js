const generateVerifyCode = () => {
    const code = Math.round(( Math.random() + 0.1 ) * 8888 + 200);
    
    return code;
  };
  
  export default generateVerifyCode;