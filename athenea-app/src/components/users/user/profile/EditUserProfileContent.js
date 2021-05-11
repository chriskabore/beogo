import React, {useRef, useState} from 'react';
import picCoordo from "../../../../img/IMG-coordo-PAAQE.jpg";
import {useTranslation} from "react-i18next";
import * as Constants from "../../../../utils/constants";
import styled from 'styled-components';
import {uploadFile} from '../../../../services/FileService';
import {FaCheckCircle} from 'react-icons/fa';


const ProfileWrap =styled.div`
     border:1px solid #cecece;
     height: 32.4rem;
     overflow-y:scroll;
     padding-top:2rem;
     display:flex-inline;
     padding:0.5rem 1rem 0 1rem;
     overflow-y: scroll;
`;

const Button = styled.button`
     background-color: #4f5b69;
     border-color: #4f5b69;
     height:2rem;
     padding:0.1rem .75rem;
     width:7rem;
     
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

const UserInfoWrap = styled.div`
    min-height: 3rem;
    color:black;
`;

const EditUserProfileContent = (props) => {


    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);

    const [error, setError] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const[message, setMessage] = useState("");
    const [progress,setProgress] = useState(0);
    const [showProgressBar,setShowProgressBar] = useState(false);
    const profilePicInputRef = useRef(null);
    let errorStr = "";

    const handleSaveProfile = (e) => {
        e.preventDefault();
    }

    const handleCancel = (e)=>{
        e.preventDefault();
        props.setEditMode(false);
    }

    const handleFileChange = (event)=>{
        event.preventDefault();

        // get uploaded file
        let fileToUpload = event.target.files[0];
        if(!fileToUpload){
            errorStr = `${t('profile.empty-image-error-text')}`;
            setError(errorStr);
        } else {
            setSelectedFile(fileToUpload);
            setShowProgressBar(true);
        }

        // check file size
        let fileSize = fileToUpload.size;
        if(fileSize >= 2000000){
            //const error="error: File size exceeds limit of 2MB.";
            errorStr =`${t('profile.image-size-error-text')}`;
            setError(error);
        }
        // check file extensions
        if(!fileToUpload.name.match(/.(jpg|jpeg|png|gif|svg)$/i)){
                errorStr = `${t('profile.image-extension-error-text')}`;
                setError(errorStr);
        }




        if(message){
            setMessage("");
        }
        console.log("file To Upload : {}",fileToUpload);
        const url = URL.createObjectURL(fileToUpload);
        console.log("preview Image URL : { }",url);

    }

   const handleFileUpload =()=>{
        setProgress(0);
        uploadFile(selectedFile, (data)=>{
            setProgress(Math.round((100 * data.loaded) / data.total));
        }).then((response)=>{
            console.log("file uploaded!: {}",response);
            setMessage(response.data.message);




        }).then((result)=>{
            setTimeout(()=>{
                profilePicInputRef.current.value ="";
                profilePicInputRef.current.files=null;
                setShowProgressBar(false);
                setMessage(null);
                setProgress(0);
            },1500);

            console.log(result);
            }).catch((error)=>{
            setProgress(0);
            setError("An error occurred! File not uploaded!");
            setSelectedFile(null);
        });




    }

        return (
            <div className="user-profile-content">
                <ProfileWrap>
                    <div className="row">
                        <div className="col-md-4 pt-1 px-4 pb-2">
                            <UserInfoWrap>
                                <img src={picCoordo} className="img-fluid rounded-circle profile-user-avatar align-items-center justify-content-center"/>
                                <div className="profile-user-info ml-3 pt-3">
                                    <div className="profile-user-name">Kirsi Armand KABORE</div>
                                    <div className="profile-user-position mt-2">Project coordinator</div>
                                </div>
                            </UserInfoWrap>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 pt-4 px-4">
                            <div className="float-right">
                                <Button className="btn btn-primary mr-2" onClick={handleSaveProfile}>{t('global.save-text')}</Button>
                                <Button className="btn btn-primary ml-3" onClick={handleCancel}>{t('global.cancel-text')}</Button>
                            </div>
                        </div>

                    </div>
                    <hr className="profile-header-divider mt-1 mb-1"></hr>
                            Edit
                    <div className="profile-bio-wrap pt-1 mt-2">
                        <div className="row">
                            <div className="col-md-9">
                                <section className="profile-section rounded">
                                    <h3 className="profile-section-title">Basic Info</h3>
                                    <div className="profile-name-wrap profile-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-name-label profile-info-label">NAME</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-name-text profile-info-text">
                                                    Kirsi Armand KABORE
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-birthday-wrap profile-intermediate-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-birthday-label profile-info-label">BIRTHDAY</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-birthday-text profile-info-text">
                                                    23 December 1958
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-gender-wrap profile-intermediate-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-gender-label profile-info-label">GENDER</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-gender-text profile-info-text">
                                                    Male
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-password-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-password-label profile-info-label">PASSWORD</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-password-text profile-info-text">
                                                    ********
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="profile-section rounded mt-3">
                                    <h3 className="profile-section-title">Contact Info</h3>
                                    <div className="profile-email-wrap profile-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-name-label profile-info-label">EMAIL ADDRESS</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-email-text profile-info-text">
                                                    kirsikabore@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-mobile-wrap profile-intermediate-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-mobile-label profile-info-label">MOBILE</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-mobile-text profile-info-text">
                                                    70 00 00 00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-work-wrap profile-intermediate-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-work-label profile-info-label">WORK TELEPHONE</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-work-text profile-info-text">
                                                    25 00 00 00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-address-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-address-label profile-info-label">ADDRESS</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-address-text profile-info-text">
                                                    rue 26.405, porte 000, kampala, secteur 26, Ouagadougou
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="profile-section rounded mt-3">
                                    <h3 className="profile-section-title">Professional Info</h3>
                                    <div className="profile-organization-wrap profile-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-organization-label profile-info-label">ORGANIZATION</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-organization-text profile-info-text">
                                                    Ministry of National Education
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-department-wrap profile-intermediate-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-department-label profile-info-label">DEPARTMENT</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-department-text profile-info-text">
                                                    Education Access and Quality Improvement Project(EAQIP)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-position-wrap profile-intermediate-section-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-position-label profile-info-label">POSITION</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-position-text profile-info-text">
                                                    Project Unit Coordinator
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-start-date-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <div className="profile-start-date-label profile-info-label">HIRE DATE</div>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <div className="profile-start-date-text profile-info-text">
                                                    02 April 2015
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <img src={picCoordo} className="img-fluid rounded align-items-center justify-content-center profile-picture-big"/>
                                    </div>

                                </div>
                                <div className="file-input-wrap">
                                    <label className="btn btn-default">
                                        <input type="file" className="file-input" onChange={handleFileChange} ref={profilePicInputRef} id="profile-pic-input"/>
                                    </label>

                                    <div className="progress-bar-wrap">
                                        {showProgressBar && (
                                            <div className="progress">
                                                <div
                                                    className="progress-bar progress-bar-info progress-bar-striped bg-info"
                                                    role="progressbar"
                                                    aria-valuenow={progress}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    style={{ width: progress + "%" }}
                                                >
                                                    {progress}%
                                                </div>
                                            </div>

                                        )}


                                    </div>

                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 upload-btn-wrap d-flex justify-content-center mb-4">
                                            <Button className=" btn btn-primary upload-btn" onClick={handleFileUpload}>{t('global.upload-file-text')}</Button>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>

                                </div>
                                {
                                    error && (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    )}
                                {message && (<div className="alert alert-info upload-msg" role="alert">
                                    <span className="mr-3"><FaCheckCircle className=" fa fa-lg"/></span>{message}
                                </div>)}

                            </div>
                        </div>
                    </div>
                </ProfileWrap>
            </div>
        );
}

export default EditUserProfileContent;