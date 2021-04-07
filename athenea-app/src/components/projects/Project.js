import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import bgEaqip from "../../img/project/bg-eaqip.jpg";
import bgEaqipf from "../../img/project/bg-eaqipf.jpeg";
import {useTranslation} from "react-i18next";
import * as Constants from "../../utils/constants";

const ProjectContentWrap = styled.div`
    border:1px solid #cecece;
    height:100%;
`;

const ProjectTitle = styled.h6`
  font-size:1rem;
  display:inline;
  margin-left:0.3rem;
`;

const Project = (props) => {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);
    const {project} = props;



        return (
            <>
                {project && <ProjectContentWrap className="card" >

                    <div className="card-body">
                        <span className="badge rounded bg-info project-badge">{project.badge}</span><ProjectTitle>{project.title}</ProjectTitle>
                    </div>
                    <div className="card-footer project-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 project-calendar">
                                    <i className="float-left"><FaCalendarAlt/></i>
                                    <span className="float-left ml-2 pt-1"><em className="mr-1">{t('project.from')}</em>{project.dateStart}</span>
                                    <span className="float-left ml-2 pt-1"><em className="mr-1">{t('project.to')}</em>{project.dateEnd}</span>
                                </div>
                                <div className="col-md-2">
                                    <span>{project.completionRate}</span>
                                </div>
                            </div>
                            <div className="row project-location">
                                <div className="col-md-12">
                                    <i className="float-left"><FaMapMarkerAlt/></i>
                                    <span className="float-left ml-2 pt-1">{project.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ProjectContentWrap>}
            </>
        );
}

export default Project;