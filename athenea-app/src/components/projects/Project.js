import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import {useTranslation} from "react-i18next";
import * as Constants from "../../utils/constants";

const ProjectContentWrap = styled.div`
    border:1px solid #cecece;
    height:100%;
`;

const ProjectTitle = styled.h6`
  font-size:1rem;
  display:inline;
  margin-left:0.5rem;
`;

const Project = (props) => {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);
    const {project} = props;

    const cardStyle={
        color: "#fff",
        backgroundImage:`url(${project.backgroundPicture}) ` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor:'rgba(0,0,0,0.5)',
        backgroundBlendMode:'darken',



    };

        return (
            <>
                {project && <ProjectContentWrap className="card" >

                    <div className="card-body" style={cardStyle}>
                        <span className="badge rounded bg-info project-badge">{project.badge}</span><ProjectTitle>{project.title}</ProjectTitle>
                    </div>
                    <div className="card-footer project-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="project-calendar">
                                        <i className="float-left"><FaCalendarAlt/></i>
                                        <span className="float-left ml-2 pt-2 project-footer-text"><span className="mr-1">{t('project.from')}</span>{project.dateStart}</span>
                                        <span className="float-left ml-2 pt-2 project-footer-text"><span className="mr-1">{t('project.to')}</span>{project.dateEnd}</span>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <span className="project-completion-rate">{project.completionRate}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="project-location">
                                        <i className="float-left"><FaMapMarkerAlt/></i>
                                        <span className="float-left ml-2 pt-2 project-footer-text">{project.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ProjectContentWrap>}
            </>
        );
}

export default Project;