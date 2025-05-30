import ProfileCom from "../components/ProfileCom";
import ProfileDescription from "../components/ProfileDescription";
import BtnLink from "../components/BtnLink";
import { useUserData } from "../server/serves";

function Profile(){
    const userData = useUserData();

    return(
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">الملف الشخصي</h2>
                </div>
                <div className="d-flex">
                    <div className="p-3 ps-0">
                        <BtnLink name='تعديل كلمة المرور' link='/edit-password' class='btn-primary' />
                    </div>
                    <div className="p-3">
                        <BtnLink name='تعديل المعلومات الشخصية' link='/editprofile' class='btn-primary' />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mt-4">
                    <ProfileCom userData={userData} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-7 col-xl-8 col-xxl-9 mt-4">
                    <ProfileDescription userData={userData} />
                </div>
            </div>
        </div>
    )
}

export default Profile;