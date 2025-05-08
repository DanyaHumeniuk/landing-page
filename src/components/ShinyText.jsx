

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationStyle = !disabled
      ? {
        backgroundImage:
        'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 60%)',      
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: '#b5b5b5a4',
          animation: `shine ${speed}s linear infinite`,
        }
      : { color: '#b5b5b5a4' };
  
    return (
      <span className={`inline-block ${className}`} style={animationStyle}>
        {text}
      </span>
    );
  };
  
  export default ShinyText;
  