module.exports = {
    '@tags':['demo1'],
    'Demo test Google': function (client) {
        client
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Google')
            .click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(2)')
            .pause(5000)
            .end();
    }
};

// to test tags file, run 'node nightwatch -e chrome -a demo1  (e stands for environment, a = tags)