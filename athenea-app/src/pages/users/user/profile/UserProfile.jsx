import React, {useEffect,useState} from 'react';
import AuthenticatedPagesLayout from "../../../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../../../utils/constants";
import {useTranslation} from "react-i18next";
import UserProfileContent from "../../../../components/users/user/profile/UserProfileContent";
import styled from 'styled-components';
import EditUserProfileContent from "../../../../components/users/user/profile/EditUserProfileContent";


const PageHeader = styled.h4`
    padding-top: 0.7rem;
    padding-left: 0.4rem;
    font-size:1.4rem;
`;

const UserProfile = ({match})=>  {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);
    const [user, setUser] = useState({});
    const [redirectToSignIn,setRedirectToSignIn] = useState(false);
    const [editMode,setEditMode]  = useState(false);

    useEffect(() => {
        document.title = Constants.PROFILE_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <PageHeader>{t('header.my-profile')}</PageHeader>
                { editMode ?(<EditUserProfileContent setEditMode={setEditMode} />):( <UserProfileContent setEditMode={setEditMode}/>)}

            </AuthenticatedPagesLayout>
        </>
    );

}

export default UserProfile;