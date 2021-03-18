import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import * as Constants from '../../utils/constants';
import styled from 'styled-components';



 const BreadcrumbsWrap = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  width:100%;
  height:2rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding-left: 0.4rem;  
 `;
const AtheneaBreadCrumbs = (props) => {
     const {location :{pathname},
         history} = props;
    console.log("we are here :",pathname);
    const pathNames = pathname.split('/').filter(x =>x);
    console.log("pathNames :", pathNames);

    return (
            <>
                <BreadcrumbsWrap>
                    <MUIBreadcrumbs aria-label="breadcrumb">
                        { (pathNames.length >0 ) ?
                            (<Link onClick={() =>history.push(Constants.HOME_PATHNAME)}>Athenea M&E</Link>) :
                            (<Typography>Athenea M&E</Typography>)
                        }

                        {pathNames.map((name, index)=>{
                            const routeTo = `/${pathNames.slice(0, index +1).join(Constants.HOME_PATHNAME)}`;
                            const isLast = index === pathNames.length -1;
                            return isLast ? (<Typography key={name}>{name}</Typography>)  :(<Link  key={name} onClick={() =>history.push(routeTo)}>{name}</Link>);
                        })}
                    </MUIBreadcrumbs>
                </BreadcrumbsWrap>
            </>
        );
}

export default withRouter(AtheneaBreadCrumbs);