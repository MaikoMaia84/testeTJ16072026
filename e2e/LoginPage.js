const { expect }  = require ('@playwright/test');

//LoginPage.js crio as funções/ações que serão usadas no teste 
  const abrirSiteQA = async (page) => {
      // as ações de abrir o site ficam aqui 
    await page.goto('https://automationpratice.com.br/');
  }
  const logarSucessoQA = async (page) => {
       // as ações do login com sucesso ficam aqui
     await page.getByRole('link', { name: ' Login' }).click();
     await page.locator('#user').click();
     await page.locator('#user').fill('234@wer.com.br23');
     await page.locator('#password').click();
     await page.locator('#password').fill('43234234');

  }
  const verificarSeLogadoQA = async (page) => {
        //as ações de verificar com sucesso ficam aqui
     await page.getByRole('button', { name: 'login' }).click();
     await page.getByRole('heading', { name: 'Login realizado' }).click();
     await page.getByRole('button', { name: 'OK' }).click();
     await page.getByRole('link', { name: ' Dashboard' }).click();
  }
  const logarEmailVazioQA = async (page) => {
    await page.getByRole('link', { name: ' Login' }).click();
    await page.getByRole('button', { name: 'login' }).click();
  }
    const mensagemEmailVazioQA = async (page) => {
    await expect(page.getByText('E-mail inválido.')).toBeVisible({timeout: 1000})
  }
  const cadastroQA = async (page) => {
    await page.getByRole('link', { name: ' Cadastro' }).click();
    await page.locator('#user').click();
    await page.locator('#user').fill('maiko maia');
    await page.locator('#email').click();
    await page.locator('#email').fill('emaildomaiko@gmail.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect(page.getByText('Cadastro realizado!')).toBeVisible({timeout: 1000})
    await page.getByRole('button', { name: 'OK' }).click();
  
    await expect(page.getByRole('link', { name: ' Dashboard' })).toBeEnabled({timeout: 2000});


  }


  module.exports ={
    abrirSiteQA,
    logarSucessoQA,
    verificarSeLogadoQA,
    logarEmailVazioQA,
    mensagemEmailVazioQA,
    cadastroQA
  }