import styled from "styled-components";
import colors from '../../assets/colors';
 
const Pagestyles = styled.div`
    background-color: ${colors.CardBackground};
    flex: 1;
    padding-bottom:10vh; 
    overflow:auto;
    overflow-x:hidden;
    min-height:min-content;
    padding-top:1rem;
    scrollbar-width: 0;
::-webkit-scrollbar{
    display:none; 
}
`;

export default Pagestyles;