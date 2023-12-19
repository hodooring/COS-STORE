import styled from 'styled-components'

export const SpinnerWrap = styled.div`
.spinner {
  position: fixed; z-index: 10; left: 0; top: 0;
  width:100%; height:100%;
}
.spinner-circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  padding: 0.5rem 1rem;
}

.spinner-circle:before {
  z-index: 5;
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 3px dashed skyblue;
  width: 50px;
  height: 50px;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  animation: loading 1s linear infinite;
}

.spinner-circle:after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 3px dashed skyblue;
  width: 50px;
  height: 50px;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  animation: loading 1s ease infinite;
  z-index: 10;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`