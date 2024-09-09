import { useNavigate } from 'react-router-dom';

type NavigationButtonProps = {
  buttonText: string
  img: string
  path: string
}

function NavigateButton(props: NavigationButtonProps) {
  const {buttonText, img, path} = props
  
  const navigate = useNavigate();

  const handleClick = () => {
    if (path.includes("https://")) {
      window.location.href = path
    } else {
      navigate(path);
    }
      
  };

  return <button onClick={handleClick}>
          <div className="flexbox-column">
            <img className="buttonImage" src={img}></img>
            {buttonText}  
          </div>
        </button>
}

export default NavigateButton;