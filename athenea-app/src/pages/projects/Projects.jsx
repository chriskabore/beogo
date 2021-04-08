import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import styled from 'styled-components';
import {useTranslation} from "react-i18next";
import Project from "../../components/projects/Project";
import bgEaqip from "../../img/project/bg-eaqip.jpg";
import bgEaqipf from "../../img/project/bg-eaqipfa.jpeg";


const PageHeader = styled.h4`
    padding-top: 0.7rem;
    padding-left: 0.4rem;
    font-size:1.4rem;
`;

const ProjectListWrap = styled.div`
     border:1px solid #cecece;
     height: 32.4rem;
     overflow-y:scroll;
     padding-top:5rem;
     display:flex-inline;
    
    
     
     
     
 
     
`;

const ProjectWrap = styled.div`
     overflow-y:scroll;
     height: 20rem;
     
 
     
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


    return (
        <>
            <AuthenticatedPagesLayout>
                <PageHeader>{t('sidebar.menu.projects')}</PageHeader>
                <ProjectListWrap>
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