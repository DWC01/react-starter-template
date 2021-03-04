import { makeStyles } from '@material-ui/core/styles';
import ModalBase from '../../../core/modals/modal-base';
import DialogContent from '@material-ui/core/DialogContent';
import ConnectWalletGeneric from '../connect-wallet-generic';
import ConnectWalletMetaMask from '../connect-wallet-metamask';

interface Props {
	isOpen: boolean;
}

const useStyles = makeStyles((theme) => ({
	dialogContentRoot: {
		width: '800px',
		height: '395px',
		paddingTop: '10px !important',
		paddingBottom: '10px',
		paddingLeft: '10px',
		paddingRight: '10px',
	},
	walletsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	walletContainer: {
		width: '400px',
		height: '150px',
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: '12px',
		boxShadow: theme.shadows['3'],
		margin: theme.spacing(2),
		transition: 'all 0.2s ease-in-out',
		'&:hover': {
			boxShadow: theme.shadows['5'],
			backgroundColor: '#eceff1',
		},
	},
	walletImage: {
		width: '45px',
		height: '45px',
	},
	walletName: {
		fontSize: '1.3rem',
		fontWeight: 'bold',
		marginTop: '10px',
	},
	walletInstruction: {
		marginTop: '2px',
	},
}));

const ConnectToAWalletModal = ({ isOpen }: Props) => {
	const classes = useStyles();

	return (
		<ModalBase isOpen={isOpen}>
			<DialogContent className={classes.dialogContentRoot}>
				<div className={classes.walletsContainer}>
					<ConnectWalletMetaMask
						imgSrc="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDM5NyAzNTUiIHdpZHRoPSIzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTIuMDA0NzE3IDEzLjgxMDE5OHYtMTguMDU5NDlsNC4yNDUyODMtNC4yNDkyOTJoMjkuNzE2OTgydjIxLjI0NjQ1OSAxNC44NzI1MjNoLTMxLjgzOTYyNGwtMzkuMjY4ODY4LTE2Ljk5NzE2OXoiIGZpbGw9IiNjZGJkYjIiLz48cGF0aCBkPSJtMTk5LjUyODMwNSAzMjcuMTk1NDcyIDUwLjk0MzM5NyAxMy44MTAxOTh2LTE4LjA1OTQ5bDQuMjQ1MjgzLTQuMjQ5MjkyaDI5LjcxNjk4MXYyMS4yNDY0NTkgMTQuODcyNTIzaC0zMS44Mzk2MjNsLTM5LjI2ODg2OC0xNi45OTcxNjl6IiBmaWxsPSIjY2RiZGIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA0ODMuOTYyMjcgMCkiLz48cGF0aCBkPSJtMTcwLjg3MjY0NCAyODcuODg5NTIzLTQuMjQ1MjgzIDM1LjA1NjY1NyA1LjMwNjYwNC00LjI0OTI5Mmg1NS4xODg2OGw2LjM2NzkyNSA0LjI0OTI5Mi00LjI0NTI4NC0zNS4wNTY2NTctOC40OTA1NjUtNS4zMTE2MTUtNDIuNDUyODMyIDEuMDYyMzIzeiIgZmlsbD0iIzM5MzkzOSIvPjxwYXRoIGQ9Im0xNDIuMjE2OTg0IDUwLjk5MTUwMjIgMjUuNDcxNjk4IDU5LjQ5MDA4NTggMTEuNjc0NTI4IDE3My4xNTg2NDNoNDEuMzkxNTExbDEyLjczNTg0OS0xNzMuMTU4NjQzIDIzLjM0OTA1Ni01OS40OTAwODU4eiIgZmlsbD0iI2Y4OWMzNSIvPjxwYXRoIGQ9Im0zMC43NzgzMDIzIDE4MS42NTcyMjYtMjkuNzE2OTgxNTMgODYuMDQ4MTYxIDc0LjI5MjQ1MzkzLTQuMjQ5MjkzaDQ3Ljc1OTQzNDN2LTM3LjE4MTMwM2wtMi4xMjI2NDEtNzYuNDg3MjUzLTEwLjYxMzIwOCA4LjQ5ODU4M3oiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtODcuMDI4MzAzMiAxOTEuMjE4MTM0IDg3LjAyODMwMjggMi4xMjQ2NDYtOS41NTE4ODYgNDQuNjE3NTYzLTQxLjM5MTUxMS0xMC42MjMyMjl6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkyLjI4MDQ1NyAzNi4wODQ5MDU4IDMzLjk5NDMzNHYzMy45OTQzMzR6IiBmaWxsPSIjZWE4ZDNhIi8+PHBhdGggZD0ibTEyMy4xMTMyMDkgMjI3LjMzNzExNCA0Mi40NTI4MzEgMTAuNjIzMjI5IDEzLjc5NzE3IDQ1LjY3OTg4OC05LjU1MTg4NiA1LjMxMTYxNS00Ni42OTgxMTUtMjcuNjIwMzk4eiIgZmlsbD0iI2Y4OWQzNSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDI2MS4zMzE0NDgtOC40OTA1NjUgNjUuODY0MDI0IDU2LjI1LTM5LjMwNTk0OXoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTc0LjA1NjYwNiAxOTMuMzQyNzggNS4zMDY2MDQgOTAuMjk3NDUxLTE1LjkxOTgxMi00Ni4yMTEwNDl6IiBmaWxsPSIjZWE4ZTNhIi8+PHBhdGggZD0ibTc0LjI5MjQ1MzkgMjYyLjM5Mzc3MSA0OC44MjA3NTUxLTEuMDYyMzIzLTguNDkwNTY1IDY1Ljg2NDAyNHoiIGZpbGw9IiNkODdjMzAiLz48cGF0aCBkPSJtMjQuNDEwMzc3NyAzNTUuODc4MTkzIDkwLjIxMjI2NjMtMjguNjgyNzIxLTQwLjMzMDE5MDEtNjQuODAxNzAxLTczLjIzMTEzMzEzIDUuMzExNjE2eiIgZmlsbD0iI2ViOGYzNSIvPjxwYXRoIGQ9Im0xNjcuNjg4NjgyIDExMC40ODE1ODgtNDUuNjM2NzkzIDM4LjI0MzYyNy0zNS4wMjM1ODU4IDQyLjQ5MjkxOSA4Ny4wMjgzMDI4IDMuMTg2OTY5eiIgZmlsbD0iI2U4ODIxZSIvPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTYuMjUtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIvPjxwYXRoIGQ9Im0yMjkuMjQ1Mjg2IDMyNy4xOTU0NzIgNTUuMTg4NjgtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTEzLjY3OTI1MiAwKSIvPjxwYXRoIGQ9Im0xMzIuNjY1MDk2IDIxMi40NjQ1OTMtMTEuNjc0NTI4IDI0LjQzMzQyNyA0MS4zOTE1MS0xMC42MjMyMjl6IiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyODMuMzcyNjQ2IDApIi8+PHBhdGggZD0ibTIzLjM0OTA1NyAxLjA2MjMyMjk2IDE0NC4zMzk2MjUgMTA5LjQxOTI2NTA0LTI0LjQxMDM3OC01OS40OTAwODU4eiIgZmlsbD0iI2U4OGYzNSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5Ni0xOS4xMDM3NzM5MiA1OC40Mjc3NjI5NCAxMC42MTMyMDc3MiA2My43MzkzNzgxLTcuNDI5MjQ1NDEgNC4yNDkyOTIgMTAuNjEzMjA3NzEgOS41NjA5MDYtOC40OTA1NjYxNyA3LjQzNjI2MSAxMS42NzQ1Mjg0NyAxMC42MjMyMjktNy40MjkyNDU0IDYuMzczOTM4IDE2Ljk4MTEzMjMgMjEuMjQ2NDU5IDc5LjU5OTA1NzctMjQuNDMzNDI4YzM4LjkxNTA5Ni0zMS4xNjE0NzMgNTguMDE4ODY5LTQ3LjA5NjMxOCA1Ny4zMTEzMjItNDcuODA0NTMzLS43MDc1NDgtLjcwODIxNS00OC44MjA3NTYtMzcuMTgxMzAzNi0xNDQuMzM5NjI1LTEwOS40MTkyNjUwNHoiIGZpbGw9IiM4ZTVhMzAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzOTkuMDU2NjExIDApIj48cGF0aCBkPSJtMzAuNzc4MzAyMyAxODEuNjU3MjI2LTI5LjcxNjk4MTUzIDg2LjA0ODE2MSA3NC4yOTI0NTM5My00LjI0OTI5M2g0Ny43NTk0MzQzdi0zNy4xODEzMDNsLTIuMTIyNjQxLTc2LjQ4NzI1My0xMC42MTMyMDggOC40OTg1ODN6IiBmaWxsPSIjZjg5ZDM1Ii8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkxLjIxODEzNCA4Ny4wMjgzMDI4IDIuMTI0NjQ2LTkuNTUxODg2IDQ0LjYxNzU2My00MS4zOTE1MTEtMTAuNjIzMjI5eiIgZmlsbD0iI2Q4N2MzMCIvPjxwYXRoIGQ9Im04Ny4wMjgzMDMyIDE5Mi4yODA0NTcgMzYuMDg0OTA1OCAzMy45OTQzMzR2MzMuOTk0MzM0eiIgZmlsbD0iI2VhOGQzYSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDIyNy4zMzcxMTQgNDIuNDUyODMxIDEwLjYyMzIyOSAxMy43OTcxNyA0NS42Nzk4ODgtOS41NTE4ODYgNS4zMTE2MTUtNDYuNjk4MTE1LTI3LjYyMDM5OHoiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtMTIzLjExMzIwOSAyNjEuMzMxNDQ4LTguNDkwNTY1IDY1Ljg2NDAyNCA1NS4xODg2OC0zOC4yNDM2MjZ6IiBmaWxsPSIjZWI4ZjM1Ii8+PHBhdGggZD0ibTE3NC4wNTY2MDYgMTkzLjM0Mjc4IDUuMzA2NjA0IDkwLjI5NzQ1MS0xNS45MTk4MTItNDYuMjExMDQ5eiIgZmlsbD0iI2VhOGUzYSIvPjxwYXRoIGQ9Im03NC4yOTI0NTM5IDI2Mi4zOTM3NzEgNDguODIwNzU1MS0xLjA2MjMyMy04LjQ5MDU2NSA2NS44NjQwMjR6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTI0LjQxMDM3NzcgMzU1Ljg3ODE5MyA5MC4yMTIyNjYzLTI4LjY4MjcyMS00MC4zMzAxOTAxLTY0LjgwMTcwMS03My4yMzExMzMxMyA1LjMxMTYxNnoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTY3LjY4ODY4MiAxMTAuNDgxNTg4LTQ1LjYzNjc5MyAzOC4yNDM2MjctMzUuMDIzNTg1OCA0Mi40OTI5MTkgODcuMDI4MzAyOCAzLjE4Njk2OXoiIGZpbGw9IiNlODgyMWUiLz48cGF0aCBkPSJtMTMyLjY2NTA5NiAyMTIuNDY0NTkzLTExLjY3NDUyOCAyNC40MzM0MjcgNDEuMzkxNTEtMTAuNjIzMjI5eiIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjgzLjM3MjY0NiAwKSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5NiAxNDQuMzM5NjI1IDEwOS40MTkyNjUwNC0yNC40MTAzNzgtNTkuNDkwMDg1OHoiIGZpbGw9IiNlODhmMzUiLz48cGF0aCBkPSJtMjMuMzQ5MDU3IDEuMDYyMzIyOTYtMTkuMTAzNzczOTIgNTguNDI3NzYyOTQgMTAuNjEzMjA3NzIgNjMuNzM5Mzc4MS03LjQyOTI0NTQxIDQuMjQ5MjkyIDEwLjYxMzIwNzcxIDkuNTYwOTA2LTguNDkwNTY2MTcgNy40MzYyNjEgMTEuNjc0NTI4NDcgMTAuNjIzMjI5LTcuNDI5MjQ1NCA2LjM3MzkzOCAxNi45ODExMzIzIDIxLjI0NjQ1OSA3OS41OTkwNTc3LTI0LjQzMzQyOGMzOC45MTUwOTYtMzEuMTYxNDczIDU4LjAxODg2OS00Ny4wOTYzMTggNTcuMzExMzIyLTQ3LjgwNDUzMy0uNzA3NTQ4LS43MDgyMTUtNDguODIwNzU2LTM3LjE4MTMwMzYtMTQ0LjMzOTYyNS0xMDkuNDE5MjY1MDR6IiBmaWxsPSIjOGU1YTMwIi8+PC9nPjwvZz48L3N2Zz4="
						walletName="MetaMask"
						walletInstruction="Connect to your MetaMask wallet"
						walletInstallUrl="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
					/>
					<ConnectWalletGeneric
						imgSrc="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+"
						walletName="WalletConnect"
						walletInstruction="Scan with WalletConnect to connect"
					/>
				</div>
				<div className={classes.walletsContainer}>
					<ConnectWalletGeneric
						imgSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2Ny4wNyA3MiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzM5OTZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFydGJvYXJkIDU8L3RpdGxlPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMzkuOTkiIGhlaWdodD0iMjEuNzEiLz48cmVjdCBjbGFzcz0iYSIgeD0iMTguMjgiIHk9IjAuMDMiIHdpZHRoPSIyMS43MSIgaGVpZ2h0PSI3MS45NyIvPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSI1Ni4yMiIgY3k9IjEwLjg1IiByPSIxMC44NSIvPjwvc3ZnPg=="
						walletName="Torus"
						walletInstruction="Scan with your Torus account"
					/>
					<ConnectWalletGeneric
						imgSrc="data:image/png;base64,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"
						walletName="WalletLink"
						walletInstruction="Scan with WalletConnect to connect"
					/>
				</div>
			</DialogContent>
		</ModalBase>
	);
};

export default ConnectToAWalletModal;
