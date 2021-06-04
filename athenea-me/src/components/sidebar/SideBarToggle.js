
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export  const SideBarToggle = styled(Link)`
    margin-let:2rem;
    font-size:1rem;
    height:40px;
    display:flex;
    justify-content: flex-end!important;;
    align-items: center!important;
    color: #ffffff;
    padding-right:0.5rem;
    &:hover{
     color:#9160A6;
     text-decoration:none;
    }
`;