import {FaTumblrSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const HadithContainer = ({hadith, reference,color, onsubmit}) => {
    
    return ( 
        <div className="container">
              <div style={{color:color}}>
              <FaQuoteLeft className="icon" style={{color:color}}/>
                  {hadith}
              <FaQuoteRight className="icon quote-right" style={{color:color}} />

              </div>
              <div className="social">
                 <FaTumblrSquare className="icon btn" style={{color:color}}/>
                 <FaTwitterSquare className="icon btn" style={{color:color}}/>
                 </div>
               <div className="reference right" style={{color:color}} >{"-"+reference}</div>
               <button className="right btn" style={{backgroundColor:color}}
               onClick={onsubmit}
               >New Hadith</button>
        </div>
     );
}
 
export default HadithContainer;