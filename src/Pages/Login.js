import Door from '../Images/Door.jpg';
import '../CSS/login.css';
import { Link, Outlet } from 'react-router-dom';
import LogoUniversity from '../Images/LogoUniversity.jpg';

function Login() {
    return (
        <div className="container login">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className='container-1'>
                        {/* Removed <form> from here since LoginCom has its own form */}
                        <div className="d-flex headForm text-primary">
                            <Link className='text-decoration-none' to={"/team"}><h4 className='text-bold'>اجازاتي</h4></Link>
                            <p></p>
                            <h6 className='text-bold'>جامعة قنا</h6>
                            <img src={LogoUniversity} alt="LogoUniversity" />
                        </div>
                        <Outlet /> {/* LoginCom will render here with its own form */}
                        {/* <div className="wordBottom">
                            <Link to={'/about'} id="emailHelp" className="form-text text-color">سياسة الخصوصية. </Link>
                            <Link to={'/inquiries'} id="emailHelp" className="form-text text-color">الدليل الشامل للأسئلة الشائعة</Link>
                        </div> */}

                        <div className="wordBottom">
                            <span id="emailHelp" className="form-text">تم بواسطة. </span>
                            <Link to={'/team'} id="emailHelp" className="form-text text-color text-primary">طلاب من الدفعة الثانية حاسبات قنا</Link>
                        </div>
                    </div>
                </div>
                <div className="col d-none d-md-block">
                    <img className="rounded img-fluid" src={Door} alt="Door" />
                </div>
            </div>
        </div>
    );
}

export default Login;