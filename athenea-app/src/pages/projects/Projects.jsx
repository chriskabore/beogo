import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Projects = ()=>  {
    useEffect(() => {
        document.title = Constants.PROJECTS_PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <AtheneaBreadCrumbs/>
                    <h3>Projects</h3>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Projects;