import { useState } from 'react';
import { styled } from 'styled-components';

// import Button from './SCButton.jsx';
import Button from './TWButton.jsx';
// import Input from './SCInput.jsx';
import Input from './TWInput.jsx';

// Syntax for styled components 'tagged templates' use standard css code
// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6; 

  return (

    // TAILWIND VERSION

    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-600 to-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
          <Input
            label='Email'
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <Input
            label='Password'
            invalid={passwordNotValid}
            onChange={(event) => handleInputChange('password', event.target.value)}
          />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-600">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>

    // STYLED COMPONENTS VERSION

    // <div id="auth-inputs">
    //   <ControlContainer>
    //       <Input
    //         label='Email'
    //         invalid={emailNotValid}
    //         onChange={(event) => handleInputChange('email', event.target.value)}
    //       />
    //       <Input
    //         label='Password'
    //         invalid={passwordNotValid}
    //         onChange={(event) => handleInputChange('password', event.target.value)}
    //       />
    //   </ControlContainer>
    //   <div className="actions">
    //     <button type="button" className="text-button">
    //       Create a new account
    //     </button>
    //     <Button onClick={handleLogin}>Sign In</Button>
    //   </div>
    // </div>
  );
}
