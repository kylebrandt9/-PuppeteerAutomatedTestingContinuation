import Homepage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';
import TopBar from '../pages/componets/TopBar';
import { username, password, timeout } from '../env.js';

describe('End-To-End Test', () => {
	let homePage;
	let topbar;
	let loginPage;
	let feedbackPage;

	beforeAll(async () => {
		jest.setTimeout(timeout);
		homePage = new Homepage();
		loginPage = new LoginPage();
		feedbackPage = new FeedbackPage();
		topbar = new TopBar();
	});

	it('Should Load HomePage', async () => {
		await homePage.visit();
		await homePage.isNavbarDisplayed();
	});
	it('Should Submit FeedBack', async () => {
		await homePage.clickFeedbackLink();
		await feedbackPage.isFeedbackFormDisplayed();
		await feedbackPage.submitFeedback(
			'John Full Test',
			'test@msn.com',
			'testing Subject',
			'Test Comment'
		);
	});
	it('Should Login to Application', async () => {
		await homePage.visit();
		await topbar.isTopBarDisplayed();
		await topbar.clickSignInButton();
		await loginPage.isLoginFormDisplayed();
		await loginPage.login(username, password);
	});
});
