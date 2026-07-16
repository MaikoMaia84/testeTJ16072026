# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginP2.spec.js >> cadastro QA
- Location: e2e\LoginP2.spec.js:16:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#user')

```

# Test source

```ts
  1  | const { expect }  = require ('@playwright/test');
  2  | 
  3  | //LoginPage.js crio as funções/ações que serão usadas no teste 
  4  |   const abrirSiteQA = async (page) => {
  5  |       // as ações de abrir o site ficam aqui 
  6  |     await page.goto('https://automationpratice.com.br/');
  7  |   }
  8  |   const logarSucessoQA = async (page) => {
  9  |        // as ações do login com sucesso ficam aqui
  10 |      await page.getByRole('link', { name: ' Login' }).click();
  11 |      await page.locator('#user').click();
  12 |      await page.locator('#user').fill('234@wer.com.br23');
  13 |      await page.locator('#password').click();
  14 |      await page.locator('#password').fill('43234234');
  15 | 
  16 |   }
  17 |   const verificarSeLogadoQA = async (page) => {
  18 |         //as ações de verificar com sucesso ficam aqui
  19 |      await page.getByRole('button', { name: 'login' }).click();
  20 |      await page.getByRole('heading', { name: 'Login realizado' }).click();
  21 |      await page.getByRole('button', { name: 'OK' }).click();
  22 |      await page.getByRole('link', { name: ' Dashboard' }).click();
  23 |   }
  24 |   const logarEmailVazioQA = async (page) => {
  25 |     await page.getByRole('link', { name: ' Login' }).click();
  26 |     await page.getByRole('button', { name: 'login' }).click();
  27 |   }
  28 |     const mensagemEmailVazioQA = async (page) => {
  29 |     await expect(page.getByText('E-mail inválido.')).toBeVisible({timeout: 1000})
  30 |   }
  31 |   const cadastroQA = async (page) => {
  32 |     await page.getByRole('link', { name: ' Cadastro' }).click();
> 33 |     await page.locator('#user').click();
     |                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  34 |     await page.locator('#user').fill('maiko maia');
  35 |     await page.locator('#email').click();
  36 |     await page.locator('#email').fill('emaildomaiko@gmail.com');
  37 |     await page.locator('#password').click();
  38 |     await page.locator('#password').fill('123456');
  39 |     await page.getByRole('button', { name: 'Cadastrar' }).click();
  40 |     await expect(page.getByText('Cadastro realizado!')).toBeVisible({timeout: 1000})
  41 |     await page.getByRole('button', { name: 'OK' }).click();
  42 |   
  43 |     await expect(page.getByRole('link', { name: ' Dashboard' })).toBeEnabled({timeout: 2000});
  44 | 
  45 | 
  46 |   }
  47 | 
  48 | 
  49 |   module.exports ={
  50 |     abrirSiteQA,
  51 |     logarSucessoQA,
  52 |     verificarSeLogadoQA,
  53 |     logarEmailVazioQA,
  54 |     mensagemEmailVazioQA,
  55 |     cadastroQA
  56 |   }
```