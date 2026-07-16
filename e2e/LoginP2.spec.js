const { test }  = require ('@playwright/test');
const {abrirSiteQA, logarSucessoQA, verificarSeLogadoQA, logarEmailVazioQA, mensagemEmailVazioQA, cadastroQA } = require ('./loginPage')


test('Login com sucesso2  ', async ({ page }) => {
    await abrirSiteQA(page)
    await logarSucessoQA(page)
    await verificarSeLogadoQA(page)
 })

test('Login email vazio e mansage2 ', async ({ page }) => {
    await abrirSiteQA(page)
    await logarEmailVazioQA (page)
    await mensagemEmailVazioQA (page)
 })
test('cadastro2', async ({ page }) => {
    await abrirSiteQA(page)
    await cadastroQA(page)
 });

