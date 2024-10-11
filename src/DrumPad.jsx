import './styles/DrumPad.scss';

const DrumPad = ({ idDrum, handleClick, idAudio, src }) => {
  return (
    <div className='drum-pad gray' id={idDrum} onClick={handleClick}>
      {idAudio}
      <audio id={idAudio} src={src}></audio>
    </div>
  );
}

export default DrumPad;