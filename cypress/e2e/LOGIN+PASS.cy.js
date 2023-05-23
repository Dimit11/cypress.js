describe('Тестирование формы логин и пароль', function () {
    
    it('Переход на сайт login.qa.studio', function () {

        // 1.1

        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')

        // 1.2

        cy.visit('https://login.qa.studio/');        
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('ya@ya.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        //1.3 Правильный логин + неправильный пароль, проверить текст и крестик

        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudiо1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        //1.4 Неправильный логин + правильный пароль, проверить текст и крестик

        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('dima@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        //1.5 Логин без @ + правильный пароль, проверить текст

        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');

        //1.6 Проверка регистра + правильный пароль, проверить текст и крестик

        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})
