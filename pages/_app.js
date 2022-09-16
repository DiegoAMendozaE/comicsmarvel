import StateWrapper from '../components/stateWrapper.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
     <StateWrapper> 
         <Component {...pageProps} /> 
     </StateWrapper>
       
  )

  


}

export default MyApp
