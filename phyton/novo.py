# Importação de bibliotecas necessárias
import numpy as np  # Biblioteca para operações matemáticas e com matrizes
import matplotlib.pyplot as plt  # Biblioteca para visualização gráfica
import random  # Biblioteca para gerar escolhas aleatórias
from matplotlib.colors import ListedColormap  # Permite definir um mapa de cores personalizado
import sys  # Usado para encerrar o programa

# Variável global que define o tamanho padrão da matriz do ambiente (6x6)
dimensao = 6

# Definição de um mapa de cores para visualização:
# 0 = azul (limpo), 1 = verde (parede), 2 = amarelo (sujo)
cmap = ListedColormap(['blue', 'green', 'yellow'])

# Função para exibir visualmente a matriz do ambiente com o agente em vermelho
def exibir(matriz):
    plt.imshow(matriz, cmap=cmap)  # Exibe a matriz com cores personalizadas
    plt.plot([posAPAy], [posAPAx], marker='o', color='red', ls='', markersize=20)  # Plota o agente (aspirador)
    plt.show(block=False)  # Mostra o gráfico sem bloquear o código
    plt.pause(0.5)  # Aguarda meio segundo
    plt.clf()  # Limpa a figura para a próxima exibição

# Função que mostra a tela inicial com opções
def tela_inicial():
    plt.figure(figsize=(6, 4), facecolor='black')  # Cria uma figura com fundo preto
    plt.text(0.5, 0.5, 'Super Aspirador', fontsize=20, ha='center', color='white')  # Título
    plt.text(0.5, 0.6, '1. Iniciar com tamanho padrão', fontsize=15, ha='center', color='yellow')
    plt.text(0.5, 0.7, '2. Iniciar com tamanho personalizado', fontsize=15, ha='center', color='yellow')
    plt.text(0.5, 0.4, '3. Sair', fontsize=15, ha='center', color='white')  # Opção de sair
    plt.axis('off')  # Remove os eixos do gráfico
    plt.show()  # Exibe a tela

# Função para processar a escolha do usuário
def escolher_opcao():
    global dimensao  # Permite modificar a variável global
    while True:
        try:
            # Solicita a entrada do usuário
            escolha = int(input("Digite o numero da opção:\n1. Iniciar com tamanho padrão\n2. Iniciar com tamanho personalizado\n3. Sair\n"))
            if escolha == 1:
                return 'padrao'
            elif escolha == 2:
                definir_tamanho()  # Solicita tamanho personalizado
                return 'personalizado'
            elif escolha == 3:
                print("Saindo do programa...")
                sys.exit()  # Encerra o programa
            else:
                print("Opção inválida. Tente novamente.")
        except ValueError:
            print("Entrada inválida. Digite um número.")

# Função para definir o tamanho da matriz do ambiente
def definir_tamanho():
    plt.figure(figsize=(6, 4), facecolor='black')
    plt.text(0.5, 0.5, 'Qual o tamanho que você deseja?', fontsize=15, ha='center', color='yellow')
    plt.axis('off')
    plt.show(block=False)
    global dimensao
    while True:
        try:
            tamanho = int(input("Digite o tamanho da matriz (mínimo 3): "))
            if tamanho >= 3:
                dimensao = tamanho  # Atualiza o tamanho global da matriz
                break
            else:
                print("Digite um número inteiro maior ou igual a 3.")
        except ValueError:
            print("Entrada inválida. Digite um número inteiro.")

# Função que inicializa o ambiente com paredes e sujeira
def inicializar_ambiente():
    ambiente = np.ones((dimensao, dimensao))  # Cria a matriz com paredes (valor 1)
    for i in range(1, dimensao - 1):
        for j in range(1, dimensao - 1):
            if random.random() < 0.3:  # 30% de chance de estar sujo
                ambiente[i, j] = 2
            else:
                ambiente[i, j] = 0  # Limpo
    return ambiente

# Função que verifica se ainda existem células sujas
def chekobj(sala):
    if np.any(sala[1:dimensao - 1, 1:dimensao - 1] == 2):  # Verifica se ainda há sujeira
        return 1  # Ainda há sujeira
    else:
        return 0  # Tudo limpo

