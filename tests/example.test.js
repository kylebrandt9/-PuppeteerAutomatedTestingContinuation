import Homepage from '../pages/HomePage';
import TopBar from '../pages/componets/TopBar';

describe('example', () => {
	let homepage;
	let topbar;

	beforeAll(async () => {
		jest.setTimeout(20000);
		homepage = new Homepage();
		topbar = new TopBar();
	});

	it('Homepage should work', async () => {
		await homepage.visit();
	});

	it('navbar should be displayed', async () => {
		await homepage.isNavbarDisplayed();
		await topbar.isTopBarDisplayed();
	});
});
