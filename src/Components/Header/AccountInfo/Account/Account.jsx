import css from "./Account.module.css"
import png from "./avatar.png";
import {NavLink} from "react-router-dom";

const Account = ({token}) => {
    // "Нигде не сказано откуда брать аватар и имя пользователя"

    return (
        <div className={css.account}>
            <div className={css.left}>
                <div className={css.name}>
                    Алексей А.
                </div>
                <div className={css.exit}>
                    <NavLink className={css.logout} to="/logout">
                        Выйти
                    </NavLink>
                </div>
            </div>
            <div className={css.right}>
                <img className={css.avatar} src={png} alt="" />
            </div>
        </div>
    )

}

export default Account