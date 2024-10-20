import './styles/App.scss';
import $ from 'jquery';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { textActions } from './textSlice';
import DrumPad from './DrumPad';

const keys = [
  'Q', 'W', 'E',
  'A', 'S', 'D',
  'Y', 'X', 'C'
];

const toggleClass = (elementId, addClass, removeClass) => {
  $(`#${elementId}`).addClass(addClass);
  $(`#${elementId}`).removeClass(removeClass);
}

const App = () => {
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);

  const handleClick = (event) => {
    const drumPadId = event.target.id;
    const audioElement = event.target.querySelector('audio');

    dispatch(textActions.setText(drumPadId));
    audioElement.play();
    toggleClass(drumPadId, 'active', 'gray');

    if (timeoutRef) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      toggleClass(drumPadId, 'gray', 'active')
    }, 100);
  }
  
  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    
    if (keys.includes(key)) {
      const audioElement = $(`#${key}`)[0];
      const drumPadId = audioElement.parentElement.id;
      
      dispatch(textActions.setText(drumPadId));
      audioElement.play();
      toggleClass(drumPadId, 'active', 'gray');
    }
  }

  const handleKeyUp = (event) => {
    const key = event.key.toUpperCase();
    
    if (keys.includes(key)) {
      const audioElement = $(`#${key}`)[0];
      const drumPadId = audioElement.parentElement.id;
      
      toggleClass(drumPadId, 'gray', 'active');
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div id='drum-machine'>
      <h1>Drum Machine</h1>
      <div id='display' className="gray">{text}</div>
      <div className='drum-pads'>
        <DrumPad
          idDrum='Heater-1'
          handleClick={handleClick}
          idAudio={keys[0]}
          src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        />
        <DrumPad
          idDrum='Heater-2'
          handleClick={handleClick}
          idAudio={keys[1]}
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'
        />
        <DrumPad
          idDrum='Heater-3'
          handleClick={handleClick}
          idAudio={keys[2]}
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'
        />
        <DrumPad
          idDrum='Heater-4'
          handleClick={handleClick}
          idAudio={keys[3]}
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'
        />
        <DrumPad
          idDrum='Clap'
          handleClick={handleClick}
          idAudio={keys[4]}
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'
        />
        <DrumPad
          idDrum='Open-HH'
          handleClick={handleClick}
          idAudio={keys[5]}
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'
        />
        <DrumPad
          idDrum='Kick-n-Hat'
          handleClick={handleClick}
          idAudio={keys[6]}
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'
        />
        <DrumPad
          idDrum='Kick'
          handleClick={handleClick}
          idAudio={keys[7]}
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'
        />
        <DrumPad
          idDrum='Closed-HH'
          handleClick={handleClick}
          idAudio={keys[8]}
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
        />
      </div>
      <p>Coded by<a href='https://www.linkedin.com/in/ing-huyle' target='_blank'>ing.huyle</a><br/>
        Designed by freeCodeCamp
      </p>
    </div>
  )
}

export default App;