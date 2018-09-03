import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        display: 'flex',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,

        marginTop: theme.spacing.unit * 2,
        maxWidth: 360,
        minWidth: 360
    },
    label: {
        flex: 1,
        margin: 'auto'
    },
    button: {}
});

const TodoItem = ({ classes, label, done, id, handle }) => (
    <Paper className={classes.root} elevation={4}>
        <Typography variant="title" className={classes.label}>
            {label}
        </Typography>
        <Button
            variant="fab"
            color={done ? 'primary' : 'secondary'}
            size="medium"
            className={classes.button}
            onClick={handle(id)}
        >
            {done ? 'Undo' : 'Do'}
        </Button>
    </Paper>
);

TodoItem.propTypes = {
    classes: PropTypes.object,
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    handle: PropTypes.func.isRequired
};

export default withStyles(styles)(TodoItem);
