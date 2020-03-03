import Homepage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';
import TopBar from '../pages/componets/TopBar';

describe('example', () => {
	let homepage;
	let topbar;
	let loginpage;
	let feedbackpage;

	beforeAll(async () => {
		jest.setTimeout(20000);
		homepage = new Homepage();
		loginpage = new LoginPage();
		feedbackpage = new FeedbackPage();
		topbar = new TopBar();
	});

	it('Homepage should work', async () => {
		await homepage.visit();
	});

	it('navbar should be displayed', async () => {
		await homepage.isNavbarDisplayed();
		await topbar.isTopBarDisplayed();
	});
	/*
	it('Try to login', async () => {
		await loginpage.visit();
		await loginpage.isLoginFormDisplayed();
		await loginpage.login('username', 'password');
		await loginpage.wait(5000);
	});
	*/
	it('FeedBack should work', async () => {
		await feedbackpage.visit();
		await feedbackpage.isFeedbackFormDisplayed();
		await feedbackpage.submitFeedback(
			'John',
			'test@msn.com',
			'testing Subject',
			'Test Comment'
		);
		await feedbackpage.wait(5000);
	});
});
