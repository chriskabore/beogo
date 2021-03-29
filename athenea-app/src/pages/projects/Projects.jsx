import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Projects = ()=>  {
    useEffect(() => {
        document.title = Constants.PROJECTS_PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <h3>Projects</h3>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Projects;