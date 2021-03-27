import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Colors} from './values/colors.js'
import moment from 'moment'
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles((theme) => ({
    sectionHeader: {
        color: Colors.textPrimary,
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Medium',
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionSubheader: {
        color: Colors.textPrimary,
        textTransform: 'capitalize',
        fontFamily: 'Montserrat-Bold',
        fontSize: '1.1rem',
    },
    contentTitle: {
        color: Colors.textPrimary,
        textTransform: 'none',
        fontFamily: 'Montserrat-Medium',
        fontSize: '1.1rem',
    },
    contentSubtitle: {
        color: Colors.textPrimary,
        textTransform: 'none',
        fontFamily: 'Montserrat-Regular',
        fontSize: '1rem',
    },
    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    icon: {
        color: Colors.primary,
        marginRight: 8,
        fontSize: 20
    }
}))

export default function SectionHeader(props) {
    const classes = useStyles();

    return <React.Fragment>
        <Typography className={classes.sectionHeader}>{props.children}</Typography>
    </React.Fragment>
}

export function SectionSubheader(props) {
    const classes = useStyles();

    return <React.Fragment>
        <Typography className={classes.sectionSubheader}>{props.children}</Typography>
    </React.Fragment>
}

export function ContentTitle(props) {
    const classes = useStyles();

    return <React.Fragment>
        <Typography className={classes.contentTitle}>{props.children}</Typography>
    </React.Fragment>
}

export function ContentSubtitle(props) {
    const classes = useStyles();

    return <React.Fragment>
        <Typography className={classes.contentSubtitle}>{props.children}</Typography>
    </React.Fragment>
}

export function DateRangeText(props) {
    const classes = useStyles();

    let startDate = moment(props.startYear.toString() + props.startMonth.toString().padStart(2, 0), 'YYYYMM').format('MMM. YYYY')

    if (props.endYear == -1) {
        var endDate = 'Today'
    } else {
        var endDate = moment(props.endYear.toString() + props.endMonth.toString().padStart(2, 0), 'YYYYMM').format('MMM. YYYY')
    }

    return <React.Fragment>
        <div className={classes.row}>
            <EventOutlinedIcon className={classes.icon}/>
            <Typography className={classes.contentTitle}>
                {startDate} - {endDate}
            </Typography>
        </div>
    </React.Fragment>
}

export function LocationText(props) {
    const classes = useStyles();

    return <React.Fragment>
        <div className={classes.row}>
            <RoomOutlinedIcon className={classes.icon}/>
            <Typography className={classes.contentTitle}>
                {props.location}
            </Typography>
        </div>
    </React.Fragment>
}