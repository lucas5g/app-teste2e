describe('Example', () => {
    beforeAll(async() => {
        await device.launchApp();
    });

    beforeEach(async() => {
        // await device.reloadReactNative();
    });

    it('should have info about cancel subscription', async() => {
        const info = await element(by.text('Cancel anytime. Ofter terms apply.'))
        await expect(info).toBeVisible();
    });

    it('should text your plan', async() => {
        await element(by.id('option-premium')).tap()

        await element(by.id('input-email')).tap()
        await element(by.id('input-email')).typeText('lucas@mail.com')

        await element(by.id('keyboard')).tap()
        await element(by.id('button-subscribe')).tap()

        await new Promise((r) => setTimeout(r, 5000))

        await expect(element(by.id('confirmation-message'))).toBeVisible()
    });


});