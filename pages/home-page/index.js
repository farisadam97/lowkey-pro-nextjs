import Container from '@mui/material/Container';
import Navbar from '../../components/navbar/Navbar.component';
import Head from 'next/head';
import styles from '../../styles/homepage.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import React, { useState } from 'react';

export default function HomePage() {
	const [isOpened1, setIsOpened1] = useState(false);
	const [isOpened2, setIsOpened2] = useState(false);
	const [isOpened3, setIsOpened3] = useState(false);
	const [isOpened4, setIsOpened4] = useState(false);

	function toggle1() {
		setIsOpened1(wasOpened => !wasOpened);
		setIsOpened2(false);
		setIsOpened3(false);
		setIsOpened4(false);
	}
	function toggle2() {
		setIsOpened1(false);
		setIsOpened2(wasOpened => !wasOpened);
		setIsOpened3(false);
		setIsOpened4(false);
	}
	function toggle3() {
		setIsOpened1(false);
		setIsOpened2(false);
		setIsOpened3(wasOpened => !wasOpened);
		setIsOpened4(false);
	}
	function toggle4() {
		setIsOpened1(false);
		setIsOpened2(false);
		setIsOpened3(false);
		setIsOpened4(wasOpened => !wasOpened);
	}
	if (typeof window !== 'undefined') {
		localStorage === window.localStorage;
		var currentuser_name = localStorage.getItem('name');

	}
  return (
	<>
		<head>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		</head>
		<Navbar />
		
		<div className={styles.pagehome}>
			<Container maxWidth="xl">
				<div>
					<div className={styles.desktopalignright}>
						<Typography variant="h3" color="#1976d2"
							fontSize={{
								lg: 50,
								md: 40,
								sm: 30,
								xs: 20
							}}
						>
							Welcome {currentuser_name}!
						</Typography> 
						<Typography color="white"
							fontSize={{
								lg: 24,
								md: 20,
								sm: 16,
								xs: 12
							}}
						>
							What do you want to do today?
						</Typography>
					</div>
					<br />
					<div className={styles.mobilefull} style={{ display:"flex" }}>
						
						<div className={styles.homeleft}>
							
							{isOpened1 && (
								<div className={styles.boxcontent}>
									<Typography variant="h4" color="#1976d2"
										fontSize={{
											lg: 32,
											md: 28,
											sm: 24,
											xs: 20
										}}
									>
										View & Edit Profile
									</Typography>
									<br /><br />
									<Typography color="white"
									fontSize={{
											lg: 24,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Visit the page to view your profile and edit the information.
									</Typography>
									<br /><br />
									<a href="/profile" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'10px 20px'}}>Let's Go</Button></a>
								</div>
							)}
							{isOpened2 && (
								<div className={styles.boxcontent}>
									<Typography variant="h4" color="#1976d2"
										fontSize={{
											lg: 32,
											md: 28,
											sm: 24,
											xs: 20
										}}
									>
										Play Games
									</Typography>
									<br /><br />
									<Typography color="white"
									fontSize={{
											lg: 24,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Come enjoy the finest gaming experience on a website designed with you in mind. <br /><br />The fun starts here!
									</Typography>
									<br /><br />
									<a href="/game-list" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'10px 20px'}}>Let's Go</Button></a>
								</div>
							)}
							{isOpened3 && (
								<div className={styles.boxcontent}>
									<Typography variant="h4" color="#1976d2"
										fontSize={{
											lg: 32,
											md: 28,
											sm: 24,
											xs: 20
										}}
									>
										Games History
									</Typography>
									<br /><br />
									<Typography color="white"
									fontSize={{
											lg: 24,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										View the history of the games you have played.
									</Typography>
									<br /><br />
									<a href="/game-history" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'10px 20px'}}>Let's Go</Button></a>
								</div>
							)}
							{isOpened4 && (
								<div className={styles.boxcontent}>
									<Typography variant="h4" color="#1976d2"
										fontSize={{
											lg: 32,
											md: 28,
											sm: 24,
											xs: 20
										}}
									>
										Top Score
									</Typography>
									<br /><br />
									<Typography color="white"
									fontSize={{
											lg: 24,
											md: 20,
											sm: 16,
											xs: 12
										}}
									>
										Check out who got the highest score and the rankings.
									</Typography>
									<br /><br />
									<a href="/top-score" style={{ textDecoration: 'none' }}><Button variant="contained" style={{padding:'10px 20px'}}>Let's Go</Button></a>
								</div>
							)}
						</div>
						<div className={styles.homeright}>
							
							<div className={styles.homepageboxes}>
								<a href="#" style={{ textDecoration: 'none' }} onClick={toggle1}>
									<div>
										<i className={`${styles.fa} fa fa-user`}></i>
										<Typography marginTop={1}
											fontSize={{
												lg: 30,
												md: 30,
												sm: 20,
												xs: 14
											}}
										>
											<Button variant="contained" style={{padding:'10px 20px'}}>View & Edit Profile</Button>
										</Typography>
									</div>
								</a>
								<a href="#" style={{ textDecoration: 'none' }} onClick={toggle2}>
									<div>
										<i className={`${styles.fa} fa fa-gamepad`}></i>
										<Typography marginTop={1}
											fontSize={{
												lg: 30,
												md: 30,
												sm: 20,
												xs: 14
											}}
										>
											<Button variant="contained" style={{padding:'10px 20px'}}>Play Games</Button>
										</Typography>
									</div>
								</a>
								<a href="#" style={{ textDecoration: 'none' }} onClick={toggle3}>
									<div>
										<i className={`${styles.fa} fa fa-history`}></i>
										<Typography marginTop={1}
											fontSize={{
												lg: 30,
												md: 30,
												sm: 20,
												xs: 14
											}}
										>
											<Button variant="contained" style={{padding:'10px 20px'}}>View Games History</Button>
										</Typography>
									</div>
								</a>
								<a href="#" style={{ textDecoration: 'none' }} onClick={toggle4}>
									<div>
										<i className={`${styles.fa} fa fa-trophy`}></i>
										<Typography marginTop={1}
											fontSize={{
												lg: 30,
												md: 30,
												sm: 20,
												xs: 14
											}}
										>
											<Button variant="contained" style={{padding:'10px 20px'}}>View Top Score</Button>
										</Typography>
									</div>
								</a>
							</div>
						</div>
						
						<div style={{ clear: 'both' }}></div>
					</div>
				</div>
			</Container>
		</div>
	</>
  )
}
