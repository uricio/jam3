describe('Sign Up to Facebook Brand', () => {
    it('should create an account with valid email address', () => {
        browser.url('https://10minutemail.net/')
        browser.setWindowSize(1400, 800)
        const email = $('#fe_text').getValue();
        console.log(email);
        browser.newWindow('https://en.facebookbrand.com/')
        $("#app > header > nav > ul.nav-list > li > a").click()
        $("#root > section > article > section > div > div > form > div.form__text > a").click()
        $("#first_name").setValue("Mauricio")
        $("#last_name").setValue("Alvarez")
        $("#email").setValue(email)
        $("#password").setValue("P@ssword!1")
        $("#password-confirm").setValue("P@ssword!1")
        browser.pause(75000)        
        $("#root > section > article > section > div > div > form > div:nth-child(7) > button.Button.SignButton.form__button-primary").click()
        browser.closeWindow()
        browser.switchWindow('10minutemail.net')
        browser.pause(15000)
        $('*=Verify Your Facebook Brand Resource Center Account').click()
        $("*=Verify Your Email").click()
        browser.switchWindow('Facebook Brand Resources')
        $("#signin-email").setValue(email)
        $("#signin-password").setValue('P@ssword!1')
        $("#root > section > article > section > div > div > form > div:nth-child(4) > button.Button.SignButton.form__button-primary").click();
        expect.toHaveText('*=My Requests')
        expect.toHaveText('*=You currently have no requests submitted')
        browser.pause(5000)
    });
});