# Função de decisão do agente baseada em percepção e objetivo
def agenteObjetivo(percepcao, objObtido):
    x, y, estado = percepcao  # Coordenadas e estado atual

    if objObtido == 0:
        return 'NoOp'  # Nada a fazer

    if estado == 2:
        return 'aspirar'  # Se estiver sujo, aspira

    movimentos_possiveis = []

    # Verifica movimentos válidos e evita voltar em células visitadas
    if x > 1 and (x - 1, y) not in celulas_visitadas and ambiente[x - 1, y] != 1:
        movimentos_possiveis.append('acima')
    if x < dimensao - 2 and (x + 1, y) not in celulas_visitadas and ambiente[x + 1, y] != 1:
        movimentos_possiveis.append('abaixo')
    if y > 1 and (x, y - 1) not in celulas_visitadas and ambiente[x, y - 1] != 1:
        movimentos_possiveis.append('esquerda')
    if y < dimensao - 2 and (x, y + 1) not in celulas_visitadas and ambiente[x, y + 1] != 1:
        movimentos_possiveis.append('direita')

    # Se não houver movimentos não visitados disponíveis, escolhe aleatoriamente qualquer direção
    if not movimentos_possiveis:
        if x > 1:
            movimentos_possiveis.append('acima')
        if x < dimensao - 2:
            movimentos_possiveis.append('abaixo')
        if y > 1:
            movimentos_possiveis.append('esquerda')
        if y < dimensao - 2:
            movimentos_possiveis.append('direita')

    return random.choice(movimentos_possiveis) if movimentos_possiveis else 'NoOp'

# Função que atualiza a posição do agente com base na ação
def atualizarPosicao(movimento):
    global posAPAx, posAPAy  # Coordenadas globais do agente

    if movimento == 'acima' and posAPAx > 1:
        posAPAx -= 1
    elif movimento == 'abaixo' and posAPAx < dimensao - 2:
        posAPAx += 1
    elif movimento == 'esquerda' and posAPAy > 1:
        posAPAy -= 1
    elif movimento == 'direita' and posAPAy < dimensao - 2:
        posAPAy += 1

# Função principal que executa o funcionamento do aspirador
def executar_aspirador():
    while True:
        tela_inicial()  # Mostra o menu inicial
        escolha = escolher_opcao()  # Obtém escolha do usuário

        # Inicialização do ambiente e posição do agente
        global ambiente, posAPAx, posAPAy, celulas_visitadas
        ambiente = inicializar_ambiente()
        posAPAx, posAPAy = 1, 1  # Posição inicial
        celulas_visitadas = set()  # Células já visitadas pelo agente

        objObtido = chekobj(ambiente)  # Verifica se ainda há sujeira
        pontos = 0  # Contador de ações realizadas pelo agente

        # Loop principal de atuação do agente
        while objObtido != 0:
            percepcao = (posAPAx, posAPAy, ambiente[posAPAx, posAPAy])  # Percepção atual
            acao = agenteObjetivo(percepcao, objObtido)  # Decide ação

            if acao == 'aspirar':
                ambiente[posAPAx, posAPAy] = 0  # Aspira (limpa)
            else:
                atualizarPosicao(acao)  # Move o agente

            celulas_visitadas.add((posAPAx, posAPAy))  # Marca como visitado
            objObtido = chekobj(ambiente)  # Verifica se ainda há sujeira
            exibir(ambiente)  # Mostra o ambiente visualmente

            # Mostra no terminal o estado e a ação escolhida
            print(f"Estado da percepção: {ambiente[posAPAx, posAPAy]} Ação escolhida: {acao}")
            pontos += 1  # Incrementa contador de pontos (ações)

        print("!!!Tudo limpo!!!")  # Informa que o objetivo foi atingido
        print(f"Pontos: -> {pontos}")  # Mostra o total de ações feitas
        break  # Sai do laço principal após limpar tudo

# Chamada da função principal para executar o programa
executar_aspirador()