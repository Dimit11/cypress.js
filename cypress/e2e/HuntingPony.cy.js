describe('Тестирование интернет магазина', function () {
    
    it('Переход на сайт huntingpony.com', function () {

    
        cy.visit('https://huntingpony.com/');

        cy.get('[data-index="6"] > .header__collections-controls > .header__collections-link').click(); // выбор категории
        cy.get('.product-preview__img-1').click(); //выбор товара
        cy.get('.add-cart-counter__btn-label').wait(4000).click(); //добавление в корзину "БЕЗ wait в итоговой корзине почему-то лежит один товар, хотя каунтер увеличивался до двух.""
        cy.get('[data-add-cart-counter-plus=""]').wait(4000).click(); //увеличить количество до двух "БЕЗ wait в итоговой корзине почему-то лежит один товар, хотя каунтер увеличивался до двух."
        cy.get('.header__control-text').wait(2000).click(); // перейти в корзину
        cy.get('.cart-controls > .button').click(); // оформить заказ
        cy.contains('Оформление заказа')    // сровнение

    })
})