import tkinter as tk
import random

SIZE = 15

class TicTacToe:
    def __init__(self, root):
        self.root = root
        self.root.title("15x15 Tic-Tac-Toe")
        self.buttons = {}
        self.board = [['' for _ in range(SIZE)] for _ in range(SIZE)]
        self.current = 'X'
        self.create_board()

    def create_board(self):
        for r in range(SIZE):
            for c in range(SIZE):
                btn = tk.Button(self.root, text=' ', width=2, height=1,
                                font=('Arial', 12, 'bold'),
                                command=lambda row=r, col=c: self.player_move(row, col))
                btn.grid(row=r, column=c)
                self.buttons[(r,c)] = btn

    def player_move(self, row, col):
        if self.board[row][col] == '' and self.current == 'X':
            self.make_move(row, col, 'X')
            if self.check_winner(row, col, 'X'):
                self.show_winner("Player X wins!")
                return
            if all(all(cell != '' for cell in row) for row in self.board):
                self.show_winner("It's a draw!")
                return
            self.current = 'O'
            self.root.after(200, self.bot_move)  # bot moves after 200ms

    def bot_move(self):
        move = self.find_best_move()
        if move:
            r, c = move
            self.make_move(r, c, 'O')
            if self.check_winner(r, c, 'O'):
                self.show_winner("Bot (O) wins!")
                return
            if all(all(cell != '' for cell in row) for row in self.board):
                self.show_winner("It's a draw!")
                return
        self.current = 'X'

    def make_move(self, row, col, symbol):
        self.board[row][col] = symbol
        self.buttons[(row,col)].config(text=symbol, state='disabled')

    def check_winner(self, row, col, symbol):
        directions = [(1,0), (0,1), (1,1), (1,-1)]
        for dr, dc in directions:
            count = 1
            r, c = row + dr, col + dc
            while 0 <= r < SIZE and 0 <= c < SIZE and self.board[r][c] == symbol:
                count += 1
                r += dr
                c += dc
            r, c = row - dr, col - dc
            while 0 <= r < SIZE and 0 <= c < SIZE and self.board[r][c] == symbol:
                count += 1
                r -= dr
                c -= dc
            if count >= 5:
                return True
        return False

    def find_best_move(self):
        # 1. Try to win
        for r in range(SIZE):
            for c in range(SIZE):
                if self.board[r][c] == '':
                    self.board[r][c] = 'O'
                    if self.check_winner(r, c, 'O'):
                        self.board[r][c] = ''
                        return (r, c)
                    self.board[r][c] = ''
        # 2. Block player
        for r in range(SIZE):
            for c in range(SIZE):
                if self.board[r][c] == '':
                    self.board[r][c] = 'X'
                    if self.check_winner(r, c, 'X'):
                        self.board[r][c] = ''
                        return (r, c)
                    self.board[r][c] = ''
        # 3. Random move
        empty_cells = [(r, c) for r in range(SIZE) for c in range(SIZE) if self.board[r][c] == '']
        return random.choice(empty_cells) if empty_cells else None

    def show_winner(self, message):
        for btn in self.buttons.values():
            btn.config(state='disabled')
        winner_label = tk.Label(self.root, text=message, font=('Arial', 14, 'bold'))
        winner_label.grid(row=SIZE, column=0, columnspan=SIZE, pady=10)

if __name__ == "__main__":
    root = tk.Tk()
    game = TicTacToe(root)
    root.mainloop()
