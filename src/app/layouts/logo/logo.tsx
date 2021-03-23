import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link as ReactLink } from 'react-router-dom';
import LogoSvg from '../../icons/logo';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
	logoContainer: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center',
		justifyItems: 'center',
	},
	logo: {
		marginRight: '10px',
	},
}));

const Logo = () => {
	const classes = useStyles();

	return (
		<div className={classes.logoContainer}>
			<LogoSvg className={classes.logo} />
			<Link
				to="/"
				color="primary"
				underline="none"
				component={ReactLink}
				className={classes.logoContainer}
			>
				<Typography variant="h6">DApp</Typography>
			</Link>
		</div>
	);
};

export default Logo;
