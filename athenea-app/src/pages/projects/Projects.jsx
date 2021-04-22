import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import styled from 'styled-components';
import {useTranslation} from "react-i18next";
import Project from "../../components/projects/Project";
import bgEaqip from "../../img/project/bg-eaqip.jpg";
import bgEaqipf from "../../img/project/bg-eaqipfa.jpeg";
import {Link} from 'react-router-dom';


const PageHeader = styled.h4`
    padding-top: 0.7rem;
    padding-left: 0.4rem;
    font-size:1.4rem;
`;

const ProjectListWrap = styled.div`
     border:1px solid #cecece;
     height: 32.4rem;
     overflow-y:scroll;
     padding-top:2rem;
     display:flex-inline; 
`;

const ProjectWrap = styled.div`
     overflow-y:scroll;
     height: 20rem;
`;

const NewProjectButton = styled.button`
     background-color: #4f5b69;
     border-color: #4f5b69;
     height:2rem;
     padding:0.1rem .75rem;
     &:hover{
        background-color: #9160A6;
        border-color: #9160A6;
        
     }
     &.active{
        background-color: #9160A6;
        border-color: #9160A6;
     }&.visited{
        background-color: #9160A6;
        border-color: #9160A6;
     }&:focus{
         background-color: #9160A6;
        border-color: #9160A6;
        box-shadow: 0 0 0 .2rem rgba(145, 96, 166, 0.3)
     }
`;

const Projects = ()=>  {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);

    useEffect(() => {
        document.title = Constants.PROJECTS_PAGE_TITLE;
    });

    const projectsList= [
        {
            // EAQIP
            title:`${t('project.eaqip.title')}`,
            badge: `${t('project.eaqip.badge')}`,
            location:`${t('project.eaqip.location')}`,
            backgroundPicture:bgEaqip,
            completionRate:'98%',
            dateStart:`${t('project.eaqip.dateStart')}`,
            dateEnd:`${t('project.eaqip.dateEnd')}`
        },
        {
            // EAQIPAf
            title:`${t('project.eaqipaf.title')}`,
            badge: `${t('project.eaqipaf.badge')}`,
            location:`${t('project.eaqipaf.location')}`,
            backgroundPicture:bgEaqipf,
            completionRate:'0%',
            dateStart:`${t('project.eaqipaf.dateStart')}`,
            dateEnd:`${t('project.eaqipaf.dateEnd')}`
        }
    ];

    const handleAddNewProject = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <AuthenticatedPagesLayout>
                <PageHeader>{t('sidebar.menu.projects')}</PageHeader>
                <ProjectListWrap>
                    <div className="row">
                        <div className="col-md-10"></div>
                        <div className="col-md-2">
                            <NewProjectButton className="btn btn-primary" onClick={(e) => handleAddNewProject(e)}>{t('project.add-project-text')}</NewProjectButton>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="container">
                        <div className="row">
                            {projectsList.map((project, projectIndex)=>{
                                    return(
                                        <ProjectWrap key={project.title} index={projectIndex} className={projectsList.length>=2?"col-md-6":"col-md-12"}>
                                            <Project  project={project}/>
                                        </ProjectWrap>
                                    )
                            })}
                        </div>
                    </div>
                </ProjectListWrap>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Projects;