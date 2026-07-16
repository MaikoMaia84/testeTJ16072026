const { test }  = require ('@playwright/test');
const {abrirSiteQA, logarSucessoQA, verificarSeLogadoQA, logarEmailVazioQA, mensagemEmailVazioQA, cadastroQA } = require ('./loginPage')


test('Login com sucesso 2 ', async ({ page }) => {
    await abrirSiteQA(page)
    await logarSucessoQA(page)
    await verificarSeLogadoQA(page)
 })

test('Login email vazio e mansagem ', async ({ page }) => {
    await abrirSiteQA(page)
    await logarEmailVazioQA (page)
    await mensagemEmailVazioQA (page)
 })
test('cadastro QA', async ({ page }) => {
    await abrirSiteQA(page)
    await cadastroQA(page)
 });

