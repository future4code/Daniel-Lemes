import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";


test('Input existe na tela', () => {
    const { getByPlaceholderText } = render(<App />)

    const input = getByPlaceholderText('Novo post')

    expect(input).toBeInTheDocument()
})

test('botão existe na tela', () => {
    const { getByText } = render(<App />)

    expect(getByText(/Adicionar/)).toBeInTheDocument()
})



test('O novo post deve aparecer abaixo, com a informação inserida no input', () => {
    const { getByPlaceholderText, getByText } = render(<App />)
    const button = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, { target: { value: 'Teste novo post' } })
    fireEvent.click(button)

    expect(getByText(/teste novo post/i)).toBeInTheDocument()
    expect(input).toHaveValue("")
})

test("Deve aparecer a quantidade de posts", () => {
    const { getByPlaceholderText, getByText } = render(<App />)
    const button = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, { target: { value: 'Teste novo post' } })
    fireEvent.click(button)

    expect(getByText(/Quantidade de Posts/i)).toBeInTheDocument()
})


test('Clicar no botão curtir, o botão deve alterar para Descurtir', () => {
    const { getByText, getByPlaceholderText } = render(<App />)
    const buttonAdd = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, { target: { value: 'Teste novo post' } })
    fireEvent.click(buttonAdd)
    const buttonLike = getByText(/Curtir/)
    fireEvent.click(buttonLike)

    expect(getByText(/descurtir/i)).toBeInTheDocument()
})

test('Clicar no botão curtir depois descurtir, o botão deve alterar para Curtir novamente', () => {
    const { getByText, getByPlaceholderText } = render(<App />)
    const buttonAdd = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, { target: { value: 'Teste novo post' } })
    fireEvent.click(buttonAdd)
    fireEvent.click(getByText('Curtir'))
    fireEvent.click(getByText('Descurtir'))

    expect(getByText('Curtir')).toBeInTheDocument()
})

test("Ao clicar em Adicionar, aparecer Por Favor....", () => {
    // preparação
    const { getByText } = render(<App />);
    const noMessage = getByText(/Adicionar/i);
    // execução
    fireEvent.click(noMessage);
    // verificação
    let message = getByText(/por favor/i);
    expect(message).toHaveTextContent(/por favor/i);

});

