describe('Create Image-Post', () => {
    // Schritt 1: Login
    it('logs in the user', () => {
        cy.visit('/login');

        // Email und Passwort eingeben
        cy.get('input#email').type('admin@example.com');
        cy.get('input#password').type('1234');

        // Login-Button klicken
        cy.get('button[type="submit"]').click();

        // Überprüfung, dass der Login erfolgreich war
        cy.url().should('include', '/home');
    });

    // Schritt 2: Navigation zu create-post page
    it('navigates to the create post page', () => {
        cy.visit("/home")
        cy.get('[id="createButton"]').contains('Create Post').click();
        cy.url().should('include', '/create-post');
    });

    // Schritt 3: Post details einfügen und absenden
    it('fills in the post form and creates a new post', () => {
        cy.get('input#url').type('https://example.com/test-image.jpg');
        cy.get('textarea#description').type('This is a test description for the image post.');

        // Button "Create Post" klicken
        cy.get('button[type="submit"]').click();

        // Alert abfangen
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Post created successfully');
        });

        cy.url().should('include', '/home');
    });

    // Schritt 4: Verifikation, dass der neue Post auf der Homepage angezeigt wird
    it('verifies that the new post appears on the homepage', () => {
        cy.visit('/home');

        // Verifikation, dass das Bild und die Beschreibung des neuen Posts angezeigt wird
        cy.contains('This is a test description for the image post.').should('exist');
        cy.get('img').should('have.attr', 'src', 'https://example.com/test-image.jpg');
    });
});
