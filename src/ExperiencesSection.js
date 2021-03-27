import React from "react";
import Grid from '@material-ui/core/Grid';
import {List, ListItem} from "@material-ui/core";
import {ContentSubtitle, ContentTitle, DateRangeText, LocationText, SectionSubheader} from './TextStyles'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    item: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 8,
        paddingTop: 8,
    },
}))

export default function ExperiencesSection(data) {
    const classes = useStyles();

    return <React.Fragment>
        {Object.keys(data).map((title) => (
            <Grid container>
                <Grid item xs={12}>
                    <SectionSubheader>{title}</SectionSubheader>
                </Grid>
                <Grid item xs={12}>
                    <List>
                        {data[title].map((item) => (
                            <ListItem className={classes.item}>
                                <Grid item container xs={12} spacing={4}>
                                    <Grid item xs={5}>
                                        <Grid item xs={12}>
                                            <ContentTitle>
                                                {item['title'].toString()}
                                            </ContentTitle>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DateRangeText start={item['startDate']} end={item['endDate']}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LocationText location={item['location']}/>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Grid item xs={12}>
                                            <ContentTitle>
                                                {item['subtitle'].toString()}
                                            </ContentTitle>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ContentSubtitle>
                                                {item['description'].toString()}
                                            </ContentSubtitle>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        ))}
    </React.Fragment>
}