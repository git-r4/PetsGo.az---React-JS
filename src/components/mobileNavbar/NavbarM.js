
import './navbarM.scss';
import logo from '../../images/navLogo/logo 3.svg';

const NavbarM = ({renderNavlinkForMobile}) => {
    return(
        <>
            <div className="navbarMobile">
                <div className="navbarMobile_content">
                    <div className="navbarMobile_content_box">
                        {renderNavlinkForMobile}
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavbarM;