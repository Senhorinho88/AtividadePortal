import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('Portal sindical', () => {
  it('abre somente uma dúvida por vez e permite fechar a dúvida atual', async () => {
    const user = userEvent.setup(); render(<App />);
    const first = screen.getByRole('button', { name: /Onde posso consultar/ });
    const second = screen.getByRole('button', { name: /O que é uma convenção/ });
    await user.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getAllByRole('region')).toHaveLength(1);
    await user.click(second);
    expect(first).toHaveAttribute('aria-expanded', 'false');
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getAllByRole('region')).toHaveLength(1);
    await user.click(second);
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });
  it('troca os benefícios por clique e permite navegar pelas abas com teclado', async () => {
    const user = userEvent.setup(); render(<App />);
    expect(within(screen.getByRole('tabpanel')).getByText('Consultas e exames')).toBeVisible();
    const education = screen.getByRole('tab', { name: 'Educação e cursos' });
    await user.click(education);
    expect(education).toHaveAttribute('aria-selected', 'true');
    expect(within(screen.getByRole('tabpanel')).getByText('Formação profissional')).toBeVisible();
    expect(screen.queryByRole('heading', { name: 'Consultas e exames' })).not.toBeInTheDocument();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Lazer e férias' })).toHaveFocus();
    expect(within(screen.getByRole('tabpanel')).getByText('Colônia de férias')).toBeVisible();
    await user.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: 'Saúde e farmácia' })).toHaveAttribute('aria-selected', 'true');
  });
  it('filtra documentos ao selecionar uma opção e fecha o menu', async () => {
    const user = userEvent.setup(); render(<App />);
    await user.click(screen.getByRole('button', { name: 'Todos os documentos' }));
    await user.click(screen.getByRole('menuitemradio', { name: 'Editais de assembleia' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('1 documento');
    expect(screen.getByRole('heading', { name: 'Assembleia da categoria' })).toBeVisible();
    expect(screen.queryByRole('heading', { name: 'Convenção Coletiva 2026' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Editais de assembleia' })).toHaveFocus();
    const link = screen.getByRole('link', { name: /Baixar exemplo/ });
    expect(link).toHaveAttribute('download', 'assembleia-exemplo.txt');
    expect(decodeURIComponent(link.getAttribute('href'))).toContain('SEM VALIDADE OFICIAL');
    await user.click(screen.getByRole('button', { name: 'Editais de assembleia' }));
    await user.click(screen.getByRole('menuitemradio', { name: 'Todos os documentos' }));
    expect(screen.getByRole('status')).toHaveTextContent('3 documentos');
  });
  it('fecha o menu ao clicar fora ou pressionar Escape', async () => {
    const user = userEvent.setup(); render(<App />);
    const trigger = screen.getByRole('button', { name: 'Todos os documentos' });
    await user.click(trigger);
    expect(screen.getByRole('menu')).toBeVisible();
    await user.click(screen.getByRole('heading', { level: 1 }));
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await user.click(trigger);
    await user.keyboard('{ArrowDown}{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
