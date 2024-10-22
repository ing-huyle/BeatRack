import { useContext } from 'react';
import './styles/DrumPad.scss';
import { HandleClickContext } from './App';

const DrumPad = ({ idDrum, idAudio, src }) => {
  const handleClick = useContext(HandleClickContext);
  
  return (
    <div className='drum-pad gray' id={idDrum} onClick={handleClick}>
      {idAudio}
      <audio id={idAudio} src={src}></audio>
    </div>
  );
}

export default DrumPad;