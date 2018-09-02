import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
    }
});

const TodoItem = ({ classes, label }) => (
    <div>
        <Paper className={classes.root} elevation={12}>
            <Typography component="p">{label}</Typography>
        </Paper>
    </div>
);

TodoItem.propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
};

export default withStyles(styles)(TodoItem);
