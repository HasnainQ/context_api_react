import React, {useContext} from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from '../User/User'

const useStyle = createUseStyles({
    wrapper: {
        borderBottom: 'black solid 1px',
        padding: [15, 10],
        textAlign: 'right',
    }
});

const Navigation = () => {
    const user = useContext(UserContext)
    const classes = useStyle();

    return(
        <div className={classes.wrapper}>
            Welcome {user.name}
        </div>
    )
}

export default Navigation;