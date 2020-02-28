import Homepage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TopBar from '../pages/componets/TopBar';

describe('example', () => {
	let homepage;
	let topbar;
	let loginpage;

	beforeAll(async () => {
		jest.setTimeout(20000);
		homepage = new Homepage();
		loginpage = new LoginPage();
		topbar = new TopBar();
	});

	it('Homepage should work', async () => {
		await homepage.visit();
	});

	it('navbar should be displayed', async () => {
		await homepage.isNavbarDisplayed();
		await topbar.isTopBarDisplayed();
	});
	it('Try to login', async () => {
		await loginpage.visit();
		await loginpage.isLoginFormDisplayed();
		await loginpage.login('username', 'password');
		await loginpage.wait(5000);
	});
});
